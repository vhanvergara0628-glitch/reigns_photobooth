import { useState } from 'react'
import nx8 from '../assets/nx8.png'

const CALENDLY_URL = 'https://calendly.com/your-username'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <div className="h-16" aria-hidden />

      <div className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1 bg-[#0a0a0a]/90 dark:bg-[#0a0a0a]/90 backdrop-blur-xl rounded-full px-2 py-1.5 shadow-[0_1px_20px_rgba(59,130,246,0.15)] border border-blue-900/60 dark:border-blue-900/60">

          <a href="#home" className="flex items-center gap-1.5 px-3 shrink-0" data-cursor="pointer">
            <img src={nx8} alt="N8X" className="h-5 w-auto shrink-0" />
          </a>

          <div className="w-px h-4 bg-blue-900/60 dark:bg-blue-900/60 hidden md:block" />

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="pointer"
                className="text-[12px] font-medium text-[#666] dark:text-[#888] hover:text-[#111] dark:hover:text-[#f5f5f7] px-3 py-1.5 rounded-full hover:bg-blue-950/50 dark:hover:bg-blue-950/50 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-blue-900/60 dark:bg-blue-900/60 hidden md:block" />

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="pointer"
            className="text-[12px] font-semibold bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-full shadow-[0_0_14px_rgba(59,130,246,0.4)] transition-all duration-150 shrink-0"
          >
            Book a Call
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            data-cursor="pointer"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-[#888] dark:text-[#888] hover:bg-blue-950/50 dark:hover:bg-blue-950/50 transition-all duration-150 shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed top-[72px] left-4 right-4 z-50 md:hidden bg-[#0a0a0a]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border border-blue-900/60 dark:border-blue-900/60 rounded-2xl p-4 shadow-[0_8px_30px_rgba(59,130,246,0.15)] dark:shadow-[0_8px_30px_rgba(59,130,246,0.15)]">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[13px] font-medium text-[#666] dark:text-[#888] hover:text-[#111] dark:hover:text-[#f5f5f7] px-4 py-2.5 rounded-xl hover:bg-blue-950/50 dark:hover:bg-blue-950/50 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
