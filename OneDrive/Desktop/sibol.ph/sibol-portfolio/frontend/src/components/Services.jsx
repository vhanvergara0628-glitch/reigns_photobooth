import { useEffect, useRef, useState } from 'react'

const SCROLL_UNIT = 190
const FAN = 6
const FAN_GAP = 2.2
const LEAVE = 88
const DRIFT = 22
const ROT = 1.2

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

const category = 'Web Development'

const services = [
  {
    title: 'Business Landing Pages',
    summary: 'Professional landing pages designed to showcase your business.',
    details: [
      'Custom-built landing pages',
      'Responsive design',
      'Business-focused layouts',
      'Contact/inquiry sections',
      'Basic SEO',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <rect x="7" y="17" width="10" height="3" rx="1.5" />
      </svg>
    ),
  },
  {
    title: 'Custom Websites',
    summary: 'Custom-built, fully responsive websites tailored to your brand.',
    details: [
      'Custom UI/UX design',
      'Responsive website development',
      "Design based on the client's branding",
      'Business-focused sections',
      'Contact/inquiry functionality',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M9 9l-2 2 2 2" />
        <path d="M15 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: 'Responsive Web Design',
    summary: 'Interfaces that adapt seamlessly across every device.',
    details: [
      'Mobile-friendly layouts',
      'Tablet optimization',
      'Desktop optimization',
      'Cross-device compatibility',
      'Clean and accessible interfaces',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="13" height="16" rx="2" />
        <path d="M8 18h.01" />
        <path d="M15 8h5a2 2 0 012 2v8a2 2 0 01-2 2h-5" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    summary: 'Intuitive, user-centered design that keeps visitors engaged.',
    details: [
      'Custom interface design',
      'User experience planning',
      'Wireframes and prototypes',
      'Brand-aligned visual design',
      'User-focused interactions',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Contact & Inquiry Systems',
    summary: 'Forms and systems that capture leads and inquiries.',
    details: [
      'Contact forms',
      'Inquiry collection',
      'Lead capture',
      'Email/notification integration',
      'Business inquiry management',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 7l-10 6L2 7" />
      </svg>
    ),
  },
  {
    title: 'SEO Optimization',
    summary: 'Search-friendly structure that helps customers find you.',
    details: [
      'Basic on-page SEO',
      'Search-friendly structure',
      'Metadata optimization',
      'Semantic HTML',
      'Performance-focused implementation',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 13l2.5-2.5 2 2L16 9" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbot Integration',
    summary: 'AI assistants that engage visitors and qualify leads.',
    details: [
      'AI-powered customer assistance',
      'Automated responses',
      'Frequently asked questions',
      'Lead qualification',
      'Website chatbot integration',
    ],
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="7" width="16" height="11" rx="3" />
        <path d="M12 7V4" />
        <path d="M9 2h6" />
        <path d="M8 13h.01" />
        <path d="M12 13h.01" />
        <path d="M16 13h.01" />
      </svg>
    ),
  },
]

export default function Services() {
  const deckRef = useRef(null)
  const cardRefs = useRef([])
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return

    const cardCount = services.length
    let raf = null

    const update = () => {
      raf = null

      const rect = deck.getBoundingClientRect()
      const viewport = window.innerHeight
      const height = Math.max(1, rect.height - viewport)
      const progress = clamp01(-rect.top / height)
      const s = progress * cardCount

      cardRefs.current.forEach((card, i) => {
        if (!card) return

        const d = i - s

        let y
        if (d <= -1) {
          y = -LEAVE - (-d - 1) * DRIFT
        } else if (d < 0) {
          y = -LEAVE * smooth(-d)
        } else if (d < 1) {
          y = FAN * smooth(d)
        } else {
          y = FAN + FAN_GAP * (d - 1)
        }

        let scale
        if (d >= 1) {
          scale = Math.max(0.86, 1 - 0.03 * (d - 1))
        } else if (d <= -1) {
          scale = 0.9
        } else {
          scale = 1
        }

        const rot =
          d >= 1
            ? ((i % 2 ? 1 : -1) * ROT) * Math.min(1, (d - 1) * 0.5)
            : d <= -1
              ? ((i % 2 ? 1 : -1) * ROT) * 0.6
              : 0

        const depth = Math.max(0, 1 - Math.abs(d))
        const zIndex = 10 + Math.round(depth * 50)
        const isActive = d >= 0 && d < 1

        card.style.transform = `translate3d(0, ${y}vh, 0) translate(-50%, -50%) scale(${scale}) rotate(${rot}deg)`
        card.style.zIndex = zIndex
        card.style.pointerEvents = isActive ? 'auto' : 'none'
      })

      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="services">
      <div className="max-w-[1000px] mx-auto px-6 text-center pt-24 pb-10 relative z-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400">
          What We Offer
        </span>
        <h2 className="mt-3 text-[32px] sm:text-[36px] font-bold text-[#111] dark:text-[#f5f5f7] tracking-tight">
          Our Services
        </h2>
        <p className="mt-3 text-[14px] text-[#888] dark:text-[#666] max-w-[400px] mx-auto">
          End-to-end solutions tailored for your digital growth
        </p>
      </div>

      <div ref={deckRef} className="relative" style={{ height: `${services.length * SCROLL_UNIT}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full w-full">
            {services.map((service, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={service.title}
                  ref={(el) => {
                        cardRefs.current[i] = el
                      }}
                  data-cursor="pointer"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  className="absolute left-1/2 top-1/2 w-[min(calc(100vw-2.5rem),820px)] will-change-transform"
                >
                  <div className="p-5 sm:p-7 md:p-8 rounded-2xl border border-white/60 dark:border-white/10 bg-white/90 dark:bg-[#141419]/95">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-blue-400 bg-blue-900 shadow-[0_0_24px_rgba(59,130,246,0.3)] shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-400">
                          {category}
                        </div>
                        <h3 className="mt-0.5 text-[18px] sm:text-[20px] font-semibold text-[#111] dark:text-[#f5f5f7] tracking-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-[14px] text-[#888] dark:text-[#888] leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-4 sm:hidden">
                      <button
                        type="button"
                        data-cursor="pointer"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-400 active:text-blue-300 transition-colors duration-200"
                      >
                        {isOpen ? 'Hide Details ↑' : 'See Details →'}
                      </button>
                    </div>

                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      } sm:grid-rows-[1fr]`}
                    >
                      <div className="overflow-hidden">
                        <div className="sm:hidden border-t border-blue-950/20 dark:border-blue-400/10 mt-4 pt-4">
                          <ul className="space-y-2">
                            {service.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-2 text-[13px] text-[#888] dark:text-[#aaa]">
                                <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="hidden sm:block border-t border-blue-950/20 dark:border-blue-400/10 mt-5 pt-5 lg:grid lg:grid-cols-2 gap-x-8 gap-y-2.5">
                          {service.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-2 text-[13px] text-[#888] dark:text-[#aaa]">
                              <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}