const features = [
  {
    number: '01',
    title: 'Business-Focused',
    description: 'We focus on understanding your business before building the solution.',
  },
  {
    number: '02',
    title: 'Modern Technology',
    description: 'We use modern technologies to create fast, responsive, and maintainable websites and applications.',
  },
  {
    number: '03',
    title: 'Growing With You',
    description: "We're building long-term partnerships, not just delivering a website and disappearing.",
  },
]

export default function Testimonials() {
  return (
    <section id="why-us" className="py-24 relative z-0 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-400">
          Why Work With Us
        </span>
        <h2 className="mt-3 text-[32px] sm:text-[36px] font-bold text-[#111] dark:text-[#f5f5f7] tracking-tight">
          Built With Purpose
        </h2>
        <p className="mt-3 text-[14px] text-[#888] dark:text-[#666] max-w-[440px] mx-auto">
          We're a growing development team focused on creating practical, modern, and reliable digital solutions for businesses.
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-4 text-left group/features">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="p-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/50 dark:bg-white/[0.06] backdrop-blur-xl transition-all duration-300 ease-out md:group-hover/features:opacity-70 md:group-hover/features:scale-[0.98] md:hover:!opacity-100 md:hover:!scale-[1.03] md:hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.2),0_0_32px_rgba(59,130,246,0.18)] md:hover:shadow-[0_0_0_1px_rgba(59,130,246,0.25),0_0_40px_rgba(59,130,246,0.22)]"
            >
              <div className="text-[12px] font-semibold text-blue-400 tracking-wider">
                {feature.number}
              </div>
              <h3 className="mt-3 text-[16px] font-semibold text-[#111] dark:text-[#f5f5f7]">
                {feature.title}
              </h3>
              <p className="mt-2 text-[13px] text-[#777] dark:text-[#999] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}