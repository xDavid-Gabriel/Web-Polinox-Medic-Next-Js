import { uiComps } from '../../../components/ui/index'
import tw from 'twin.macro'
import Link from 'next/link'
export const SCatalogo = () => {
  return (
    <section tw="mt-10 lg:mt-20 xl:mt-32 container">
      <div tw="grid sm:grid-cols-2 gap-10 sm:gap-20 max-w-[770px] mx-auto items-center overflow-hidden">
        <div data-aos="fade-right">
          <uiComps.OptimizedImage
            src="/img/home/libro-catalogo.webp"
            alt="Catalogo"
          />
        </div>
        <div
          tw="flex flex-col gap-4 items-center text-center sm:text-start sm:items-start"
          data-aos="fade-left"
        >
          <uiComps.H2 css={tw`text-navy-blue leading-[40px] xl:leading-[53px]`}>
            Catalogo <strong tw="text-aqua font-normal block">Virtual</strong>{' '}
          </uiComps.H2>
          <p>
            Visualice nuestros catálogos virtual con las marcas posicionadas en
            el mercado peruano.
          </p>
          <a
            href="https://assets.polinoxmedic.com/documentos/catalogo-polinox.pdf"
            target="_blank"
          >
            <uiComps.Button variant="tertiary">Ver catálogo</uiComps.Button>
          </a>
        </div>
      </div>
    </section>
  )
}
