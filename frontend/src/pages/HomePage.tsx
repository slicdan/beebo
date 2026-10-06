import { SystemStatusCard } from '@/features/system/SystemStatusCard'

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Foundation is running</h1>
        <p className="mt-2 max-w-prose text-ink-muted dark:text-night-muted">
          This page confirms the frontend can reach the backend and the database. Accounts and posts arrive in the
          next phases.
        </p>
      </div>
      <SystemStatusCard />
    </div>
  )
}
