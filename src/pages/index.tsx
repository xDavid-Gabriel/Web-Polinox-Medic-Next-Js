import { GetStaticProps } from 'next'
import { Layouts } from '../components/layouts'
import { Home } from '../views/home'
import { api } from '../api'
import { IData, ICategoria } from '../interfaces'

interface Props {
  categorias: ICategoria[]
}

const HomePage = ({ categorias }: Props) => {
  return (
    <Layouts.BasicLayout title="Home | Polinox Medic" categorias={categorias}>
      <Home.SHero />
      <Home.SCategorias categorias={categorias} />
      <Home.SCta />
      <Home.SCatalogo />
      <Home.SMarcas />
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
export default HomePage
