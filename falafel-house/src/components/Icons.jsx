export function ArrowRight({ className = 'h-3.5 w-3.5', stroke = 'currentColor' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function Star({ className = 'h-[22px] w-[22px]' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="#FFD23F">
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z" />
    </svg>
  )
}

export function Leaf({ className }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="#141414" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
      <path d="M5 19l8-8" />
    </svg>
  )
}

export function Pin({ className = 'mt-0.5 h-[22px] w-[22px] shrink-0' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="#141414">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  )
}
