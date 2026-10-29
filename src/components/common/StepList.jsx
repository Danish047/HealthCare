import { steps } from "../../data/steps";

function StepList() {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-2xl bg-white p-5 shadow-sm">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
            {index + 1}
          </span>
          <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm text-muted">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export default StepList;
