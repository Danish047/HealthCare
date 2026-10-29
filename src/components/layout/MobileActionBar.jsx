import { Link } from "react-router-dom";
import { business, getCallLink, getWhatsAppLink } from "../../data/business";

// Fixed bar at the bottom on mobile, so Call / WhatsApp / Enquiry is always one tap away.
function MobileActionBar() {
  const itemClass = "flex-1 py-3 text-center text-sm font-semibold";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-black/10 bg-white shadow-lg lg:hidden">
      <a href={getCallLink(business.phones[0])} className={`${itemClass} text-brand`}>
        Call
      </a>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className={`${itemClass} bg-[#25D366] text-white`}
      >
        WhatsApp
      </a>
      <Link to="/contact" className={`${itemClass} bg-brand text-white`}>
        Enquire
      </Link>
    </div>
  );
}

export default MobileActionBar;
