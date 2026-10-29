import { Link } from "react-router-dom";
import { business, getCallLink, getWhatsAppLink } from "../../data/business";

const buttonBase =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold";

function CallButton({ phone }) {
  return (
    <a
      href={getCallLink(phone)}
      className={`${buttonBase} bg-brand text-white hover:bg-brand-dark`}
    >
      📞 Call {phone}
    </a>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      className={`${buttonBase} bg-[#25D366] text-white hover:opacity-90`}
    >
      💬 WhatsApp
    </a>
  );
}

function EnquiryButton() {
  return (
    <Link
      to="/contact"
      className={`${buttonBase} border border-brand bg-white text-brand hover:bg-brand-light`}
    >
      Send Enquiry
    </Link>
  );
}

// Call + WhatsApp + Enquiry buttons, used on Home and other pages.
function ContactButtons({ showEnquiry = true }) {
  return (
    <div className="flex flex-wrap gap-3">
      <CallButton phone={business.phones[0]} />
      <WhatsAppButton />
      {showEnquiry && <EnquiryButton />}
    </div>
  );
}

export { CallButton, WhatsAppButton };
export default ContactButtons;
