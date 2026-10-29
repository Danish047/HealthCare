// Dummy version: no backend yet.
// In the real project, replace the body with an API call, for example:
//   return fetch("/api/enquiries", { method: "POST", ... })

export async function submitEnquiry(enquiry) {
  console.log("Enquiry (dummy, not saved):", enquiry);
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: true };
}
