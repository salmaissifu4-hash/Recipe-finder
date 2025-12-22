export default function Header({ dark, setDark }) {
  return (
    <header className="flex items-center justify-between p-6">
      <div className="flex-1 text-center">
        <img src="/nouri-logo.jpg" alt="NouriBloom" className="inline-block h-12" />
      </div>

      <div className="absolute left-6 top-6">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 rounded-full border bg-white"
          aria-pressed={dark}
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
