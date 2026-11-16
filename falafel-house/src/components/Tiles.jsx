// // import { images } from '../data'

// // const label =
// //   'relative font-heavy text-[40px] uppercase tracking-[-0.02em] text-white text-outline md:text-[52px]'

// // export default function Tiles() {
// //   return (
// //     <section className="px-6 pb-[110px]">
// //       <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 md:grid-cols-2">
// //         <a
// //           href="#story"
// //           className="bg-checker-green group relative flex h-[340px] items-center justify-center overflow-hidden rounded-[14px] md:h-[420px]"
// //         >
// //           <img src={images.wrapImg} alt="" className="absolute -bottom-[6%] left-[6%] w-[48%] transition-transform duration-500 group-hover:scale-105" />
// //           <img src={images.juiceImg} alt="" className="absolute -bottom-[4%] right-[4%] w-[40%] transition-transform duration-500 group-hover:scale-105" />
// //           <span className={label}>Our story</span>
// //         </a>

// //         <a
// //           href="#menu"
// //           className="group relative flex h-[340px] items-center justify-center overflow-hidden rounded-[14px] bg-[#E9A64A] md:h-[420px]"
// //         >
// //           <img
// //             src={images.heroImg}
// //             alt=""
// //             className="absolute -left-[45%] -top-[30%] w-[190%] max-w-none transition-transform duration-500 group-hover:scale-105"
// //           />
// //           <span className={label}>Menu</span>
// //         </a>
// //       </div>
// //     </section>
// //   )
// // }
// import wrapImg from '../assets/b1.jpg'
// import juiceImg from '../assets/b2.jpg'
// import heroImg from '../assets/b3.jpg'

// const label =
//   'relative z-[2] font-heavy text-[40px] uppercase leading-none tracking-[-0.02em] text-white text-outline md:text-[52px] lg:text-[64px] min-[1600px]:text-[84px]'

// export default function Tiles() {
//   return (
//     <section className="overflow-x-clip bg-white px-5 pb-16 md:px-6 md:pb-[110px] 2xl:px-12">
//       <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5 min-[1600px]:max-w-[1800px] min-[1600px]:gap-6">
//         {/* Our story */}
//         <a
//           href="#story"
//           className="bg-checker-green group relative flex h-[300px] items-center justify-center overflow-hidden rounded-[14px] sm:h-[340px] md:h-[420px] lg:h-[480px] min-[1600px]:h-[600px]"
//         >
//           <img
//             src={wrapImg}
//             alt=""
//             className="absolute -bottom-[6%] left-[6%] w-[48%] transition-transform duration-500 group-hover:scale-105"
//           />
//           <img
//             src={juiceImg}
//             alt=""
//             className="absolute -bottom-[4%] right-[4%] w-[40%] transition-transform duration-500 group-hover:scale-105"
//           />
//           <span className={label}>Our story</span>
//         </a>

//         {/* Menu */}
//         <a
//           href="#menu"
//           className="group relative flex h-[300px] items-center justify-center overflow-hidden rounded-[14px] bg-[#E9A64A] sm:h-[340px] md:h-[420px] lg:h-[480px] min-[1600px]:h-[600px]"
//         >
//           <img
//             src={heroImg}
//             alt=""
//             className="absolute -left-[45%] -top-[30%] w-[190%] max-w-none transition-transform duration-500 group-hover:scale-105"
//           />
//           <span className={label}>Menu</span>
//         </a>
//       </div>
//     </section>
//   )
// }
import storyImg from '../assets/story.jpg'
import menuImg from '../assets/b3.jpg'

const label =
  'relative z-[2] font-heavy text-[40px] uppercase leading-none tracking-[-0.02em] text-white text-outline md:text-[52px] lg:text-[64px] min-[1600px]:text-[84px]'

const tile =
  'group relative flex h-[300px] items-center justify-center overflow-hidden rounded-[14px] sm:h-[340px] md:h-[420px] lg:h-[480px] min-[1600px]:h-[600px]'

export default function Tiles() {
  return (
    <section className="overflow-x-clip bg-white px-5 pb-16 md:px-6 md:pb-[110px] 2xl:px-12">
      <div className="mx-auto grid max-w-[1392px] grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5 min-[1600px]:max-w-[1800px] min-[1600px]:gap-6">
        {/* Our story */}
        <a href="#story" className={tile}>
          <img
            src={storyImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20" />
          <span className={label}>Our story</span>
        </a>

        {/* Menu */}
        <a href="#menu" className={tile}>
          <img
            src={menuImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span aria-hidden="true" className="absolute inset-0 bg-black/20" />
          <span className={label}>Menu</span>
        </a>
      </div>
    </section>
  )
}