import PageHeader from "../components/common/PageHeader";
import { CallButton, WhatsAppButton } from "../components/common/ContactButtons";
import EnquiryForm from "../components/enquiry/EnquiryForm";
import { business } from "../data/business";

function ContactDetails() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Call us</h2>
        <div className="mt-3 flex flex-col gap-3">
          {business.phones.map((phone) => (
            <CallButton key={phone} phone={phone} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">WhatsApp</h2>
        <div className="mt-3">
          <WhatsAppButton />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="mt-2 text-muted">{business.address}</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Call, WhatsApp, or send us an enquiry. No sign-up needed."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1fr_2fr]">
        <ContactDetails />

        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold">Send an enquiry</h2>
          <p className="mb-6 mt-1 text-sm text-muted">
            Share a few details and we will call you back.
          </p>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

export default Contact;
