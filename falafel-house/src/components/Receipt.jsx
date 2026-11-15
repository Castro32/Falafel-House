import { receiptLines } from '../data'

const BARS = [3,1,2,1,1,3,1,2,2,1,3,1,1,2,1,3,2,1,1,3,1,2,1,1,2,3,1,1,2,1,3,1,2,1,1,3,2,1,2,1,1,3,1,2,1,3,1,1]

function formatNow() {
  const d = new Date()
  const date = d.toLocaleDateString('en-GB') // dd/mm/yyyy
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  return { date, time }
}

/** A receipt that "prints" out of the slot. Remount it (change its key) to replay. */
export default function Receipt() {
  const { date, time } = formatNow()

  return (
    <div className="relative animate-print bg-[#FBF8F1] px-5 pb-[18px] pt-[22px] font-mono text-xs text-[#2B2B2B] shadow-[0_8px_18px_rgba(0,0,0,.08)]">
      <div className="text-center text-sm font-bold tracking-[0.2em]">FALAFEL HOUSE</div>
      <div className="mt-1 text-center text-[11px] text-[#555]">SARIT CENTRE · WESTLANDS · NAIROBI</div>

      <hr className="my-3.5 border-0 border-t border-dashed border-[#9A9A9A]" />
      <div className="flex justify-between">
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div className="mt-1">TABLE 07 · COUNTER 02</div>
      <hr className="my-2.5 border-0 border-t border-dashed border-[#9A9A9A]" />

      <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
        {receiptLines.map((l) => (
          <li key={l.label} className="flex items-baseline gap-2.5">
            <span>{l.qty}</span>
            <span>{l.label}</span>
            <span className="flex-1 border-b border-dotted border-[#9A9A9A]" />
            <span className="font-bold">✓</span>
          </li>
        ))}
        <li className="flex items-baseline gap-2.5 text-stamp line-through">
          <span>0x</span>
          <span>MEAT</span>
        </li>
      </ul>

      <div className="absolute right-[18px] top-[168px] -rotate-[14deg] rounded border-2 border-stamp px-2 py-0.5 font-marker text-lg text-stamp">
        PAID
      </div>

      <hr className="my-3.5 border-0 border-t border-dashed border-[#9A9A9A]" />
      <div className="flex justify-between text-[13px] font-bold">
        <span>TOTAL:</span>
        <span className="text-fh">A BRIGHTER DAY</span>
      </div>

      <div aria-hidden="true" className="mb-1.5 mt-4 flex h-10 items-stretch gap-0.5">
        {BARS.map((w, i) => (
          <span key={i} className="bg-ink" style={{ width: `${w}px` }} />
        ))}
      </div>
      <div className="text-center text-[10px] tracking-[0.12em] text-[#555]">ASANTE · COME HUNGRY</div>
    </div>
  )
}
