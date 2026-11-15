import { images } from '../data'

const label =
  'relative font-heavy text-[40px] uppercase tracking-[-0.02em] text-white text-outline md:text-[52px]'

export default function Tiles() {
  return (
    <section className="px-6 pb-[110px]">
      <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 md:grid-cols-2">
        <a
          href="#story"
          className="bg-checker-green group relative flex h-[340px] items-center justify-center overflow-hidden rounded-[14px] md:h-[420px]"
        >
          <img src={images.wrapImg} alt="" className="absolute -bottom-[6%] left-[6%] w-[48%] transition-transform duration-500 group-hover:scale-105" />
          <img src={images.juiceImg} alt="" className="absolute -bottom-[4%] right-[4%] w-[40%] transition-transform duration-500 group-hover:scale-105" />
          <span className={label}>Our story</span>
        </a>

        <a
          href="#menu"
          className="group relative flex h-[340px] items-center justify-center overflow-hidden rounded-[14px] bg-[#E9A64A] md:h-[420px]"
        >
          <img
            src={images.heroImg}
            alt=""
            className="absolute -left-[45%] -top-[30%] w-[190%] max-w-none transition-transform duration-500 group-hover:scale-105"
          />
          <span className={label}>Menu</span>
        </a>
      </div>
    </section>
  )
}
