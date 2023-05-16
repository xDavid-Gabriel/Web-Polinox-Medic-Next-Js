import { Layouts } from '../../components/layouts'
import { QuienesSomos } from '../../views/quienes-somos'
import { ICategoria, IData } from '../../interfaces'
import { api } from '../../api'
import { GetStaticProps } from 'next'

interface Props {
  categorias: ICategoria[]
}

const QuienesSomosPage = ({ categorias }: Props) => {
  return (
    <Layouts.BasicLayout
      title="Quienes Somos | Polinox Medic"
      categorias={categorias}
    >
      <QuienesSomos.SQuienesSomos />
      <QuienesSomos.SMisionVision />
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
export default QuienesSomosPage
