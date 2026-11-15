import { bestsellers } from '../data'
import { ArrowRight } from './Icons'

export default function Bestsellers() {
  return (
    <section id="menu" className="px-6 pb-14">
      <div className="mx-auto max-w-[1392px]">
        <div className="mb-[22px] flex flex-wrap items-center justify-between gap-4">
          <h2 className="m-0 font-heavy text-[26px] font-normal uppercase tracking-[-0.02em]">Our bestsellers</h2>
          <a href="#menu" className="btn border-2 border-fh text-ink">
            View full menu <ArrowRight stroke="#1A852B" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((item) => (
            <a
              key={item.name}
              href="#menu"
              className="group relative flex min-h-[280px] flex-col items-center gap-1 rounded-[14px] bg-card px-4 pb-[22px] pt-7 transition-transform duration-200 hover:-translate-y-1.5"
            >
              {item.tag && (
                <span className="absolute left-3.5 top-3.5 flex h-[34px] min-w-[34px] items-center justify-center rounded-full bg-fh px-1.5 text-[11px] font-bold text-white">
                  {item.tag}
                </span>
              )}
              <img
                src={item.img}
                alt={item.alt}
                className="block h-[170px] w-[170px] object-contain transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
              />
              <span className="mt-2.5 text-[15px] font-semibold">{item.name}</span>
              <span className="text-[13px] font-bold text-fh">{item.price}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
