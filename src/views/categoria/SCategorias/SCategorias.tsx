import { uiComps } from '../../../components/ui'
import tw from 'twin.macro'
import Link from 'next/link'
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa'
import { ICategoria } from '../../../interfaces'
import { fn } from '../../../utils/functions'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
  findCategoria: ICategoria
  categoriaAll: ICategoria[]
}
export const SCategorias = ({ categoriaAll, findCategoria }: Props) => {
  const router = useRouter()
  const { categoria } = router.query
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section tw="container xl:mt-10">
      <div
        tw="flex flex-col gap-3 items-center max-w-[800px] text-center mx-auto"
        data-aos="fade-up"
      >
        <uiComps.H2 css={tw`text-aqua`}>
          {fn.capitalize(findCategoria.nombre)}
        </uiComps.H2>
        <p>
          Bienvenidos a Polinox Medic SAC, una empresa peruana dedicada a la
          importación, comercialización y distribución de equipos, dispositivos
          y mobiliario médico de alta calidad. Nos especializamos en ofrecer una
          amplia gama de productos, desde equipos médicos de alta tecnología
          hasta repuestos, accesorios e insumos.
        </p>
      </div>

      <div tw="grid lg:[grid-template-columns:20rem 1fr]  mt-5 gap-10 md:mt-10 ">
        {/* Lista de categorias */}
        <div
          tw="transition-[gap] duration-300 px-4  bg-[linear-gradient(188.23deg, #01A8B1 0.42%, #2D4491 104.02%)] py-8 rounded-[20px] flex flex-col lg:pt-12 lg:pb-32 lg:h-fit lg:sticky lg:top-[115px] lg:overflow-visible"
          css={isOpen ? tw`gap-5` : tw`gap-0`}
        >
          <button
            tw="text-white flex gap-3 justify-center items-center font-medium text-[17px] lg:hidden"
            onClick={() => setIsOpen(prevState => !prevState)}
          >
            Listar categorias {isOpen ? <FaChevronUp /> : <FaChevronDown />}{' '}
          </button>
          <div
            tw="transition-[height] duration-300 flex flex-col gap-5"
            css={isOpen ? tw`h-[492px]` : tw`h-0 overflow-hidden lg:h-auto`}
          >
            {categoriaAll.map(ctg => (
              <div key={ctg.codigo} tw="lg:h-auto lg:w-full lg:mr-0">
                <Link
                  href={`/productos/${ctg.slug}`}
                  tw="flex justify-between p-2.5 px-6 items-center text-white font-medium hover:bg-white hover:text-aqua rounded-[7px] transition duration-300"
                  css={categoria === ctg.slug ? tw`bg-white text-aqua` : ''}
                >
                  {fn.capitalize(ctg.nombre)}
                  {categoria === ctg.slug ? (
                    <FaChevronRight size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Lista de productos */}
        <div tw="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          {findCategoria.productos.map(producto => (
            <uiComps.Card
              key={producto.codigo}
              href={`/productos/${categoria}/${producto.slug}`}
              src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/blog/los-10-equipos-medicos-mas-importantes-en-los-hospitales.png"
              alt={producto.nombre}
              nombre={producto.nombre}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
