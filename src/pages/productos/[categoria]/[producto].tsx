import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../../api'
import { ICategoria, IData, IProducto } from '../../../interfaces'
import { Layouts } from '../../../components/layouts'
import { uiComps } from '../../../components/ui/index'
import tw from 'twin.macro'

interface Props {
  productoEncontrado: IProducto
  categoria: ICategoria[]
}
const ProductosDetailPage = ({ productoEncontrado, categoria }: Props) => {
  let number = '988848573'
  let text = `Hola 👋,%0AQuisiera solicitar una cotización de este producto:%0A%0A*Nombre:* ${productoEncontrado.nombre}%0A*Marca:* ${productoEncontrado.marca}%0A*Procedencia:* ${productoEncontrado.procedencia}%0A%0APor favor, envíame detallado el costo y el tiempo estimado de entrega.%0A¡Gracias y saludos cordiales! 🤗`

  console.log(productoEncontrado)
  return (
    <Layouts.BasicLayout
      title={`Producto | ${productoEncontrado.nombre}`}
      categorias={categoria}
    >
      <section tw="container grid gap-10  pt-10 md:gap-20 md:grid-cols-2 md:pt-20 xl:pt-32">
        <uiComps.OptimizedImage
          src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/blog/los-10-equipos-medicos-mas-importantes-en-los-hospitales.png"
          alt={productoEncontrado.nombre}
          stylesImg={tw`md:h-[700px]`}
        />
        <div tw="max-w-[600px] flex flex-col gap-5">
          <uiComps.H1 css={tw`text-aqua`}>
            {productoEncontrado.nombre}
          </uiComps.H1>
          <div>
            <div tw="flex gap-2 items-center text-navy-blue">
              <uiComps.H3>Marca: </uiComps.H3>
              <p tw="font-medium text-smoky-gray">{productoEncontrado.marca}</p>
            </div>
            <div tw="flex gap-2 items-center text-navy-blue">
              <uiComps.H3>Procedencia: </uiComps.H3>
              <p tw="font-medium text-smoky-gray">
                {' '}
                {productoEncontrado.procedencia}
              </p>
            </div>
          </div>
          <p tw="font-medium">{productoEncontrado.descripcion}</p>

          <a
            tw="w-fit"
            href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
            target="_blank"
          >
            <uiComps.Button variant="tertiary" css={tw`w-fit`}>
              Solicitar cotiaión
            </uiComps.Button>
          </a>
        </div>
      </section>
      {/* <h1>{productoEncontrado.nombre}</h1>
      <img src={productoEncontrado.url_img} alt={productoEncontrado.nombre} />
      <p>{productoEncontrado.descripcion}</p> */}
    </Layouts.BasicLayout>
  )
}
export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await api.get<IData>('/productos')
  const productoSlugs = data.content.flatMap(prodCt =>
    prodCt.productos.map(prod => ({
      categoria: prodCt.slug,
      producto: prod.slug,
    })),
  )

  return {
    paths: productoSlugs.map(slug => ({
      params: slug,
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { producto } = params as { producto: string }
  const { categoria } = params as { categoria: string }
  const { data } = await api.get<IData>('/productos')
  //traer categoria por slug
  const productoEncontrado = data.content
    .find(prodCt => prodCt.slug === categoria)
    ?.productos.find(prod => prod.slug === producto)

  // Traer todas las categorias

  return {
    props: {
      productoEncontrado,
      categoria: data.content,
    },
  }
}
export default ProductosDetailPage
