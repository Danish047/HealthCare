// All business details in one place, so they are easy to update later.

export const business = {
  name: "Uma Home Health Care",
  tagline: "Care | Comfort | Always With You",
  hindiTagline: "आपके अपनों की देखभाल, हमारी जिम्मेदारी।",
  phones: ["9691551267", "7566833705"],
  whatsappNumber: "9691551267",
  address:
    "Indra Gandhi Nagar, Sector 2, Ghati Karlon, Jagatpura, Jaipur, Rajasthan 302017",
};

export function getCallLink(phone) {
  return `tel:+91${phone}`;
}

export function getWhatsAppLink() {
  const message = "Hello, I would like to know about your home care services.";
  return `https://wa.me/91${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
