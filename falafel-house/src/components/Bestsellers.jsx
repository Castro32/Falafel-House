// // import { bestsellers } from '../data'
// // import { ArrowRight } from './Icons'

// // export default function Bestsellers() {
// //   return (
// //     <section id="menu" className="px-6 pb-14">
// //       <div className="mx-auto max-w-[1392px]">
// //         <div className="mb-[22px] flex flex-wrap items-center justify-between gap-4">
// //           <h2 className="m-0 font-heavy text-[26px] font-normal uppercase tracking-[-0.02em]">Our bestsellers</h2>
// //           <a href="#menu" className="btn border-2 border-fh text-ink">
// //             View full menu <ArrowRight stroke="#1A852B" />
// //           </a>
// //         </div>

// //         <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
// //           {bestsellers.map((item) => (
// //             <a
// //               key={item.name}
// //               href="#menu"
// //               className="group relative flex min-h-[280px] flex-col items-center gap-1 rounded-[14px] bg-card px-4 pb-[22px] pt-7 transition-transform duration-200 hover:-translate-y-1.5"
// //             >
// //               {item.tag && (
// //                 <span className="absolute left-3.5 top-3.5 flex h-[34px] min-w-[34px] items-center justify-center rounded-full bg-fh px-1.5 text-[11px] font-bold text-white">
// //                   {item.tag}
// //                 </span>
// //               )}
// //               <img
// //                 src={item.img}
// //                 alt={item.alt}
// //                 className="block h-[170px] w-[170px] object-contain transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105"
// //               />
// //               <span className="mt-2.5 text-[15px] font-semibold">{item.name}</span>
// //               <span className="text-[13px] font-bold text-fh">{item.price}</span>
// //             </a>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// import { bestsellers } from '../data'
// import { ArrowRight } from './Icons'

// // 1. Import your images here (put the files in src/assets/)
// import img1 from '../assets/b1.jpg'
// import img2 from '../assets/b2.jpg'
// import img3 from '../assets/b3.jpg'
// import img4 from '../assets/b4.jpg'
// import img5 from '../assets/b5.jpg'
// import img6 from '../assets/b6.jpg'

// // 2. List them in the same order as the items in `bestsellers`
// const images = [
//   img1,
//   img2,
//   img3,
//   img4,
//   img5,
//   img6,
// ]

// function Card({ item, src, hidden }) {
//   return (
//     <a
//       href="#menu"
//       tabIndex={hidden ? -1 : undefined}
//       className="group relative mr-3 flex w-[210px] shrink-0 flex-col rounded-[14px] bg-card p-2 text-center transition-transform duration-200 hover:-translate-y-1.5 sm:w-[260px] md:mr-4 lg:w-[320px] min-[1600px]:mr-6 min-[1600px]:w-[400px] min-[1600px]:p-3"
//     >
//       {item.tag && (
//         <span className="absolute left-3 top-3 z-[2] flex h-[30px] min-w-[30px] items-center justify-center rounded-full bg-fh px-1.5 text-[11px] font-bold text-white md:h-[34px] md:min-w-[34px] min-[1600px]:h-10 min-[1600px]:min-w-[40px] min-[1600px]:text-xs">
//           {item.tag}
//         </span>
//       )}

//       {/* Image slot: fills the full card width */}
//       <div className="aspect-square w-full">
//         {src ? (
//           <img
//             src={src}
//             alt={hidden ? '' : item.alt || item.name}
//             className="block h-full w-full scale-110 object-contain transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-[1.18]"
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-dashed border-black/20 text-xs font-semibold uppercase text-black/40">
//             Add image
//           </div>
//         )}
//       </div>

//       {/* Text: compact so the image dominates */}
//       <div className="flex flex-col items-center gap-0.5 px-1 pb-2 pt-1 min-[1600px]:pb-3">
//         <span className="text-sm font-semibold leading-tight md:text-[15px] min-[1600px]:text-lg">{item.name}</span>
//         <span className="text-[13px] font-bold text-fh min-[1600px]:text-base">{item.price}</span>
//       </div>
//     </a>
//   )
// }

// export default function Bestsellers() {
//   const items = bestsellers.map((item, i) => ({ item, src: images[i] || item.img }))
//   const duration = Math.max(items.length * 6, 20) // seconds for one full loop

//   return (
//     <section id="menu" className="overflow-x-clip bg-white pb-12 md:pb-14">
//       {/* Slider animation */}
//       <style>{`
//         @keyframes bestsellers-marquee {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         .bestsellers-track { animation: bestsellers-marquee var(--marquee-duration, 30s) linear infinite; }
//         .bestsellers-viewport:hover .bestsellers-track,
//         .bestsellers-viewport:focus-within .bestsellers-track { animation-play-state: paused; }
//         @media (prefers-reduced-motion: reduce) {
//           .bestsellers-track { animation: none; }
//           .bestsellers-viewport { overflow-x: auto; }
//         }
//       `}</style>

//       {/* Header */}
//       <div className="mx-auto max-w-[1392px] px-5 md:px-6 2xl:px-12 min-[1600px]:max-w-[1800px]">
//         <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:mb-[22px]">
//           <h2 className="m-0 font-heavy text-[32px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[26px] lg:text-[36px] min-[1600px]:text-[44px]">
//             Our bestsellers
//           </h2>
//           <a
//             href="#menu"
//             className="btn flex min-h-[48px] items-center justify-center gap-2 border-2 border-fh px-6 text-center text-ink lg:min-h-[56px] lg:px-8"
//           >
//             View full menu <ArrowRight stroke="#1A852B" />
//           </a>
//         </div>
//       </div>

//       {/* Moving slider: full width, soft fade on both edges */}
//       <div
//         className="bestsellers-viewport overflow-hidden py-4"
//         style={{
//           WebkitMaskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
//           maskImage: 'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
//         }}
//       >
//         <div className="bestsellers-track flex w-max" style={{ '--marquee-duration': `${duration}s` }}>
//           {/* two identical sets so the loop is seamless */}
//           {items.map(({ item, src }) => (
//             <Card key={`a-${item.name}`} item={item} src={src} />
//           ))}
//           <div className="flex" aria-hidden="true">
//             {items.map(({ item, src }) => (
//               <Card key={`b-${item.name}`} item={item} src={src} hidden />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { bestsellers } from '../data'
import { ArrowRight } from './Icons'

// 1. Import your images here (put the files in src/assets/)
import img1 from '../assets/b1.jpg'
import img2 from '../assets/b2.jpg'
import img3 from '../assets/b3.jpg'
import img4 from '../assets/b4.jpg'
import img5 from '../assets/b5.jpg'
import img6 from '../assets/b6.jpg'

// 2. List them in the same order as the items in `bestsellers`
const images = [img1, img2, img3, img4, img5, img6]

function Card({ item, src, hidden }) {
  return (
    <a
      href="#menu"
      tabIndex={hidden ? -1 : undefined}
      className="group relative mr-3 flex w-[270px] shrink-0 flex-col overflow-hidden rounded-[16px] bg-card shadow-[0_6px_20px_rgba(0,0,0,.08)] transition-transform duration-200 hover:-translate-y-1.5 sm:w-[340px] md:mr-4 lg:w-[440px] min-[1600px]:mr-6 min-[1600px]:w-[560px]"
    >
      {item.tag && (
        <span className="absolute left-3 top-3 z-[2] flex h-[30px] min-w-[30px] items-center justify-center rounded-full bg-fh px-1.5 text-[11px] font-bold text-white md:h-[34px] md:min-w-[34px] min-[1600px]:h-10 min-[1600px]:min-w-[40px] min-[1600px]:text-xs">
          {item.tag}
        </span>
      )}

      {/* Image: edge to edge, no padding or inner rounding */}
      <div className="aspect-[3/2] w-full overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={hidden ? '' : item.alt || item.name}
            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center border-b-2 border-dashed border-black/20 text-xs font-semibold uppercase text-black/40">
            Add image
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col gap-1.5 px-4 pb-4 pt-3.5 text-left md:px-5 md:pb-5 md:pt-4 min-[1600px]:gap-2 min-[1600px]:px-7 min-[1600px]:pb-7 min-[1600px]:pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-base font-semibold leading-tight md:text-lg min-[1600px]:text-2xl">{item.name}</span>
          <span className="shrink-0 text-sm font-bold text-fh md:text-base min-[1600px]:text-xl">{item.price}</span>
        </div>
        {item.desc && (
          <p className="m-0 line-clamp-2 text-[13px] leading-snug text-[#555] md:text-sm min-[1600px]:text-base">
            {item.desc}
          </p>
        )}
      </div>
    </a>
  )
}

export default function Bestsellers() {
  const items = bestsellers.map((item, i) => ({ item, src: images[i] || item.img }))
  const duration = Math.max(items.length * 6, 20) // seconds for one full loop

  return (
    <section id="menu" className="overflow-x-clip bg-white pb-12 md:pb-14">
      {/* Slider animation */}
      <style>{`
        @keyframes bestsellers-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .bestsellers-track { animation: bestsellers-marquee var(--marquee-duration, 30s) linear infinite; }
        .bestsellers-viewport:hover .bestsellers-track,
        .bestsellers-viewport:focus-within .bestsellers-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .bestsellers-track { animation: none; }
          .bestsellers-viewport { overflow-x: auto; }
        }
      `}</style>

      {/* Header */}
      <div className="mx-auto max-w-[1392px] px-5 md:px-6 2xl:px-12 min-[1600px]:max-w-[1800px]">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between md:mb-[22px]">
          <h2 className="m-0 font-heavy text-[32px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[26px] lg:text-[36px] min-[1600px]:text-[44px]">
            Our bestsellers
          </h2>
          <a
            href="#menu"
            className="btn flex min-h-[48px] items-center justify-center gap-2 border-2 border-fh px-6 text-center text-ink lg:min-h-[56px] lg:px-8"
          >
            View full menu <ArrowRight stroke="#1A852B" />
          </a>
        </div>
      </div>

      {/* Moving slider: full width, soft fade on both edges */}
      <div
        className="bestsellers-viewport overflow-hidden py-4"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, #000 4%, #000 96%, transparent)',
        }}
      >
        <div className="bestsellers-track flex w-max" style={{ '--marquee-duration': `${duration}s` }}>
          {/* two identical sets so the loop is seamless */}
          {items.map(({ item, src }) => (
            <Card key={`a-${item.name}`} item={item} src={src} />
          ))}
          <div className="flex" aria-hidden="true">
            {items.map(({ item, src }) => (
              <Card key={`b-${item.name}`} item={item} src={src} hidden />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}