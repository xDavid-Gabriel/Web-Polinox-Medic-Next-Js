import tw from 'twin.macro'
import { uiComps } from '../../../components/ui/index'
import { BiCalendar } from 'react-icons/bi'
import { FaHeadset } from 'react-icons/fa'
import { BsFillBagHeartFill } from 'react-icons/bs'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
export const SHero = () => {
  return (
    <section tw="relative bg-[url(/img/home/hero.webp)] bg-no-repeat bg-cover container rounded-[30px] mt-10 mb-[8.8rem]">
      <div tw="text-white p-4 sm:pt-[4rem] pb-[11rem] sm:pl-20 flex flex-col gap-8">
        <uiComps.H1 css={tw`max-w-[400px]`}>
          Equipos y Mobiliario Médico
        </uiComps.H1>
        <div tw="max-w-[730px]">
          <p>
            Ofrecemos productos médicos de alta calidad, desde dispositivos
            médicos hasta equipos de diagnóstico, para satisfacer las
            necesidades de pacientes y profesionales de la salud.
          </p>
          <p>
            Ofrecemos asesoramiento personalizado para encontrar los productos
            médicos adecuados, con ayuda de expertos en la industria médica.
          </p>
        </div>
        <div tw="relative w-fit">
          <a
            href="https://assets.polinoxmedic.com/documentos/catalogo-polinox.pdf"
            target="_blank"
          >
            <uiComps.Button css={tw`relative z-[5] px-[4rem]`}>
              Ver Catalogo
            </uiComps.Button>
          </a>
          <img
            src="/img/decoracion.svg"
            tw="w-[57px] absolute top-[-5px] z-[1] right-0 translate-x-[25%]"
            alt="Decoración"
          />
        </div>
      </div>
      <div tw="absolute max-w-[1300px] mx-4 right-0 left-0 translate-y-[-50%] bg-[linear-gradient(262.47deg, #01A8B1 0.01%, #01A8B1 0.02%, #2D4491 99.11%)] p-[2px] rounded-[30px] 2xl:mx-auto">
        <div tw="bg-[rgba(243, 243, 243, 0.8)] [backdrop-filter: blur(12px)] rounded-[30px] px-4 sm:px-32 py-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={60}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide tw="h-[199px] sm:h-[175px]">
              <div tw="text-white h-full text-center flex flex-col items-center gap-2 rounded-[30px] py-4  px-8 bg-[linear-gradient(262.47deg, #01A8B1 0.01%, #01A8B1 0.02%, #2D4491 99.11%)] ">
                <BiCalendar tw="flex-none" size={25} />
                <strong>Cotización Inmediata</strong>
                <p tw="max-w-[200px] leading-[17px]">
                  A través de nuestros diferentes canales de contacto
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide tw="h-[199px] sm:h-[175px]">
              <div tw="rounded-[30px] h-full  bg-[linear-gradient(262.47deg, #01A8B1 0.01%, #01A8B1 0.02%, #2D4491 99.11%)] p-[1px]">
                <div tw="text-smoky-gray bg-white/80 rounded-[28px] [backdrop-filter: blur(12px)]  text-center flex flex-col items-center gap-2 py-4 h-full px-8">
                  <FaHeadset tw="flex-none" size={25} />
                  <strong>Atención</strong>
                  <p tw="max-w-[200px] leading-[17px]">
                    A nivel nacional a entidades publicas y privadas asi cómo
                    profesionales de la salud
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tw="h-[199px] sm:h-[175px]">
              {' '}
              <div tw="rounded-[30px] h-full  bg-[linear-gradient(262.47deg, #01A8B1 0.01%, #01A8B1 0.02%, #2D4491 99.11%)] p-[1px]">
                <div tw="text-smoky-gray bg-white/80 rounded-[28px] [backdrop-filter: blur(12px)]  text-center flex flex-col items-center gap-2 py-4 px-8 h-full">
                  <BsFillBagHeartFill tw="flex-none" size={25} />
                  <strong>Variedad en marca</strong>
                  <p tw="max-w-[200px] leading-[17px]">
                    trabajamos con marcas reconocidas a nivel mundial
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}
