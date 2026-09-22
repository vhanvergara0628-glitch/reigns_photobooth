import { useRef, useState } from 'react'

const team = [
  {
    name: 'Vhan Vergara',
    role: 'Chief Executive Officer',
    description:
      'Leads business development, client relations, marketing, company direction, and overall project management.',
    image: '/vhan.png',
    alt: 'Vhan Vergara',
  },
  {
    name: 'Christian Vergara',
    role: 'Chief Technology Officer',
    description:
      'Leads technical development, software architecture, and the implementation of reliable technology solutions.',
    image: '/christian.png',
    alt: 'Christian Vergara',
  },
  {
    name: 'Tristan Reboredo',
    role: 'Chief Technology Officer',
    description:
      'Leads backend development, systems engineering, and the technical infrastructure behind N8X solutions.',
    image: '/realtristan.png',
    alt: 'Tristan Reboredo',
  },
]

function MemberCard({ member }) {
  return (
    <div className="border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl rounded-2xl overflow-hidden">
      <div className="aspect-[4/5] bg-gradient-to-b from-blue-950/80 to-blue-950/40 dark:from-[#0a1430] dark:to-[#0a0f1f] relative overflow-hidden flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.alt || member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <span className="absolute inset-1 rounded-xl border border-dashed border-blue-500/25 pointer-events-none" />
            <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/60 select-none">
              {member.placeholder}
            </span>
          </>
        )}
      </div>
      <div className="p-6 text-left">
        <h3 className="text-[16px] font-semibold text-[#111] dark:text-[#f5f5f7]">
          {member.name}
        </h3>
        <p className="mt-1 text-[12px] font-medium text-blue-400 uppercase tracking-wider">
          {member.role}
        </p>
        <p className="mt-3 text-[13px] text-[#888] dark:text-[#666] leading-relaxed">
          {member.description}
        </p>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const goTo = (target) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelectorAll('[data-team-card]')[target]
    if (!card) return
    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const left = track.scrollLeft + cardRect.left - trackRect.left - (trackRect.width - cardRect.width) / 2
    track.scrollTo({ left, behavior: 'smooth' })
  }

  const syncIndex = () => {
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const mid = rect.left + rect.width / 2
    let closest = 0
    let best = Infinity
    track.querySelectorAll('[data-team-card]').forEach((card, i) => {
      const r = card.getBoundingClientRect()
      const dist = Math.abs(r.left + r.width / 2 - mid)
      if (dist < best) {
        best = dist
        closest = i
      }
    })
    setIndex(closest)
  }

  return (
    <section id="team" className="py-24 relative z-0 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400">
          Founding Team
        </span>
        <h2 className="mt-3 text-[32px] sm:text-[36px] font-bold text-[#111] dark:text-[#f5f5f7] tracking-tight">
          The People Behind N8X
        </h2>
        <p className="mt-3 text-[14px] text-[#888] dark:text-[#666] max-w-[460px] mx-auto leading-relaxed">
          N8X IT Solutions is built by a team focused on helping businesses turn their ideas and processes into practical digital solutions.
        </p>

        <div className="mt-14 hidden md:grid md:grid-cols-3 gap-4">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>

        <div className="mt-14 md:hidden">
          <div
            ref={trackRef}
            onScroll={syncIndex}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth overscroll-x-contain"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((member) => (
              <div
                key={member.name}
                data-team-card
                className="w-full flex-shrink-0 snap-center"
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              data-cursor="pointer"
              aria-label="Previous founder"
              className="w-11 h-11 rounded-full bg-white dark:bg-[#1a1a1a] border border-blue-900/60 dark:border-blue-900/60 flex items-center justify-center text-[#111] dark:text-[#f5f5f7] active:scale-95 shadow-md transition-all duration-150 enabled:hover:bg-blue-600 enabled:hover:text-white enabled:hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-[12px] font-medium text-[#888] dark:text-[#666] tabular-nums">
              {index + 1} / {team.length}
            </span>

            <button
              onClick={() => goTo(index + 1)}
              disabled={index === team.length - 1}
              data-cursor="pointer"
              aria-label="Next founder"
              className="w-11 h-11 rounded-full bg-white dark:bg-[#1a1a1a] border border-blue-900/60 dark:border-blue-900/60 flex items-center justify-center text-[#111] dark:text-[#f5f5f7] active:scale-95 shadow-md transition-all duration-150 enabled:hover:bg-blue-600 enabled:hover:text-white enabled:hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}