import { useState } from 'react'
import PolaroidStack from './PolaroidStack'
import Receipt from './Receipt'
import { ArrowRight } from './Icons'

export default function SharedSection() {
  const [printKey, setPrintKey] = useState(0)

  return (
    <section id="story" className="px-6 pb-[110px] pt-[120px]">
      <div className="mx-auto grid max-w-[1392px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-12">
        <PolaroidStack />

        <div className="flex max-w-[560px] flex-col">
          <h2 className="mb-[22px] font-heavy text-[38px] font-normal uppercase leading-none tracking-[-0.02em] md:text-[52px]">
            Made to be <span className="text-fh">shared</span>
          </h2>

          {/* printer slot */}
          <div aria-hidden="true" className="relative z-[2] h-3 w-full max-w-[440px] rounded-lg bg-ink" />
          <div className="relative z-[1] ml-2.5 min-h-[380px] w-full max-w-[420px] overflow-hidden">
            <Receipt key={printKey} />
          </div>

          <p id="pamoja" className="mb-[22px] mt-7 max-w-[520px] text-base leading-relaxed text-[#333]">
            At Falafel House, we believe great food brings people together. Crispy falafel, fresh salads,
            plant-based burgers and cold-pressed juices — all 100% vegetarian, with clearly marked vegan and
            gluten-free options. Order the Everyday Lunch Special between 12 and 2 PM and 50% goes to street
            outreach through Pamoja.
          </p>

          <div className="flex flex-wrap items-center gap-[18px]">
            <a href="#story" className="btn-ghost">
              Our story <ArrowRight />
            </a>
            <button
              type="button"
              onClick={() => setPrintKey((k) => k + 1)}
              className="min-h-[44px] cursor-pointer border-0 bg-transparent px-1 text-[13px] font-bold uppercase underline underline-offset-4"
            >
              Print again
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
