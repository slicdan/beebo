import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="py-16">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-ink-muted dark:text-night-muted">The address does not match any page in Beebo.</p>
      <Link to="/" className="mt-4 inline-block font-semibold text-brand-red hover:text-brand-red-strong">
        Go to the home page
      </Link>
    </div>
  )
}
