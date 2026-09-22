export default function AtomLogo({ className = 'w-8 h-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* nucleus */}
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      <circle cx="32" cy="32" r="9" stroke="currentColor" strokeWidth="2" opacity="0.35" />

      {/* orbits */}
      <ellipse cx="32" cy="32" rx="24" ry="9" stroke="currentColor" strokeWidth="3" transform="rotate(0 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="9" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="24" ry="9" stroke="currentColor" strokeWidth="3" transform="rotate(-60 32 32)" />

      {/* electrons */}
      <circle cx="56" cy="32" r="4" fill="currentColor" />
      <circle cx="8" cy="32" r="4" fill="currentColor" />
      <circle cx="44" cy="12.2" r="3" fill="currentColor" />
      <circle cx="20" cy="52.8" r="3" fill="currentColor" />
    </svg>
  )
}