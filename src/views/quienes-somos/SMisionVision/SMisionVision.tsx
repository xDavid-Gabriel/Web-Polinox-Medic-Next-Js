import { uiComps } from '../../../components/ui/index'
import { FaTrophy, FaEye } from 'react-icons/fa'
import tw from 'twin.macro'
export const SMisionVision = () => {
  return (
    <section tw="container mt-10 md:mt-20 xl:mt-32">
      <div tw="flex flex-wrap gap-20 justify-center">
        <div tw="max-w-[466px] text-center flex flex-col gap-2 items-center">
          <uiComps.H2 css={tw`text-aqua`}>Misión</uiComps.H2>
          <FaTrophy size={40} tw="text-aqua" />
          <p>
            Satisfacer las necesidades de nuestros clientes, brindándoles
            soluciones innovadoras y de calidad en equipamiento médico. Nos
            enfocamos en ofrecer una amplia variedad de productos de marcas
            reconocidas y de alta calidad, así como en brindar un servicio de
            postventa eficiente y oportuno.
          </p>
        </div>
        <div tw="max-w-[466px] text-center flex flex-col gap-2 items-center">
          <uiComps.H2 css={tw`text-aqua`}>Visión</uiComps.H2>
          <FaEye size={40} tw="text-aqua" />
          <p>
            Ser reconocidos como la empresa líder en la importación,
            comercialización y distribución de equipos, dispositivos y
            mobiliario médico en el Perú, ofreciendo soluciones innovadoras y
            personalizadas, y generando valor para nuestros clientes,
            colaboradores y accionistas.
          </p>
        </div>
      </div>
    </section>
  )
}
