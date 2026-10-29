import PageHeader from "../components/common/PageHeader";
import ContactButtons from "../components/common/ContactButtons";
import { business } from "../data/business";

const commitments = [
  "Treat every person with respect and kindness",
  "Understand each family's needs before starting",
  "Share caregiver details privately and only with consent",
  "Agree on scope, schedule and fees clearly before service begins",
];

function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Home care support for families in Jaipur."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="mt-4 text-muted">
            {business.name} provides home-care support for families looking
            after elderly people, patients, babies, and people who need help after
            hospital discharge.
          </p>
          <p className="mt-3 text-muted">
            We are based in Jagatpura, Jaipur. Our aim is simple: help your loved
            ones get good care in the comfort of their own home.
          </p>
          <p className="mt-4 font-hindi text-brand">{business.hindiTagline}</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">Our care commitment</h2>
          <ul className="mt-4 space-y-3">
            {commitments.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brand">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <ContactButtons />
      </section>
    </>
  );
}

export default About;
