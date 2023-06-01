import tw from 'twin.macro'
import { uiComps } from '../../../components/ui/index'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay } from 'swiper'
import { marcas } from './attributes'
export const SMarcas = () => {
  return (
    <section tw="mt-20 xl:mt-32">
      <div tw="container">
        <div
          tw="max-w-[1000px] mx-auto text-center flex flex-col gap-6"
          data-aos="fade-up"
        >
          <uiComps.H2 css={tw`text-aqua`}>Nuestras Marcas</uiComps.H2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus ex inventore sed blanditiis quae unde dolor beatae
            laboriosam accusamus quibusdam quos nihil autem consectetur facilis
            corporis iste, dolorum possimus aspernatur.
          </p>
        </div>
      </div>
      <Swiper
        tw="my-10 lg:my-20"
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 6,
          },
        }}
        grabCursor={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {marcas.map(marca => (
          <SwiperSlide key={marca.id} tw="h-[200px]">
            <uiComps.OptimizedImage
              stylesImg={tw`h-full`}
              src={marca.img}
              alt={marca.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
