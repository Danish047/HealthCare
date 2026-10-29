import { Link } from "react-router-dom";
import ContactButtons from "../components/common/ContactButtons";
import ServiceCard from "../components/common/ServiceCard";
import StepList from "../components/common/StepList";
import { services } from "../data/services";
import { business } from "../data/business";

const trustPoints = [
  { title: "Care at your home", text: "Your family member stays in a familiar, comfortable place." },
  { title: "Suitable caregivers", text: "We match a caregiver based on your family's needs." },
  { title: "Clear terms", text: "Scope, schedule and fees are agreed before the service starts." },
  { title: "Easy to reach", text: "Call, WhatsApp or send an enquiry. No sign-up needed." },
];

function HeroSection() {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="font-hindi text-brand">{business.hindiTagline}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-brand-dark md:text-5xl">
          Caring home support for your loved ones in Jaipur
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Elderly care, patient care, baby care and post-hospital care, given at
          home with comfort and respect.
        </p>
        <div className="mt-8">
          <ContactButtons />
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <Link to="/services" className="text-sm font-semibold text-brand hover:underline">
          View all services →
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Why families choose us</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div key={point.title} className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold">{point.title}</h3>
              <p className="mt-1 text-sm text-muted">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold">How it works</h2>
      <div className="mt-8">
        <StepList />
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-4 py-12 text-white">
        <h2 className="text-2xl font-semibold md:text-3xl">Need care at home?</h2>
        <p className="mt-2 text-white/85">
          Talk to us today. We will understand your needs and suggest the right support.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand"
          >
            Send Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <StepsSection />
      <CallToAction />
    </>
  );
}

export default Home;
