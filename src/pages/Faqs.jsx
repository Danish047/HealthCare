import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { faqs } from "../data/faqs";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-xl bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium"
      >
        {faq.question}
        <span className="text-xl text-brand">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="px-5 pb-4 text-sm text-muted">{faq.answer}</p>}
    </div>
  );
}

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleFaq(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <>
      <PageHeader title="FAQs" subtitle="Answers to common questions from families." />

      <section className="mx-auto max-w-3xl space-y-3 px-4 py-14">
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
          />
        ))}
      </section>
    </>
  );
}

export default Faqs;
