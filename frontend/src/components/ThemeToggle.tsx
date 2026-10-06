import { useTheme } from '@/app/theme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-md px-3 py-1.5 text-sm text-ink-muted hover:text-ink dark:text-night-muted dark:hover:text-night-ink"
    >
      Switch to {next} theme
    </button>
  )
}
