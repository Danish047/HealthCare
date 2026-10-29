import PageHeader from "../components/common/PageHeader";
import { business } from "../data/business";

// Dummy policy text. Final wording must be reviewed by the client before launch.
const sections = [
  {
    heading: "What we collect",
    text: "When you send an enquiry, we collect your name, phone number, the service you need, your care location or area, a preferred start date (if given), and your message.",
  },
  {
    heading: "Why we collect it",
    text: "We use these details only to contact you and understand your care requirement.",
  },
  {
    heading: "What we do not ask for",
    text: "We do not ask for detailed medical information through the website form. Please do not share sensitive medical details in your message.",
  },
  {
    heading: "Who can see it",
    text: "Your enquiry is stored securely and can only be seen by our authorised administrator.",
  },
  {
    heading: "Sharing",
    text: "We do not sell or share your details with others for marketing.",
  },
  {
    heading: "Contact us",
    text: `For any question about your data, call us on ${business.phones.join(" or ")}.`,
  },
];

function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect and use your enquiry details."
      />

      <section className="mx-auto max-w-3xl space-y-8 px-4 py-14">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="text-xl font-semibold">{section.heading}</h2>
            <p className="mt-2 text-muted">{section.text}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default PrivacyPolicy;
