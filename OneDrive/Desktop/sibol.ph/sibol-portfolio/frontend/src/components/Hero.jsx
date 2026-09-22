import nx8 from '../assets/nx8.png'

const CALENDLY_URL = 'https://calendly.com/your-username'

const offerings = [
  'Web Development',
  'CRM Solutions',
  'HRIS Solutions',
  'Custom Business Systems',
  'Custom Websites',
  'Business Landing Pages',
  'Business Dashboards',
  'Custom Software Development',
]

export default function Hero() {
  return (
    <>
      {/* Full-viewport animated gradient behind everything */}
      <div className="fixed inset-0 -z-10 hero-bg-dark" />

      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-[640px] mx-auto">
          <img src={nx8} alt="N8X" className="h-28 w-auto mx-auto mb-5 drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]" />

          <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-[-0.03em] text-[#111] dark:text-[#f5f5f7]">
            We build software
            <br />
            that{' '}
            <span className="text-blue-400">runs your business.</span>
          </h1>

          <p className="mt-6 text-[15px] text-[#777] dark:text-[#888] leading-relaxed max-w-[440px] mx-auto">
            From web apps to e-commerce to mobile, we design, build, and scale the software that powers modern businesses.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="pointer"
              className="bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-medium px-7 py-3 rounded-full transition-all duration-150 shadow-[0_2px_12px_rgba(59,130,246,0.35)] hover:shadow-[0_4px_20px_rgba(59,130,246,0.5)]"
            >
              Book a Free Consultation
            </a>
            <a
              href="#team"
              data-cursor="pointer"
              className="text-[13px] font-medium text-[#888] dark:text-[#999] hover:text-blue-400 px-7 py-3 rounded-full border border-blue-900/60 dark:border-blue-900/60 hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-colors duration-150"
            >
              Meet the Team
            </a>
          </div>
        </div>

        {/* Services marquee */}
        <div className="relative z-10 mt-20 w-full max-w-[800px] mx-auto">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#bbb] dark:text-[#555] mb-6 font-medium">
            What Services We Offer
          </p>
          <div className="overflow-hidden mask-gradient">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...offerings, ...offerings].map((offering, i) => (
                <span
                  key={`${offering}-${i}`}
                  className="text-[15px] font-semibold text-[#ccc]/70 dark:text-[#444] shrink-0 tracking-tight"
                >
                  {offering}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
