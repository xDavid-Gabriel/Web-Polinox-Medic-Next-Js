import { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { uiComps } from '../index'
import Link from 'next/link'
import {
  FaChevronDown,
  FaPhone,
  FaBars,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { ICategoria } from '../../../interfaces'
import { useRouter } from 'next/router'
import { fn } from '../../../utils/functions'
import { useGlobal } from '../../../context/GlobalContext'

interface Props {
  categorias: ICategoria[]
}
export const Header = ({ categorias }: Props) => {
  const router = useRouter()
  const { number, text } = useGlobal()
  const { categoria } = router.query

  const [toogle, setToogle] = useState(false)

  const menuToogle = () => setToogle(prev => !prev)

  useEffect(() => {
    //Para el redimencion de la pantalla
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setToogle(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header tw="h-[109.09px] z-10 flex items-center sticky top-0 bg-light-blue-grey">
      <nav tw="container flex justify-between items-center h-full">
        {/* Logo y Menu */}
        <div tw="flex items-center gap-20">
          <Link href="/">
            <uiComps.OptimizedImage
              src="/img/logo.webp"
              alt="Polinox Medic"
              stylesImg={tw`w-[10rem]`}
            />
          </Link>
          <ul tw="font-medium hidden items-center gap-5 xl:flex">
            <li>
              <Link
                href="/"
                tw=" hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full block border-[2px] border-transparent"
                css={router.asPath === '/' ? tw`bg-aqua text-white` : ''}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/quienes-somos"
                tw="hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full block border-[2px] border-transparent"
                css={
                  router.asPath.startsWith('/quienes-somos')
                    ? tw`bg-aqua text-white`
                    : ''
                }
              >
                Quienes somos
              </Link>
            </li>

            <li className="group" tw="relative">
              <Link
                href="/productos/dental"
                tw="hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full  border-[2px] border-transparent flex items-center gap-3"
                css={
                  router.asPath.startsWith('/productos')
                    ? tw`bg-aqua text-white`
                    : ''
                }
              >
                Productos
                <FaChevronDown size={12} />
              </Link>
              <div tw="group-hover:block p-5  bg-white [filter: drop-shadow(0px 2px 4px rgba(159, 169, 173, 0.21))] hidden absolute translate-y-[48px] top-0  w-[400px] ">
                <ul tw="flex flex-col gap-2">
                  {categorias.map(producto => (
                    <li key={producto.codigo}>
                      <Link
                        href={`/productos/${producto.slug}`}
                        tw="flex justify-between p-2.5 px-6 items-center hover:bg-aqua hover:text-white rounded-[7px] transition duration-300"
                        css={
                          categoria === producto.slug
                            ? tw`bg-aqua text-white`
                            : ''
                        }
                      >
                        {fn.capitalize(producto.nombre)}

                        <FaChevronRight size={12} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Telefono y Contacto */}
        <div tw="hidden  gap-8 items-center xl:flex">
          <div tw="flex gap-4 items-center">
            <div tw="w-[3rem] h-[3rem] rounded-full bg-aqua flex-none grid place-content-center text-white">
              <FaPhone size={20} />
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
              target="_blank"
            >
              <span tw="block">Teléfono :</span>
              <span tw="font-bold">(+51) 902 796 268</span>
            </a>
          </div>
          <Link href="/contacto">
            <uiComps.Button variant="secondary">Contacto</uiComps.Button>
          </Link>
        </div>
        <button tw="text-aqua xl:hidden" onClick={menuToogle}>
          {toogle ? <IoMdClose size={40} /> : <FaBars size={30} />}
        </button>
        {/* Menu Mobile */}
        <div
          tw="fixed top-[109.09px] [transition: clip-path 0.3s ease-in-out] w-full left-0 bg-[#F3F5F9] h-[calc(100vh - 109.09px)] overflow-auto xl:hidden"
          css={
            toogle
              ? tw`[clip-path: circle(150% at top right)]`
              : tw` [clip-path: circle(0% at top right)]`
          }
        >
          <ul tw="font-medium  gap-5  flex flex-col items-center justify-center min-h-[calc(100vh - 109.09px)]">
            <li tw="w-[90%] max-w-[500px]">
              <Link
                href="/"
                tw="hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full block border-[2px] border-transparent"
                css={router.asPath === '/' ? tw`bg-aqua text-white` : ''}
              >
                Inicio
              </Link>
            </li>
            <li tw="w-[90%] max-w-[500px]">
              <Link
                href="/quienes-somos"
                tw="hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full block border-[2px] border-transparent"
                css={
                  router.asPath.startsWith('/quienes-somos')
                    ? tw`bg-aqua text-white`
                    : ''
                }
              >
                Quienes somos
              </Link>
            </li>

            <li tw="w-[90%] max-w-[500px]">
              <Link
                href="/productos/dental"
                tw="hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 rounded-full  border-[2px] border-transparent flex items-center gap-3"
                css={
                  router.asPath.startsWith('/productos/dental')
                    ? tw`bg-aqua text-white`
                    : ''
                }
              >
                Productos
                <FaChevronDown size={12} />
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                <uiComps.Button variant="secondary">Contacto</uiComps.Button>
              </Link>
            </li>
            <li>
              <div tw="flex gap-5 ">
                <a
                  href="https://www.facebook.com/PolinoxMedic"
                  tw="text-aqua w-12 h-12 rounded-[10px] grid place-content-center bg-light-blue-grey shadow-[0px 10px 15px rgba(30, 30, 30, 0.1)] hover:scale-[1.1] transition duration-300"
                  target="_blank"
                >
                  <FaFacebook size={25} />
                </a>
                <a
                  href="https://www.instagram.com/polinoxmedic/"
                  target="_blank"
                  tw="w-12 text-aqua h-12 rounded-[10px] grid place-content-center bg-light-blue-grey shadow-[0px 10px 15px rgba(30, 30, 30, 0.1)] hover:scale-[1.1] transition duration-300"
                >
                  <FaInstagram size={25} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
