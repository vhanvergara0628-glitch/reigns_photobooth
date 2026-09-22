import nx8 from '../assets/nx8.png'

export default function Footer() {
  return (
    <footer className="relative z-0 border-t border-blue-900/50 dark:border-blue-900/50 py-12">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <a href="#home" className="inline-flex items-center" data-cursor="pointer">
              <img src={nx8} alt="N8X" className="h-6 w-auto" />
            </a>
            <p className="mt-3 text-[13px] text-[#888] dark:text-[#666] max-w-[320px] leading-relaxed md:mx-0 mx-auto">
              Software development company building modern, scalable software that runs your business.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#111] dark:text-[#f5f5f7] uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Services', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    data-cursor="pointer"
                    className="text-[13px] text-[#888] dark:text-[#666] hover:text-blue-400 transition-colors duration-150"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-[#111] dark:text-[#f5f5f7] uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61594453239146" target="_blank" rel="noopener noreferrer" data-cursor="pointer" className="text-[13px] text-[#888] dark:text-[#666] hover:text-blue-400 transition-colors duration-150">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" data-cursor="pointer" className="text-[13px] text-[#888] dark:text-[#666] hover:text-blue-400 transition-colors duration-150">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:hello@n8x.ph" data-cursor="pointer" className="text-[13px] text-[#888] dark:text-[#666] hover:text-blue-400 transition-colors duration-150">
                  hello@n8x.ph
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 dark:border-blue-900/50 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[12px] text-[#ccc] dark:text-[#555]">
            &copy; {new Date().getFullYear()} N8X
          </p>
          <p className="text-[12px] text-[#ccc] dark:text-[#555]">
            Built with care in the Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}
