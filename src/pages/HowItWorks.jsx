import PageHeader from "../components/common/PageHeader";
import StepList from "../components/common/StepList";
import ContactButtons from "../components/common/ContactButtons";

function HowItWorks() {
  return (
    <>
      <PageHeader
        title="How It Works"
        subtitle="From your first call to the start of care, in five simple steps."
      />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <StepList />
        <p className="mt-8 max-w-2xl text-sm text-muted">
          Caregiver details are shared privately with your family, where
          appropriate and with the needed consent.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ContactButtons />
      </section>
    </>
  );
}

export default HowItWorks;
