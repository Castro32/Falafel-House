// // // // // // import { images, links } from '../data'
// // // // // // import { Leaf } from './Icons'

// // // // // // export default function Hero() {
// // // // // //   return (
// // // // // //     <section id="top" className="relative px-6 pt-4">
// // // // // //       {/* Headline: three words spread edge to edge */}
// // // // // //       <h1 className="relative z-0 m-0 flex justify-between gap-[2vw] whitespace-nowrap font-display text-[15.5vw] font-normal uppercase leading-[0.86] md:text-[13.4vw]">
// // // // // //         <span>Crispy.</span>
// // // // // //         <span className="text-fh">Fresh.</span>
// // // // // //         <span>Rolled.</span>
// // // // // //       </h1>

// // // // // //       {/* Stage: copy on the left, food overlapping the headline */}
// // // // // //       <div className="relative z-[1] flex flex-col gap-3 md:block md:h-[40vw]">
// // // // // //         <div className="relative z-[3] w-full pt-5 md:w-[26%] md:pt-[2.6vw]">
// // // // // //           <p className="mb-5 text-xl font-medium leading-snug">
// // // // // //             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
// // // // // //           </p>
// // // // // //           <div className="flex flex-wrap gap-2.5">
// // // // // //             <a href={links.order} className="btn-solid min-h-[46px] px-6 text-sm">
// // // // // //               Order now
// // // // // //             </a>
// // // // // //             <a href="#menu" className="btn-ghost min-h-[46px] px-6 text-sm">
// // // // // //               View menu
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="relative z-[2] -mx-[6%] w-[112%] max-w-[1200px] md:absolute md:-right-[3vw] md:-top-[11vw] md:mx-0 md:w-[78vw]">
// // // // // //           <img
// // // // // //             src={images.heroImg}
// // // // // //             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
// // // // // //             className="block w-full animate-float"
// // // // // //           />

// // // // // //           {/* #1 starburst */}
// // // // // //           <div className="absolute left-[13%] top-[14%] aspect-square w-[15%] -rotate-[8deg]">
// // // // // //             <div className="clip-starburst flex h-full w-full animate-pop items-center justify-center bg-sun [animation-delay:.2s]">
// // // // // //               <span className="-rotate-6 font-marker text-[6.2vw] leading-none md:text-[4.4vw]">#1</span>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* BOGOF oval */}
// // // // // //           <div className="absolute right-[4%] top-[6%] aspect-[1.55] w-[21%] -rotate-12">
// // // // // //             <div className="flex h-full w-full animate-pop flex-col items-center justify-center rounded-[50%] border-[5px] border-cream bg-fh shadow-[0_8px_24px_rgba(0,0,0,.18)] [animation-delay:.35s]">
// // // // // //               <span className="font-marker text-[4.8vw] leading-[0.95] text-white md:text-[3.4vw]">BOGOF</span>
// // // // // //               <span className="text-[1.5vw] font-bold uppercase tracking-[0.08em] text-sun md:text-[1.05vw]">Mon &amp; Thu</span>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* VEGAN circle */}
// // // // // //           <div className="absolute right-[9%] top-[44%] aspect-square w-[13.5%] rotate-[10deg]">
// // // // // //             <div className="flex h-full w-full animate-pop flex-col items-center justify-center rounded-full border-4 border-ink bg-sun [animation-delay:.5s]">
// // // // // //               <Leaf className="h-auto w-[26%]" />
// // // // // //               <span className="font-marker text-[3.1vw] leading-none md:text-[2.2vw]">VEGAN</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   )
// // // // // // }
// // // // // import { images, links } from '../data'
// // // // // import { Leaf } from './Icons'
// // // // // import Hero from './Hero.png'

// // // // // export default function Hero() {
// // // // //   return (
// // // // //     <section id="top" className="relative px-6 pt-4">
// // // // //       {/* Headline: three words spread edge to edge */}
// // // // //       <h1 className="relative z-0 m-0 flex justify-between gap-[2vw] whitespace-nowrap font-display text-[15.5vw] font-normal uppercase leading-[0.86] md:text-[13.4vw]">
// // // // //         <span>Crispy.</span>
// // // // //         <span className="text-fh">Fresh.</span>
// // // // //         <span>Rolled.</span>
// // // // //       </h1>

// // // // //       {/* Stage: copy on the left, food tucked just under the headline */}
// // // // //       <div className="relative z-[1] flex flex-col gap-3 md:block md:h-[47vw]">
// // // // //         <div className="relative z-[3] w-full pt-5 md:w-[26%] md:pt-[2.6vw]">
// // // // //           <p className="mb-5 text-xl font-medium leading-snug">
// // // // //             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
// // // // //           </p>
// // // // //           <div className="flex flex-wrap gap-2.5">
// // // // //             <a href={links.order} className="btn-solid min-h-[46px] px-6 text-sm">
// // // // //               Order now
// // // // //             </a>
// // // // //             <a href="#menu" className="btn-ghost min-h-[46px] px-6 text-sm">
// // // // //               View menu
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="relative z-[2] -mx-[6%] w-[112%] max-w-[1200px] md:absolute md:-right-[3vw] md:-top-[4vw] md:mx-0 md:w-[78vw]">
// // // // //           <img
// // // // //             src={images.heroImg}
// // // // //             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
// // // // //             className="block w-full animate-float"
// // // // //           />

// // // // //           {/* #1 starburst */}
// // // // //           <div className="absolute left-[13%] top-[14%] aspect-square w-[15%] -rotate-[8deg]">
// // // // //             <div className="clip-starburst flex h-full w-full animate-pop items-center justify-center bg-sun [animation-delay:.2s]">
// // // // //               <span className="-rotate-6 font-marker text-[6.2vw] leading-none md:text-[4.4vw]">#1</span>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* BOGOF oval */}
// // // // //           <div className="absolute right-[4%] top-[6%] aspect-[1.55] w-[21%] -rotate-12">
// // // // //             <div className="flex h-full w-full animate-pop flex-col items-center justify-center rounded-[50%] border-[5px] border-cream bg-fh shadow-[0_8px_24px_rgba(0,0,0,.18)] [animation-delay:.35s]">
// // // // //               <span className="font-marker text-[4.8vw] leading-[0.95] text-white md:text-[3.4vw]">BOGOF</span>
// // // // //               <span className="text-[1.5vw] font-bold uppercase tracking-[0.08em] text-sun md:text-[1.05vw]">Mon &amp; Thu</span>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* VEGAN circle */}
// // // // //           <div className="absolute right-[9%] top-[44%] aspect-square w-[13.5%] rotate-[10deg]">
// // // // //             <div className="flex h-full w-full animate-pop flex-col items-center justify-center rounded-full border-4 border-ink bg-sun [animation-delay:.5s]">
// // // // //               <Leaf className="h-auto w-[26%]" />
// // // // //               <span className="font-marker text-[3.1vw] leading-none md:text-[2.2vw]">VEGAN</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   )
// // // // // }
// // // // import { links } from '../data'
// // // // import heroImg from '../assets/khi.png'
// // // // import { Leaf } from './Icons'

// // // // export default function Hero() {
// // // //   return (
// // // //     <section id="top" className="relative px-6 pt-4">
// // // //       {/* Headline: three words spread edge to edge */}
// // // //       <h1 className="relative z-0 m-0 flex justify-between gap-[2vw] whitespace-nowrap font-display text-[15.5vw] font-normal uppercase leading-[0.86] md:text-[13.4vw]">
// // // //         <span>Crispy.</span>
// // // //         <span className="text-fh">Fresh.</span>
// // // //         <span>Rolled.</span>
// // // //       </h1>

// // // //       {/* Stage: copy on the left, food tucked just under the headline */}
// // // //       <div className="relative z-[1] flex flex-col gap-3 md:block md:h-[47vw]">
// // // //         <div className="relative z-[3] w-full pt-5 md:w-[26%] md:pt-[2.6vw]">
// // // //           <p className="mb-5 text-xl font-medium leading-snug">
// // // //             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
// // // //           </p>
// // // //           <div className="flex flex-wrap gap-2.5">
// // // //             <a href={links.order} className="btn-solid min-h-[46px] px-6 text-sm">
// // // //               Order now
// // // //             </a>
// // // //             <a href="#menu" className="btn-ghost min-h-[46px] px-6 text-sm">
// // // //               View menu
// // // //             </a>
// // // //           </div>
// // // //         </div>

// // // //         <div className="relative z-[2] -mx-[6%] w-[112%] max-w-[1200px] md:absolute md:-right-[3vw] md:-top-[4vw] md:mx-0 md:w-[78vw]">
// // // //           <img
// // // //             src={heroImg}
// // // //             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
// // // //             className="block w-full animate-float"
// // // //           />
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }
// // // import { links } from '../data'
// // // import heroImg from '../assets/khi.png'
// // // import { Leaf } from './Icons'

// // // export default function Hero() {
// // //   return (
// // //     <section id="top" className="relative overflow-x-clip bg-white px-5 pb-10 pt-4 md:px-6 md:pb-0">
// // //       {/* Headline: stacked on mobile, edge to edge on desktop */}
// // //       <h1 className="relative z-0 m-0 flex flex-col items-start font-display text-[21vw] font-normal uppercase leading-[0.88] md:flex-row md:justify-between md:gap-[2vw] md:whitespace-nowrap md:text-[13.4vw] md:leading-[0.86]">
// // //         <span>Crispy.</span>
// // //         <span className="text-fh">Fresh.</span>
// // //         <span>Rolled.</span>
// // //       </h1>

// // //       {/* Stage */}
// // //       <div className="relative z-[1] flex flex-col gap-4 md:block md:h-[47vw]">
// // //         {/* Copy */}
// // //         <div className="relative z-[3] order-2 w-full pt-2 md:order-none md:w-[30%] md:pt-[2.6vw]">
// // //           <p className="mb-5 text-lg font-medium leading-snug md:mb-8 md:text-[clamp(1.5rem,2.1vw,2.75rem)] md:leading-[1.2]">
// // //             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
// // //           </p>
// // //           <div className="flex flex-wrap gap-3">
// // //             <a
// // //               href={links.order}
// // //               className="btn-solid min-h-[48px] flex-1 px-6 text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
// // //             >
// // //               Order now
// // //             </a>
// // //             <a
// // //               href="#menu"
// // //               className="btn-ghost min-h-[48px] flex-1 px-6 text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
// // //             >
// // //               View menu
// // //             </a>
// // //           </div>
// // //         </div>

// // //         {/* Image: sits right under the headline on mobile */}
// // //         <div className="relative z-[2] order-1 mx-auto w-full max-w-[560px] md:absolute md:-right-[3vw] md:-top-[4vw] md:order-none md:mx-0 md:w-[78vw] md:max-w-[1200px]">
// // //           <img
// // //             src={heroImg}
// // //             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
// // //             className="block w-full animate-float"
// // //           />
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }
// // import { links } from '../data'
// // import heroImg from '../assets/khi.png'

// // export default function Hero() {
// //   return (
// //     <section id="top" className="relative overflow-x-clip bg-white px-5 pb-10 pt-4 md:px-6 md:pb-0">
// //       {/* Headline: stacked on mobile, edge to edge on desktop */}
// //       <h1 className="relative z-0 m-0 flex flex-col items-start font-display text-[21vw] font-normal uppercase leading-[0.88] md:flex-row md:justify-between md:gap-[2vw] md:whitespace-nowrap md:text-[13.4vw] md:leading-[0.86]">
// //         <span>Crispy.</span>
// //         <span className="text-fh">Fresh.</span>
// //         <span>Rolled.</span>
// //       </h1>

// //       {/* Stage */}
// //       <div className="relative z-[1] flex flex-col gap-4 md:block md:h-[47vw]">
// //         {/* Copy */}
// //         <div className="relative z-[3] order-2 w-full pt-2 md:order-none md:w-[30%] md:pt-[2.6vw]">
// //           <p className="mb-5 text-lg font-medium leading-snug md:mb-8 md:text-[clamp(1.5rem,2.1vw,2.75rem)] md:leading-[1.2]">
// //             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
// //           </p>
// //           <div className="flex flex-wrap gap-3">
// //             <a
// //               href={links.order}
// //               className="btn-solid flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
// //             >
// //               Order now
// //             </a>
// //             <a
// //               href="#menu"
// //               className="btn-ghost flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
// //             >
// //               View menu
// //             </a>
// //           </div>
// //         </div>

// //         {/* Image: sits right under the headline on mobile */}
// //         <div className="relative z-[2] order-1 mx-auto w-full max-w-[560px] md:absolute md:-right-[3vw] md:-top-[4vw] md:order-none md:mx-0 md:w-[78vw] md:max-w-[1200px]">
// //           <img
// //             src={heroImg}
// //             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
// //             className="block w-full animate-float"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// import { links } from '../data'
// import heroImg from '../assets/khi.png'

// export default function Hero() {
//   return (
//     <section id="top" className="relative overflow-x-clip bg-white px-5 pb-6 pt-4 md:px-6 md:pb-0">
//       {/* Headline: stacked on mobile, edge to edge on desktop */}
//       <h1 className="relative z-0 m-0 flex flex-col items-start font-display text-[21vw] font-normal uppercase leading-[0.88] md:flex-row md:justify-between md:gap-[2vw] md:whitespace-nowrap md:text-[13.4vw] md:leading-[0.86]">
//         <span>Crispy.</span>
//         <span className="text-fh">Fresh.</span>
//         <span>Rolled.</span>
//       </h1>

//       {/* Stage: height now comes from the image, not a fixed value */}
//       <div className="relative z-[1] flex flex-col gap-4 md:block">
//         {/* Copy: overlays the left side on desktop */}
//         <div className="relative z-[3] order-2 w-full pt-2 md:absolute md:left-0 md:top-0 md:order-none md:w-[30%] md:pt-[2.6vw]">
//           <p className="mb-5 text-lg font-medium leading-snug md:mb-8 md:text-[clamp(1.5rem,2.1vw,2.75rem)] md:leading-[1.2]">
//             Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <a
//               href={links.order}
//               className="btn-solid flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
//             >
//               Order now
//             </a>
//             <a
//               href="#menu"
//               className="btn-ghost flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
//             >
//               View menu
//             </a>
//           </div>
//         </div>

//         {/* Image: in the flow, so the section ends where the image ends */}
//         <div className="relative z-[2] order-1 mx-auto w-full max-w-[560px] md:-mr-[3vw] md:-mt-[4vw] md:ml-auto md:w-[78vw] md:max-w-[1200px]">
//           <img
//             src={heroImg}
//             alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
//             className="block w-full animate-float"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }
import { links } from '../data'
import heroImg from '../assets/khi.png'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip bg-white px-5 pb-6 pt-4 md:px-6 md:pb-0">
      {/* Headline: stacked on mobile, edge to edge on desktop */}
      <h1 className="relative z-0 m-0 flex flex-col items-start font-display text-[21vw] font-normal uppercase leading-[0.88] md:flex-row md:justify-between md:gap-[2vw] md:whitespace-nowrap md:text-[13.4vw] md:leading-[0.86]">
        <span>Crispy.</span>
        <span className="text-fh">Fresh.</span>
        <span>Rolled.</span>
      </h1>

      {/* Stage: height comes from the image, not a fixed value */}
      <div className="relative z-[1] flex flex-col gap-4 md:block">
        {/* Copy: overlays the left side on desktop */}
        <div className="relative z-[3] order-2 w-full pt-2 md:absolute md:left-0 md:top-[5vw] md:order-none md:w-[30%] md:pt-[2.6vw]">
          <p className="mb-5 text-lg font-medium leading-snug md:mb-8 md:text-[clamp(1.5rem,2.1vw,2.75rem)] md:leading-[1.2]">
            Nairobi&apos;s plant-based falafel spot. 100% vegetarian, crispy edges, no shortcuts.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={links.order}
              className="btn-solid flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
            >
              Order now
            </a>
            <a
              href="#menu"
              className="btn-ghost flex min-h-[48px] flex-1 items-center justify-center px-6 text-center text-base sm:flex-none md:min-h-[64px] md:px-10 md:text-xl"
            >
              View menu
            </a>
          </div>
        </div>

        {/* Image: in the flow, so the section ends where the image ends */}
        <div className="relative z-[2] order-1 mx-auto w-full max-w-[560px] md:-mr-[3vw] md:-mt-[4vw] md:ml-auto md:w-[78vw] md:max-w-[1200px]">
          <img
            src={heroImg}
            alt="Two halves of a falafel wrap on a branded paper-lined tray with crispy falafel and hummus"
            className="block w-full animate-float"
          />
        </div>
      </div>
    </section>
  )
}