import { useState } from "react";
import { Link } from "react-router-dom";
import FormField, { inputClass } from "./FormField";
import { getServiceTitles } from "../../data/services";
import { validateEnquiry, hasErrors } from "../../utils/validateEnquiry";
import { submitEnquiry } from "../../services/enquiryService";

const emptyForm = {
  name: "",
  phone: "",
  service: "",
  location: "",
  startDate: "",
  message: "",
};

function getToday() {
  return new Date().toISOString().split("T")[0];
}

function SuccessMessage({ onReset }) {
  return (
    <div className="rounded-2xl bg-brand-light p-6 text-center" role="status">
      <h3 className="text-2xl font-semibold text-brand-dark">Thank you!</h3>
      <p className="mt-2 text-muted">
        Your enquiry has been received. Our team will call you soon.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-semibold text-brand hover:underline"
      >
        Send another enquiry
      </button>
    </div>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    // Clear the error of this field once the user starts fixing it.
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");

    const newErrors = validateEnquiry(form);
    if (hasErrors(newErrors)) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitEnquiry(form);
      setIsSubmitted(true);
      setForm(emptyForm);
    } catch {
      setSubmitError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function resetForm() {
    setErrors({});
    setIsSubmitted(false);
  }

  if (isSubmitted) {
    return <SuccessMessage onReset={resetForm} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Name" htmlFor="name" required error={errors.name}>
          <input id="name" name="name" type="text" value={form.name}
            onChange={handleChange} className={inputClass} />
        </FormField>

        <FormField label="Phone number" htmlFor="phone" required error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="numeric" maxLength={10}
            value={form.phone} onChange={handleChange} className={inputClass} />
        </FormField>
      </div>

      <FormField label="Service required" htmlFor="service" required error={errors.service}>
        <select id="service" name="service" value={form.service}
          onChange={handleChange} className={inputClass}>
          <option value="">Select a service</option>
          {getServiceTitles().map((title) => (
            <option key={title} value={title}>{title}</option>
          ))}
        </select>
      </FormField>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Care location / area" htmlFor="location" required error={errors.location}>
          <input id="location" name="location" type="text" placeholder="e.g. Jagatpura, Jaipur"
            value={form.location} onChange={handleChange} className={inputClass} />
        </FormField>

        <FormField label="Preferred start date" htmlFor="startDate">
          <input id="startDate" name="startDate" type="date" min={getToday()}
            value={form.startDate} onChange={handleChange} className={inputClass} />
        </FormField>
      </div>

      <FormField label="Message / requirements" htmlFor="message" required error={errors.message}>
        <textarea id="message" name="message" rows={4} value={form.message}
          onChange={handleChange} className={inputClass}
          placeholder="Who needs care, and for how many hours a day?" />
      </FormField>

      <p className="text-xs text-muted">
        Please do not share detailed medical information here. See our{" "}
        <Link to="/privacy-policy" className="text-brand underline">Privacy Policy</Link>.
      </p>

      {submitError && <p className="text-sm text-red-600">{submitError}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}

export default EnquiryForm;
