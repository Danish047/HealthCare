import PageHeader from "../components/common/PageHeader";
import ServiceCard from "../components/common/ServiceCard";
import ContactButtons from "../components/common/ContactButtons";
import { services } from "../data/services";

function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Choose the type of care your family needs. We will discuss the details with you before starting."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} showPoints />
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <p className="mb-4 text-muted">Not sure which service fits? Talk to us.</p>
        <ContactButtons />
      </section>
    </>
  );
}

export default Services;
