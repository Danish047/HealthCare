# Uma Home Health Care – Website (Phase 1, dummy UI)

Public website UI for client review. Built from the FRD.
Admin login, dashboard and database are **not** included yet.

## Tech
React 18 + Vite + Tailwind CSS v4 + React Router

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build
```bash
npm run build
```
Output goes to `dist/`. `public/_redirects` makes page routes work on Netlify.

## Folder structure
```
src/
  data/          business details, services, steps, FAQs, nav links
  components/
    layout/      Header, Footer, MobileActionBar, Layout
    common/      PageHeader, ContactButtons, ServiceCard, StepList
    enquiry/     EnquiryForm, FormField
  pages/         Home, About, Services, HowItWorks, Contact, Faqs, PrivacyPolicy
  services/      enquiryService.js (dummy submit – replace with API later)
  utils/         validateEnquiry.js
```

## Notes for the real project
- `src/services/enquiryService.js` → replace the dummy function with a POST to the backend.
- Phone numbers, address and WhatsApp number are in `src/data/business.js`.
- FAQ answers and Privacy Policy text are placeholders; confirm with the client.
