import { GetStaticProps } from 'next'
import { ICategoria, IData } from '../../interfaces'
import { api } from '../../api'
import { Layouts } from '../../components/layouts'
import { uiComps } from '../../components/ui/index'
import { useGlobal } from '../../context/GlobalContext'
import tw from 'twin.macro'

let text = `Hola 👋,%0AQuisiera solicitar una cotización de este producto:%0A%0A*Nombre:* Sistema de seguridad para ecografo%0A*Marca:* SAMSUNG%0A*Procedencia:* CHINA%0A%0APor favor, envíame detallado el costo y el tiempo estimado de entrega.%0A¡Gracias y saludos cordiales! 🤗`
interface Props {
  categorias: ICategoria[]
}

const objetosConImagenes = [
  {
    nombre: 'Imagen 1',
    url: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg',
  },
  {
    nombre: 'Imagen 2',
    url: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg',
  },
  {
    nombre: 'Imagen 3',
    url: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg',
  },
  {
    nombre: 'Imagen 4',
    url: 'https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg',
  },
  {
    nombre: 'Imagen 5',
    url: 'https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg',
  },
  {
    nombre: 'Imagen 6',
    url: 'https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg',
  },
  {
    nombre: 'Imagen 7',
    url: 'https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg',
  },
  {
    nombre: 'Imagen 8',
    url: 'https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg',
  },
  {
    nombre: 'Imagen 9',
    url: 'https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg',
  },
  {
    nombre: 'Imagen 10',
    url: 'https://images.pexels.com/photos/6789012/pexels-photo-6789012.jpeg',
  },
]
const SistemaDeSeguridadParaEcografoPage = ({ categorias }: Props) => {
  const { number } = useGlobal()
  return (
    <Layouts.BasicLayout
      title="Categoria | Sistema de seguridad para ecografo"
      categorias={categorias}
    >
      <section tw="container">
        <div tw="flex flex-col gap-5 mt-10 items-center text-center">
          <uiComps.H1 css={tw`text-aqua`}>
            Sistema de seguridad para ecografo
          </uiComps.H1>
          <p tw="max-w-[670px]">
            El sistema de seguridad para ecógrafo es una solución integral que
            garantiza la protección y confidencialidad de los datos médicos
            generados durante los procedimientos de ecografía. Implementa
            medidas de seguridad físicas y tecnológicas, como autenticación de
            usuarios, control de acceso, encriptación de datos y cumplimiento de
            regulaciones de protección de datos. Su objetivo es salvaguardar la
            integridad de la información y prevenir accesos no autorizados,
            brindando confianza tanto a los profesionales de la salud como a los
            pacientes.
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
            target="_blank"
          >
            <uiComps.Button variant="tertiary">
              Solicitar cotización
            </uiComps.Button>
          </a>
        </div>
        <div tw="flex justify-center mt-10 flex-wrap gap-5">
          {objetosConImagenes.map(imagenes => (
            <div key={imagenes.nombre} tw="w-[350px]">
              {/* <uiComps.H3>{imagenes.nombre}</uiComps.H3> */}
              <uiComps.OptimizedImage
                src={imagenes.url}
                alt={imagenes.nombre}
                stylesImg={tw`h-full rounded-[10px]`}
              />
            </div>
          ))}
        </div>
      </section>
      <section tw="container mt-10 lg:mt-20">
        <uiComps.H2 css={tw`text-aqua my-8 lg:pb-[3rem] text-center`}>
          Envíanos un mensaje
        </uiComps.H2>
        <div tw=" grid items-center lg:grid-cols-2 gap-10 lg:gap-20 ">
          <img src="/img/contacto/contacto.svg" alt="contacto" />
          <uiComps.Form />
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
export default SistemaDeSeguridadParaEcografoPage
