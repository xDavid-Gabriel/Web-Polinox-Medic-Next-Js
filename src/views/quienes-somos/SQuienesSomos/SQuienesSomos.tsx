import tw from 'twin.macro'
import { uiComps } from '../../../components/ui'

export const SQuienesSomos = () => {
  return (
    <section tw="container lg:grid mt-12">
      <figure data-aos="fade-right" tw="col-start-1 row-start-1 z-[-1]">
        <uiComps.OptimizedImage
          src="/img/quienes-somos/quienes-somos.webp"
          alt="Quienes Somos"
          loading="eager"
        />
      </figure>
      <div
        tw="max-w-[500px] w-full bg-white col-start-1 row-start-1 shadow-[0px 10px 65px rgba(1, 168, 177, 0.13)] rounded-[30px] flex flex-col gap-5 mt-10 p-8 mx-auto lg:ml-auto  lg:mt-20 lg:py-[5rem] lg:px-[4rem] lg:mr-20"
        data-aos="fade-up"
      >
        <uiComps.H1 css={tw`text-aqua text-center`}>Quienes Somos</uiComps.H1>
        <p>
          Bienvenidos a Polinox Medic SAC, una empresa peruana dedicada a la
          importación, comercialización y distribución de equipos, dispositivos
          y mobiliario médico de alta calidad. Nos especializamos en ofrecer una
          amplia gama de productos, desde equipos médicos de alta tecnología
          hasta repuestos, accesorios e insumos.
        </p>
        <p>
          Para el servicio post venta, ofrecemos el mantenimiento preventivo y
          correctivo; para ello contamos con un grupo de profesionales
          capacitados continuamente que lograrán dar un excelente servicio.
          Desde nuestros inicios, hemos mantenido el compromiso de ofrecer
          soluciones integrales y personalizadas a nuestros clientes, basándonos
          en la experiencia, la calidad y la eficiencia.
        </p>
        <p>
          En Polinox Medic SAC, nos esforzamos cada día por mantener nuestros
          valores de honestidad, compromiso, respeto, responsabilidad y ética
          empresarial en todas nuestras actividades. Estamos seguros de que
          nuestra experiencia y nuestro compromiso con nuestros clientes nos
          permitirán seguir creciendo como empresa en el sector médico.
        </p>
        <p tw="text-aqua font-semibold text-center">
          ¡Gracias por elegir a Polinox Medic SAC como su aliado en soluciones
          médicas!
        </p>
      </div>
    </section>
  )
}
