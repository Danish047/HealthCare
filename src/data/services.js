// Services listed in the FRD (section 5).
// Nursing is not listed until qualified staff are confirmed.

export const services = [
  {
    id: "elderly-care",
    title: "Elderly Care at Home",
    icon: "👵",
    summary:
      "Daily support for elderly family members so they stay safe and comfortable at home.",
    points: [
      "Help with daily routine and personal care",
      "Company and support through the day",
      "Help with meals and medicine reminders",
    ],
  },
  {
    id: "patient-care",
    title: "Patient Care at Home",
    icon: "🛏️",
    summary:
      "Caring attendants for patients who need regular help and attention at home.",
    points: [
      "Help with movement and hygiene",
      "Care as per the family's routine",
      "Day, night or full-time support",
    ],
  },
  {
    id: "baby-care",
    title: "Baby Care at Home",
    icon: "👶",
    summary:
      "Gentle, trained help for parents with newborns and young babies.",
    points: [
      "Help with feeding and bathing",
      "Support for new mothers",
      "Day or night assistance",
    ],
  },
  {
    id: "post-hospital-care",
    title: "Post-Hospital Care at Home",
    icon: "🏠",
    summary:
      "Support after hospital discharge, so recovery at home is easier for the whole family.",
    points: [
      "Help settling back at home",
      "Support with daily activities while recovering",
      "Flexible duration as per need",
    ],
  },
];

export function getServiceTitles() {
  return services.map((service) => service.title);
}
