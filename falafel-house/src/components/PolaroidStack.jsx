// // import { useState } from 'react'
// // import { polaroids } from '../data'

// // export default function PolaroidStack() {
// //   const [index, setIndex] = useState(0)
// //   const shot = polaroids[index]
// //   const next = () => setIndex((i) => (i + 1) % polaroids.length)

// //   return (
// //     <div className="flex flex-col items-center gap-3.5">
// //       <button
// //         type="button"
// //         onClick={next}
// //         aria-label="Show next photo"
// //         className="relative aspect-[0.82] w-[min(420px,86vw)] cursor-pointer border-0 bg-transparent p-0"
// //       >
// //         {/* back frames */}
// //         <div className="absolute inset-0 -translate-x-[26px] translate-y-1.5 -rotate-[7deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)]" />
// //         <div className="absolute inset-0 translate-x-[18px] translate-y-2.5 rotate-[5deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)]" />

// //         {/* front frame */}
// //         <div className="absolute inset-0 flex -rotate-[2.5deg] flex-col bg-white px-[18px] pt-[18px] shadow-[0_18px_40px_rgba(0,0,0,.18)]">
// //           <div key={index} className={`relative flex flex-auto items-center justify-center overflow-hidden ${shot.bg}`}>
// //             <div className="absolute right-[7%] top-[8%] max-w-[46%] -rotate-[5deg] bg-white px-3 py-2.5 shadow-[0_4px_10px_rgba(0,0,0,.15)]">
// //               <span className="block whitespace-pre-line text-left font-marker text-[22px] leading-[1.05]">
// //                 {shot.sign}
// //               </span>
// //             </div>
// //             <img
// //               src={shot.img}
// //               alt={shot.alt}
// //               className="relative mt-[18%] w-[78%] drop-shadow-[0_14px_18px_rgba(0,0,0,.25)]"
// //             />
// //           </div>
// //           <div className="flex h-[74px] items-center justify-center">
// //             <span className="-rotate-2 font-marker text-[22px]">{shot.caption}</span>
// //           </div>
// //         </div>

// //         {/* tape */}
// //         <span aria-hidden="true" className="absolute -left-3.5 -top-2.5 h-[30px] w-[92px] -rotate-[38deg] bg-[rgba(255,224,120,.75)]" />
// //         <span aria-hidden="true" className="absolute -right-3.5 -top-1.5 h-[30px] w-[92px] rotate-[36deg] bg-[rgba(255,224,120,.75)]" />
// //       </button>

// //       <span className="mt-4 font-marker text-[13px] text-[#555]">click for more ↻</span>
// //       <div className="flex gap-1.5">
// //         {polaroids.map((_, i) => (
// //           <span key={i} className={`h-[7px] w-[7px] rounded-full ${i === index ? 'bg-fh' : 'bg-[#C9BFAE]'}`} />
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }
// import { useState } from 'react'
// import { polaroids } from '../data'

// export default function PolaroidStack() {
//   const [index, setIndex] = useState(0)
//   const shot = polaroids[index]
//   const next = () => setIndex((i) => (i + 1) % polaroids.length)

//   return (
//     <div className="flex flex-col items-center gap-3.5">
//       <button
//         type="button"
//         onClick={next}
//         aria-label="Show next photo"
//         className="relative w-[min(500px,82vw)] cursor-pointer border-0 bg-transparent p-0"
//       >
//         {/* back frames */}
//         <div className="absolute inset-0 -translate-x-5 translate-y-1.5 -rotate-[7deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] md:-translate-x-[26px]" />
//         <div className="absolute inset-0 translate-x-3.5 translate-y-2.5 rotate-[5deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] md:translate-x-[18px]" />

//         {/* front frame: fixed photo ratio so the size never changes between shots */}
//         <div className="relative flex -rotate-[2.5deg] flex-col bg-white px-3.5 pt-3.5 shadow-[0_18px_40px_rgba(0,0,0,.18)] md:px-[18px] md:pt-[18px]">
//           <div
//             key={index}
//             className={`relative aspect-[7/6] w-full overflow-hidden ${shot.bg}`}
//           >
//             <img
//               src={shot.img}
//               alt={shot.alt}
//               className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,.25)]"
//             />
//             <div className="absolute right-[4%] top-[6%] max-w-[42%] -rotate-[5deg] bg-white px-2.5 py-2 shadow-[0_4px_10px_rgba(0,0,0,.15)] md:px-3 md:py-2.5">
//               <span className="block whitespace-pre-line text-left font-marker text-[16px] leading-[1.05] md:text-[22px]">
//                 {shot.sign}
//               </span>
//             </div>
//           </div>
//           <div className="flex h-[60px] items-center justify-center md:h-[74px]">
//             <span className="-rotate-2 font-marker text-[18px] md:text-[22px]">{shot.caption}</span>
//           </div>
//         </div>

//         {/* tape */}
//         <span aria-hidden="true" className="absolute -left-3.5 -top-2.5 h-[30px] w-[92px] -rotate-[38deg] bg-[rgba(255,224,120,.75)]" />
//         <span aria-hidden="true" className="absolute -right-3.5 -top-1.5 h-[30px] w-[92px] rotate-[36deg] bg-[rgba(255,224,120,.75)]" />
//       </button>

//       <span className="mt-4 font-marker text-[13px] text-[#555]">click for more ↻</span>
//       <div className="flex gap-1.5">
//         {polaroids.map((_, i) => (
//           <span key={i} className={`h-[7px] w-[7px] rounded-full ${i === index ? 'bg-fh' : 'bg-[#C9BFAE]'}`} />
//         ))}
//       </div>
//     </div>
//   )
// }
import { useState } from 'react'
import { polaroids } from '../data'

export default function PolaroidStack() {
  const [index, setIndex] = useState(0)
  const shot = polaroids[index]
  const next = () => setIndex((i) => (i + 1) % polaroids.length)

  return (
    <div className="flex flex-col items-center gap-3.5">
      <button
        type="button"
        onClick={next}
        aria-label="Show next photo"
        className="relative w-[min(500px,82vw)] cursor-pointer border-0 bg-transparent p-0 lg:w-[min(580px,38vw)] min-[1600px]:w-[min(700px,36vw)]"
      >
        {/* back frames */}
        <div className="absolute inset-0 -translate-x-5 translate-y-1.5 -rotate-[7deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] md:-translate-x-[26px] min-[1600px]:-translate-x-9 min-[1600px]:translate-y-2" />
        <div className="absolute inset-0 translate-x-3.5 translate-y-2.5 rotate-[5deg] bg-white shadow-[0_10px_30px_rgba(0,0,0,.12)] md:translate-x-[18px] min-[1600px]:translate-x-6 min-[1600px]:translate-y-3.5" />

        {/* front frame: fixed photo ratio so the size never changes between shots */}
        <div className="relative flex -rotate-[2.5deg] flex-col bg-white px-3.5 pt-3.5 shadow-[0_18px_40px_rgba(0,0,0,.18)] md:px-[18px] md:pt-[18px] min-[1600px]:px-6 min-[1600px]:pt-6">
          <div
            key={index}
            className={`relative aspect-[7/6] w-full overflow-hidden ${shot.bg}`}
          >
            <img
              src={shot.img}
              alt={shot.alt}
              className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_14px_18px_rgba(0,0,0,.25)]"
            />
            <div className="absolute right-[4%] top-[6%] max-w-[42%] -rotate-[5deg] bg-white px-2.5 py-2 shadow-[0_4px_10px_rgba(0,0,0,.15)] md:px-3 md:py-2.5 min-[1600px]:px-4 min-[1600px]:py-3">
              <span className="block whitespace-pre-line text-left font-marker text-[16px] leading-[1.05] md:text-[22px] min-[1600px]:text-[28px]">
                {shot.sign}
              </span>
            </div>
          </div>
          <div className="flex h-[60px] items-center justify-center md:h-[74px] min-[1600px]:h-[92px]">
            <span className="-rotate-2 font-marker text-[18px] md:text-[22px] min-[1600px]:text-[28px]">
              {shot.caption}
            </span>
          </div>
        </div>

        {/* tape */}
        <span aria-hidden="true" className="absolute -left-3.5 -top-2.5 h-[30px] w-[92px] -rotate-[38deg] bg-[rgba(255,224,120,.75)] min-[1600px]:h-9 min-[1600px]:w-[112px]" />
        <span aria-hidden="true" className="absolute -right-3.5 -top-1.5 h-[30px] w-[92px] rotate-[36deg] bg-[rgba(255,224,120,.75)] min-[1600px]:h-9 min-[1600px]:w-[112px]" />
      </button>

      <span className="mt-4 font-marker text-[13px] text-[#555] min-[1600px]:text-base">click for more ↻</span>
      <div className="flex gap-1.5">
        {polaroids.map((_, i) => (
          <span key={i} className={`h-[7px] w-[7px] rounded-full min-[1600px]:h-2 min-[1600px]:w-2 ${i === index ? 'bg-fh' : 'bg-[#C9BFAE]'}`} />
        ))}
      </div>
    </div>
  )
}