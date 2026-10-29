function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-brand-light">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-brand-dark md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHeader;
