import { useDark } from '~/hooks'

export default function Footer() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="text-xl mt-6 flex justify-center gap-4 pb-4">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-moon" /> : <div className="i-carbon-sun" />}
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/the0bob"
        target="_blank"
        title="GitHub"
      />
    </nav>

  )
}
