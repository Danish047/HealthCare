// Required fields as per FRD: name, phone, service, location, message.
// Preferred start date is optional.

function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, "");
  return /^[6-9]\d{9}$/.test(digitsOnly);
}

export function validateEnquiry(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidPhone(form.phone)) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }

  if (!form.service) {
    errors.service = "Please select a service.";
  }

  if (!form.location.trim()) {
    errors.location = "Please enter your area or location.";
  }

  if (!form.message.trim()) {
    errors.message = "Please tell us a little about your requirement.";
  }

  return errors;
}

export function hasErrors(errors) {
  return Object.keys(errors).length > 0;
}
