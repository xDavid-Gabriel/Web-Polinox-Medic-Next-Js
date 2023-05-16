import { GetStaticPaths, GetStaticProps } from 'next'
import { api } from '../../api'
import { ICategoria, IData } from '../../interfaces'
import { Layouts } from '../../components/layouts'
import { Categoria } from '../../views/categoria'
import { fn } from '../../utils/functions'

interface Props {
  findCategoria: ICategoria
  categoriaAll: ICategoria[]
}

const ProductosCategoriasPage = ({ findCategoria, categoriaAll }: Props) => {
  return (
    <Layouts.BasicLayout
      title={`Categoria | ${fn.capitalize(findCategoria.nombre)}`}
      categorias={categoriaAll}
    >
      <Categoria.SCategorias
        categoriaAll={categoriaAll}
        findCategoria={findCategoria}
      />
    </Layouts.BasicLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const { data } = await api.get<IData>('/productos')
  const categorias = data.content
  const categoriaSlug: string[] = categorias.map(categoria => categoria.slug)

  return {
    paths: categoriaSlug.map(slug => ({
      params: { categoria: slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { categoria } = params as { categoria: string }
  const { data } = await api.get<IData>('/productos')
  const categorias = data.content
  //traer categoria por slug
  const findCategoria = categorias.find(prod => prod.slug === categoria)
  //traer todas las categorias
  const categoriaAll = categorias
  return {
    props: {
      findCategoria,
      categoriaAll,
    },
  }
}
export default ProductosCategoriasPage
