// import { useState } from 'react'
// import PolaroidStack from './PolaroidStack'
// import Receipt from './Receipt'
// import { ArrowRight } from './Icons'

// export default function SharedSection() {
//   const [printKey, setPrintKey] = useState(0)

//   return (
//     <section id="story" className="px-6 pb-[110px] pt-[120px]">
//       <div className="mx-auto grid max-w-[1392px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-12">
//         <PolaroidStack />

//         <div className="flex max-w-[560px] flex-col">
//           <h2 className="mb-[22px] font-heavy text-[38px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[52px]">
//             Made to be <span className="text-fh">shared</span>
//           </h2>

//           {/* printer slot */}
//           <div aria-hidden="true" className="relative z-[2] h-3 w-full max-w-[440px] rounded-lg bg-ink" />
//           <div className="relative z-[1] ml-2.5 min-h-[380px] w-full max-w-[420px] overflow-hidden">
//             <Receipt key={printKey} />
//           </div>

//           <p id="pamoja" className="mb-[22px] mt-7 max-w-[520px] text-base leading-relaxed text-[#333]">
//             At Falafel House, we believe great food brings people together. Crispy falafel, fresh salads,
//             plant-based burgers and cold-pressed juices — all 100% vegetarian, with clearly marked vegan and
//             gluten-free options. Order the Everyday Lunch Special between 12 and 2 PM and 50% goes to street
//             outreach through Pamoja.
//           </p>

//           <div className="flex flex-wrap items-center gap-[18px]">
//             <a href="#story" className="btn-ghost">
//               Our story <ArrowRight />
//             </a>
//             <button
//               type="button"
//               onClick={() => setPrintKey((k) => k + 1)}
//               className="min-h-[44px] cursor-pointer border-0 bg-transparent px-1 text-[13px] font-bold uppercase underline underline-offset-4"
//             >
//               Print again
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { useState } from 'react'
import PolaroidStack from './PolaroidStack'
import Receipt from './Receipt'
import { ArrowRight } from './Icons'

export default function SharedSection() {
  const [printKey, setPrintKey] = useState(0)

  return (
    <section id="story" className="overflow-x-clip bg-white px-5 pb-16 pt-16 md:px-6 md:pb-[110px] md:pt-[120px] 2xl:px-12">
      <div className="mx-auto grid max-w-[1392px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-12 lg:gap-20 min-[1600px]:max-w-[1800px] min-[1600px]:gap-28">
        {/* extra side padding on mobile so the tilted back frames never get clipped */}
        <div className="px-5 md:px-0">
          <PolaroidStack />
        </div>

        <div className="flex w-full max-w-[560px] flex-col md:max-w-[640px] min-[1600px]:max-w-[780px]">
          <h2 className="mb-5 font-heavy text-[44px] font-normal uppercase leading-none tracking-[-0.02em] md:mb-[22px] md:text-[52px] lg:text-[64px] min-[1600px]:text-[80px]">
            Made to be <span className="text-fh">shared</span>
          </h2>

          {/* printer slot */}
          <div aria-hidden="true" className="relative z-[2] h-3 w-full max-w-[440px] rounded-lg bg-ink min-[1600px]:max-w-[500px]" />
          <div className="relative z-[1] ml-2.5 min-h-[380px] w-[calc(100%-10px)] max-w-[420px] overflow-hidden min-[1600px]:max-w-[480px]">
            <Receipt key={printKey} />
          </div>

          <p id="pamoja" className="mb-6 mt-7 max-w-[520px] text-base leading-relaxed text-[#333] md:max-w-[600px] lg:text-lg min-[1600px]:max-w-[720px] min-[1600px]:text-xl">
            At Falafel House, we believe great food brings people together. Crispy falafel, fresh salads,
            plant-based burgers and cold-pressed juices — all 100% vegetarian, with clearly marked vegan and
            gluten-free options. Order the Everyday Lunch Special between 12 and 2 PM and 50% goes to street
            outreach through Pamoja.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[18px]">
            <a
              href="#story"
              className="btn-ghost flex min-h-[48px] items-center justify-center gap-2 px-6 text-center lg:min-h-[56px] lg:px-8 lg:text-base"
            >
              Our story <ArrowRight />
            </a>
            <button
              type="button"
              onClick={() => setPrintKey((k) => k + 1)}
              className="flex min-h-[48px] cursor-pointer items-center justify-center border-0 bg-transparent px-1 text-[13px] font-bold uppercase underline underline-offset-4 lg:text-sm"
            >
              Print again
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}