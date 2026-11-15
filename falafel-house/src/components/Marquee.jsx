import { ticker } from '../data'
import { Star } from './Icons'

export default function Marquee() {
  // Repeat the list so the -50% loop is seamless on wide screens
  const items = [...ticker, ...ticker, ...ticker, ...ticker]

  return (
    <div className="relative z-[3] overflow-hidden bg-fh py-2.5" aria-label={ticker.join(', ')}>
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-[22px] whitespace-nowrap pr-[22px] font-display text-[30px] uppercase leading-tight text-cream"
          >
            <span>{t}</span>
            <Star />
          </div>
        ))}
      </div>
    </div>
  )
}
