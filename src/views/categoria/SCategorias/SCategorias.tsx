import { uiComps } from '../../../components/ui'
import tw from 'twin.macro'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { ICategoria } from '../../../interfaces'
import { fn } from '../../../utils/functions'
import { useRouter } from 'next/router'
import { montserrat } from '../../../utils'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'

interface Props {
  findCategoria: ICategoria
  categoriaAll: ICategoria[]
}
export const SCategorias = ({ categoriaAll, findCategoria }: Props) => {
  const router = useRouter()
  const { categoria } = router.query
  return (
    <section tw="container xl:mt-10">
      <div tw="flex flex-col gap-3 items-center max-w-[800px] text-center mx-auto">
        <uiComps.H2 css={tw`text-aqua`}>
          {fn.capitalize(findCategoria.nombre)}
        </uiComps.H2>
        <p>
          Bienvenidos a Polinox Medic SAC, una empresa peruana dedicada a la
          importación, comercialización y distribución de equipos, dispositivos
          y mobiliario médico de alta calidad. Nos especializamos en ofrecer una
          amplia gama de productos, desde equipos médicos de alta tecnología
          hasta repuestos, accesorios e insumos.
        </p>
      </div>

      <div tw="grid lg:[grid-template-columns:30rem 1fr]  mt-5 gap-10 md:mt-10 lg:gap-20 xl:gap-32">
        {/* Lista de categorias */}
        <div tw="overflow-auto px-4  bg-[linear-gradient(188.23deg, #01A8B1 0.42%, #2D4491 104.02%)] py-8 rounded-[20px] lg:flex lg:flex-col lg:gap-5 lg:pt-12 lg:pb-32 lg:h-fit lg:sticky lg:top-[115px] lg:overflow-visible">
          <Swiper
            className="swiper--categorias"
            tw="lg:contents"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
            }}
            autoplay={{
              delay: 1500,
            }}
            modules={[Autoplay]}
            grabCursor={true}
          >
            {categoriaAll.map(ctg => (
              <SwiperSlide key={ctg.codigo} tw="lg:h-auto lg:!w-full lg:!mr-0">
                <Link
                  href={`/productos/${ctg.slug}`}
                  tw="flex justify-between p-2.5 px-6 items-center text-white font-medium hover:bg-white hover:text-aqua rounded-[7px] transition duration-300"
                  css={categoria === ctg.slug ? tw`bg-white text-aqua` : ''}
                >
                  {fn.capitalize(ctg.nombre)}
                  {categoria === ctg.slug ? (
                    <FaChevronRight size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Lista de productos */}
        <div tw="grid xl:grid-cols-2 gap-12">
          {findCategoria.productos.map(producto => (
            <div
              key={producto.codigo}
              tw="flex flex-col gap-7 items-center text-center max-w-[400px] mx-auto lg:max-w-[initial] lg:mx-0"
            >
              <uiComps.OptimizedImage
                src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/blog/los-10-equipos-medicos-mas-importantes-en-los-hospitales.png"
                alt={producto.nombre}
                stylesImg={tw`rounded-[20px 20px 0px 0px;] h-[400px]`}
              />
              {/* <div tw="bg-blue-400 rounded-[20px 20px 0px 0px;] w-full h-[300px]"></div> */}
              <div tw="flex flex-col gap-3 items-center  px-8">
                <strong tw="text-[19px] xl:text-[21px] font-bold text-navy-blue">
                  {producto.nombre}
                </strong>
                <span tw="flex gap-4 items-center text-aqua font-semibold mb-4">
                  <p>{producto.marca}</p> | <p>{producto.procedencia}</p>
                </span>
              </div>
              <Link href={`/productos/${categoria}/${producto.slug}`}>
                <uiComps.Button variant="tertiary" css={tw`mt-auto`}>
                  Ver detalle
                </uiComps.Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
