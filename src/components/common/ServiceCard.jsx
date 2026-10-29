function ServiceCard({ service, showPoints = false }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="text-3xl" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="mt-3 text-xl font-semibold text-brand-dark">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">{service.summary}</p>

      {showPoints && (
        <ul className="mt-4 space-y-1 text-sm">
          {service.points.map((point) => (
            <li key={point}>✓ {point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceCard;
