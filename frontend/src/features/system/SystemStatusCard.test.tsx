import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { SystemStatusCard } from './SystemStatusCard'

function renderCard() {
  const client = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return render(
    <QueryClientProvider client={client}>
      <SystemStatusCard />
    </QueryClientProvider>,
  )
}

describe('SystemStatusCard', () => {
  it('shows API, database and schema version from the backend', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(
        async () =>
          new Response(
            JSON.stringify({ status: 'UP', database: 'UP', schemaVersion: '1', version: '0.0.1-SNAPSHOT' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } },
          ),
      ),
    )
    renderCard()

    expect(await screen.findByText('Schema version')).toBeInTheDocument()
    expect(screen.getAllByText('UP')).toHaveLength(2)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('explains what to do when the API is unreachable', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('{}', { status: 502 })))
    renderCard()

    expect(await screen.findByRole('alert')).toHaveTextContent('Start the backend on port 8080')
  })
})
