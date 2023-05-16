import tw from 'twin.macro'
import { uiComps } from '../../../components/ui/index'
import { ICategoria } from '../../../interfaces'
import { montserrat } from '../../../utils'
import Link from 'next/link'
import { fn } from '../../../utils/functions'
interface Props {
  categorias: ICategoria[]
}
export const SCategorias = ({ categorias }: Props) => {
  return (
    <section tw="container mt-[11rem] xl:mt-[13rem]">
      <div tw="flex flex-col gap-6 items-center text-center">
        <uiComps.H2 css={tw`text-aqua`}>Nuestros Productos</uiComps.H2>
        <p tw="max-w-[1000px]">
          Ofrecemos una amplia variedad de categorias médicos de alta calidad y
          soluciones de salud efectivas, respaldados por nuestro equipo de
          expertos en la industria médica que brindan asesoramiento
          personalizado para ayudarlo a encontrar los categorias adecuados que
          se adapten a sus necesidades y presupuestos.{' '}
          <strong tw="block">¿Te gustaría?</strong>
        </p>
      </div>
      <div tw="flex flex-wrap justify-center gap-10 mt-10 xl:mt-20">
        {categorias.map(categoria => (
          <div
            key={categoria.codigo}
            tw="flex flex-col gap-7 items-center text-center w-[400px] mx-auto lg:max-w-[initial] lg:mx-0"
          >
            <uiComps.OptimizedImage
              src={categoria.url_img.replace(/\s+/g, '-')}
              alt={categoria.nombre}
              stylesImg={tw`rounded-[20px 20px 0px 0px;] lg:h-[400px]`}
            />
            {/* <div tw="bg-blue-400 rounded-[20px 20px 0px 0px;] w-full h-[300px]"></div> */}
            <div tw="flex flex-col gap-3 items-center  px-8">
              <uiComps.H3
                className={montserrat.className}
                css={tw`font-bold text-navy-blue`}
              >
                {fn.capitalize(categoria.nombre)}
              </uiComps.H3>
            </div>
            <Link href={`/productos/${categoria.slug}`}>
              <uiComps.Button variant="tertiary" css={tw`mt-auto`}>
                Ver detalle
              </uiComps.Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
