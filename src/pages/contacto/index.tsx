import { Layouts } from '../../components/layouts'
import { ICategoria, IData } from '../../interfaces'
import { api } from '../../api'
import { GetStaticProps } from 'next'
import { uiComps } from '../../components/ui'
import tw from 'twin.macro'
import { useGlobal } from '../../context/GlobalContext'
interface Props {
  categorias: ICategoria[]
}

const ContactoPage = ({ categorias }: Props) => {
  const { number, text } = useGlobal()

  return (
    <Layouts.BasicLayout
      title="Contacto | Polinox Medic"
      categorias={categorias}
    >
      <section tw="container">
        <uiComps.H2 css={tw`text-aqua my-8 lg:pb-[3rem] text-center`}>
          Envíanos un mensaje
        </uiComps.H2>
        <div tw="grid items-center lg:grid-cols-2 gap-10 lg:gap-20">
          <img src="/img/contacto/contacto.svg" alt="contacto" />
          <uiComps.Form />
        </div>
      </section>
      <section tw="container items-center grid sm:grid-cols-2 gap-10 lg:gap-20 mt-10 lg:mt-20 xl:mt-32">
        <ul tw="flex flex-col gap-4">
          <li>
            <a
              href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
              target="_blank"
              tw="font-medium"
            >
              {' '}
              <strong tw="text-aqua mr-3">Teléfono:</strong> (+51) 902 796 268{' '}
            </a>
          </li>
          <li>
            <a href="#" tw="font-medium break-all">
              {' '}
              <strong tw="text-aqua mr-3"> Dirección:</strong> Av. Aramburú 856,
              Of. 201A, Surquillo, Lima – Perú
            </a>
          </li>
          <li>
            <a
              href="mailto:ventaspolinoxmedic@gmail.com"
              tw="font-medium break-all"
            >
              {' '}
              <strong tw="text-aqua mr-3">Email:</strong>{' '}
              ventaspolinoxmedic@gmail.com
            </a>
          </li>
        </ul>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.8727582317633!2d-77.0120487243685!3d-11.983305288248616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c562b237b1ad%3A0x81b7bf88d50f89ff!2sUniversidad%20Tecnol%C3%B3gica%20Del%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1684217425368!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            tw="border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layouts.BasicLayout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await api.get<IData>('/productos')

  return {
    props: {
      categorias: data.content,
    },
  }
}

export default ContactoPage
