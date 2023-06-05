import tw from 'twin.macro'
import { uiComps } from '../../../components/ui'
import { ICategoria } from '../../../interfaces'

interface Props {
  categorias: ICategoria[]
}
export const SCategorias = ({ categorias }: Props) => {
  return (
    <section tw="container mt-[11rem] xl:mt-[13rem]">
      <div tw="flex flex-col gap-6 items-center text-center" data-aos="fade-up">
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
          <uiComps.Card
            styleCard={tw`w-[300px] 2xl:w-[400px]`}
            key={categoria.codigo}
            href={`/productos/${categoria.slug}`}
            src={categoria.url_img.replace(/\s+/g, '-')}
            alt={categoria.nombre}
            nombre={categoria.nombre}
          />
        ))}
        <uiComps.Card
          styleCard={tw`w-[300px] 2xl:w-[400px]`}
          href="/productos/sistema-de-seguridad-para-ecografo"
          src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/blog/los-10-equipos-medicos-mas-importantes-en-los-hospitales.png"
          alt="Sistema de seguridad para ecografo"
          nombre="Sistema de seguridad para ecografo"
        />
      </div>
    </section>
  )
}
