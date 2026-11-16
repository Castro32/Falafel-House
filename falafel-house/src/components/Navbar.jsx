// import logo from '../assets/logo.png'
// import { navLinks, links } from '../data'
// import { ArrowRight } from './Icons'

// export default function Navbar() {
//   return (
//     <header className="relative flex items-center justify-between gap-4 px-6 py-3.5">
//       <nav aria-label="Main" className="hidden flex-1 gap-6 text-[13px] font-semibold uppercase tracking-wide md:flex">
//         {navLinks.map((l) => (
//           <a key={l.label} href={l.href} className="hover:text-fh">
//             {l.label}
//           </a>
//         ))}
//       </nav>

//       <a href="#top" aria-label="Falafel House home" className="shrink-0">
//         <img src={logo} alt="Falafel House" className="block h-[58px] w-[58px]" />
//       </a>

//       <div className="flex flex-1 justify-end">
//         <a href={links.order} className="btn-solid">
//           Order now <ArrowRight />
//         </a>
//       </div>
//     </header>
//   )
// }
import { useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks, links } from '../data'
import { ArrowRight } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50 bg-white">
      <div className="mx-auto flex max-w-[1392px] items-center justify-between gap-4 px-5 py-3 md:px-6 md:py-3.5 2xl:px-12 min-[1600px]:max-w-[1800px] min-[1600px]:py-5">
        {/* Desktop links */}
        <nav
          aria-label="Main"
          className="hidden flex-1 gap-6 text-sm font-semibold uppercase tracking-wide md:flex lg:gap-9 lg:text-base min-[1600px]:gap-12 min-[1600px]:text-lg"
        >
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-fh">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent p-0 md:hidden"
        >
          <span className="relative block h-[18px] w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-200 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-0.5 w-6 bg-ink transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-ink transition-all duration-200 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>

        {/* Logo: centered on mobile, in the flow on desktop */}
        <a
          href="#top"
          aria-label="Falafel House home"
          className="absolute left-1/2 shrink-0 -translate-x-1/2 md:static md:translate-x-0"
        >
          <img
            src={logo}
            alt="Falafel House"
            className="block h-[52px] w-[52px] md:h-[58px] md:w-[58px] lg:h-[68px] lg:w-[68px] min-[1600px]:h-[84px] min-[1600px]:w-[84px]"
          />
        </a>

        {/* Order button */}
        <div className="flex flex-1 justify-end">
          <a
            href={links.order}
            className="btn-solid flex min-h-[44px] items-center justify-center gap-2 px-4 text-[13px] md:min-h-[48px] md:px-6 md:text-sm lg:min-h-[56px] lg:px-8 lg:text-base min-[1600px]:min-h-[64px] min-[1600px]:px-10 min-[1600px]:text-lg"
          >
            Order now <ArrowRight />
          </a>
        </div>
      </div>

      {/* Mobile dropdown */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`absolute left-0 right-0 top-full overflow-hidden bg-white shadow-[0_12px_24px_rgba(0,0,0,.08)] transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-5 pb-4 pt-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? undefined : -1}
              className="border-b border-black/10 py-4 text-base font-semibold uppercase tracking-wide last:border-b-0 hover:text-fh"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}