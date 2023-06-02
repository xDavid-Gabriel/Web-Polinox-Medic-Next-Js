import React from 'react'
import { ICategoria } from '../../../interfaces'
import Link from 'next/link'
import tw, { TwStyle } from 'twin.macro'
import { fn } from '../../../utils/functions'
import { FaChevronRight } from 'react-icons/fa'
import { useRouter } from 'next/router'
interface Props {
  styleList?: TwStyle | string
  styleLink?: TwStyle | string
  noStyleLink?: TwStyle | string
  categorias: ICategoria[]
  categoria?: string
  menuToogle?: () => void
}
export const ListCategorias = ({
  styleLink,
  noStyleLink,
  categorias,
  styleList,
  categoria,
  menuToogle,
}: Props) => {
  const router = useRouter()
  return (
    <ul tw="flex flex-col gap-2" css={styleList}>
      {categorias.map(producto => (
        <li key={producto.codigo} onClick={menuToogle}>
          <Link
            href={`/productos/${producto.slug}`}
            tw="flex justify-between p-2.5 px-6 items-center  rounded-[7px] transition duration-300"
            css={categoria === producto.slug ? styleLink : noStyleLink}
          >
            {fn.capitalize(producto.nombre)}

            <FaChevronRight size={12} />
          </Link>
        </li>
      ))}
      <li>
        <Link
          href="/productos/sistema-de-seguridad-para-ecografo"
          tw="flex justify-between p-2.5 px-6 items-center  rounded-[7px] transition duration-300"
          css={
            router.asPath.includes('sistema-de-seguridad-para-ecografo')
              ? styleLink
              : noStyleLink
          }
        >
          Sistema de seguridad para ecografo
          <FaChevronRight size={12} />
        </Link>
      </li>
    </ul>
  )
}
