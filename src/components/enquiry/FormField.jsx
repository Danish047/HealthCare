// Label + input + error message wrapper, so every field looks the same.

export const inputClass =
  "mt-1 w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20";

function FormField({ label, htmlFor, required, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export default FormField;
