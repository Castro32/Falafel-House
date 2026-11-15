import logo from '../assets/logo.png'
import { navLinks, links } from '../data'
import { ArrowRight } from './Icons'

export default function Navbar() {
  return (
    <header className="relative flex items-center justify-between gap-4 px-6 py-3.5">
      <nav aria-label="Main" className="hidden flex-1 gap-6 text-[13px] font-semibold uppercase tracking-wide md:flex">
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-fh">
            {l.label}
          </a>
        ))}
      </nav>

      <a href="#top" aria-label="Falafel House home" className="shrink-0">
        <img src={logo} alt="Falafel House" className="block h-[58px] w-[58px]" />
      </a>

      <div className="flex flex-1 justify-end">
        <a href={links.order} className="btn-solid">
          Order now <ArrowRight />
        </a>
      </div>
    </header>
  )
}
