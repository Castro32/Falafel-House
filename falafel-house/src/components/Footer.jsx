// import { useState } from 'react'
// import { branches, links, quickLinks, socialLinks, companyLinks } from '../data'
// import { ArrowRight, Pin } from './Icons'

// function LinkColumn({ title, items }) {
//   return (
//     <nav aria-label={title} className="flex flex-col gap-2">
//       <span className="footer-heading">{title}</span>
//       {items.map((l) => (
//         <a key={l.label} href={l.href} className="footer-link">
//           {l.label}
//         </a>
//       ))}
//     </nav>
//   )
// }

// export default function Footer() {
//   const [email, setEmail] = useState('')
//   const [joined, setJoined] = useState(false)

//   const onSubmit = (e) => {
//     e.preventDefault()
//     if (!email) return
//     // TODO: connect to your mailing list provider
//     setJoined(true)
//   }

//   return (
//     <footer id="contact" className="px-6">
//       <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-8 pb-9 sm:grid-cols-2 lg:grid-cols-5">
//         <div className="flex gap-3">
//           <Pin />
//           <div className="flex flex-col gap-3 text-[13px]">
//             {branches.map(([a, b]) => (
//               <div key={a} className="font-bold uppercase leading-tight">
//                 {a}
//                 <br />
//                 {b}
//               </div>
//             ))}
//             <a href={links.phoneHref} className="underline hover:text-fh">
//               {links.phone}
//             </a>
//           </div>
//         </div>

//         <LinkColumn title="Quick links" items={quickLinks} />
//         <LinkColumn title="Social" items={socialLinks} />
//         <LinkColumn title="Company" items={companyLinks} />

//         <div className="flex flex-col gap-2">
//           <span className="text-[15px] font-bold uppercase">Join the falafel fam</span>
//           <span className="text-[13px] text-[#333]">Get BOGOF alerts, new drops and more.</span>
//           {joined ? (
//             <p className="mt-2 text-[13px] font-bold text-fh">You&apos;re in. Asante!</p>
//           ) : (
//             <form
//               onSubmit={onSubmit}
//               className="mt-2 flex max-w-[280px] items-center rounded-full border-[1.5px] border-ink py-1 pl-4 pr-1"
//             >
//               <label htmlFor="fh-mail" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="fh-mail"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Your mail"
//                 className="h-9 min-w-0 flex-1 border-0 bg-transparent font-body text-sm outline-offset-4"
//               />
//               <button
//                 type="submit"
//                 aria-label="Subscribe"
//                 className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-fh text-white hover:bg-[#156E23]"
//               >
//                 <ArrowRight className="h-4 w-4" />
//               </button>
//             </form>
//           )}
//         </div>
//       </div>

//       {/* Giant wordmark */}
//       <div
//         aria-hidden="true"
//         className="mt-[3vw] whitespace-nowrap pb-[2.4vw] text-center font-round text-[15.6vw] font-bold leading-[0.82] tracking-[-0.035em]"
//       >
//         <span className="text-fh-bright">falafel</span> <span className="text-ink">house</span>
//       </div>
//     </footer>
//   )
// }
import { useState } from 'react'
import { branches, links, quickLinks, socialLinks, companyLinks } from '../data'
import { ArrowRight, Pin } from './Icons'

function LinkColumn({ title, items }) {
  return (
    <nav aria-label={title} className="flex flex-col gap-2.5 md:gap-3">
      <span className="footer-heading !text-base md:!text-lg min-[1600px]:!text-2xl">{title}</span>
      {items.map((l) => (
        <a
          key={l.label}
          href={l.href}
          className="footer-link !text-base md:!text-[17px] min-[1600px]:!text-xl"
        >
          {l.label}
        </a>
      ))}
    </nav>
  )
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // TODO: connect to your mailing list provider
    setJoined(true)
  }

  return (
    <footer id="contact" className="overflow-x-clip px-5 pt-4 md:px-6 2xl:px-12">
      <div className="mx-auto grid max-w-[1392px] grid-cols-2 gap-x-6 gap-y-10 pb-10 md:grid-cols-3 md:gap-y-12 lg:grid-cols-5 lg:gap-x-10 min-[1600px]:max-w-[1800px] min-[1600px]:gap-x-16 min-[1600px]:pb-14">
        {/* Branches */}
        <div className="col-span-2 flex gap-3 md:col-span-3 lg:col-span-1">
          <Pin />
          <div className="flex flex-col gap-4 text-sm md:text-base min-[1600px]:text-xl">
            {branches.map(([a, b]) => (
              <div key={a} className="font-bold uppercase leading-tight">
                {a}
                <br />
                {b}
              </div>
            ))}
            <a href={links.phoneHref} className="underline hover:text-fh">
              {links.phone}
            </a>
          </div>
        </div>

        <LinkColumn title="Quick links" items={quickLinks} />
        <LinkColumn title="Social" items={socialLinks} />
        <LinkColumn title="Company" items={companyLinks} />

        {/* Newsletter */}
        <div className="col-span-2 flex flex-col gap-2 md:col-span-3 lg:col-span-1">
          <span className="text-lg font-bold uppercase md:text-xl min-[1600px]:text-2xl">
            Join the falafel fam
          </span>
          <span className="text-sm text-[#333] md:text-base min-[1600px]:text-xl">
            Get BOGOF alerts, new drops and more.
          </span>
          {joined ? (
            <p className="mt-2 text-base font-bold text-fh min-[1600px]:text-xl">You&apos;re in. Asante!</p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-3 flex w-full max-w-[420px] items-center rounded-full border-[1.5px] border-ink py-1 pl-5 pr-1 lg:max-w-[300px] min-[1600px]:max-w-[420px] min-[1600px]:py-1.5"
            >
              <label htmlFor="fh-mail" className="sr-only">
                Email address
              </label>
              <input
                id="fh-mail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your mail"
                className="h-11 min-w-0 flex-1 border-0 bg-transparent font-body text-base outline-offset-4 min-[1600px]:h-12 min-[1600px]:text-lg"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fh text-white hover:bg-[#156E23] min-[1600px]:h-12 min-[1600px]:w-12"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Giant wordmark */}
      <div
        aria-hidden="true"
        className="-mx-5 mt-4 overflow-hidden whitespace-nowrap pb-[2.4vw] text-center font-round text-[17vw] font-bold leading-[0.82] tracking-[-0.035em] md:-mx-6 md:mt-[3vw] md:text-[16.5vw] 2xl:-mx-12"
      >
        <span className="text-fh-bright">falafel</span> <span className="text-ink">house</span>
      </div>
    </footer>
  )
}