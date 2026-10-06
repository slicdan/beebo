import { Link, Outlet } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function AppShell() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-5">
      <header className="flex items-center justify-between py-5">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-brand-red">
          Beebo
        </Link>
        <ThemeToggle />
      </header>
      <main className="flex-1 pb-12">
        <Outlet />
      </main>
    </div>
  )
}
