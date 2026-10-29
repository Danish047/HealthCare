import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block font-semibold text-brand hover:underline">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;
