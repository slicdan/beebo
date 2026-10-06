import { useSystemStatus } from './useSystemStatus'

function Row({ label, value, ok }: { label: string; value: string; ok?: boolean }) {
  const tone =
    ok === undefined
      ? 'text-sm font-medium'
      : ok
        ? 'text-sm font-semibold text-ok dark:text-ok-night'
        : 'text-sm font-semibold text-bad dark:text-bad-night'
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-b-0 dark:border-night-line">
      <dt className="text-sm text-ink-muted dark:text-night-muted">{label}</dt>
      <dd className={tone}>{value}</dd>
    </div>
  )
}

export function SystemStatusCard() {
  const { data, isPending, isError } = useSystemStatus()

  return (
    <section
      aria-labelledby="system-status-heading"
      className="rounded-xl border border-line bg-surface px-5 py-4 dark:border-night-line dark:bg-night-raised"
    >
      <h2 id="system-status-heading" className="text-base font-semibold">
        System status
      </h2>

      {isPending && <p className="py-3 text-sm text-ink-muted dark:text-night-muted">Checking the API…</p>}

      {isError && (
        <p role="alert" className="py-3 text-sm text-bad dark:text-bad-night">
          The API did not respond. Start the backend on port 8080 and reload this page.
        </p>
      )}

      {data && (
        <dl>
          <Row label="API" value={data.status ?? 'unknown'} ok={data.status === 'UP'} />
          <Row label="Database" value={data.database ?? 'unknown'} ok={data.database === 'UP'} />
          <Row label="Schema version" value={data.schemaVersion ?? 'unknown'} />
          <Row label="Backend version" value={data.version ?? 'unknown'} />
        </dl>
      )}
    </section>
  )
}
