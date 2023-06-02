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
  FaChevronUp,
} from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { ICategoria } from '../../../interfaces'
import { useRouter } from 'next/router'
import { useGlobal } from '../../../context/GlobalContext'
import styled from 'styled-components'
import { ListCategorias } from '../ListCategorias/ListCategorias'
interface Props {
  categorias: ICategoria[]
}

const MenuMobile = styled.div`
  position: fixed;
  top: 109.09px;
  transition: clip-path 0.3s ease-in-out;
  width: 100%;
  left: 0;
  background-color: #f3f5f9;
  height: calc(100vh - 109.09px);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0; /* Ancho del scrollbar */
    height: 0; /* Altura del scrollbar */
    background-color: transparent; /* Color de fondo del scrollbar */
  }
  @media (min-width: 1280px) {
    display: none;
  }
`
export const Header = ({ categorias }: Props) => {
  const router = useRouter()
  const { number, text } = useGlobal()
  const { categoria } = router.query

  const [toogle, setToogle] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

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
                <ListCategorias
                  //Lista
                  categorias={categorias}
                  //Para que pueda hacer la validacion
                  categoria={categoria?.toString()}
                  //Estilos si se cumple
                  styleLink={tw`bg-aqua text-white`}
                  //Estilos si no se cumple
                  noStyleLink={tw`hover:bg-aqua hover:text-white`}
                />
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
        <MenuMobile
          // tw="fixed top-[109.09px] [transition: clip-path 0.3s ease-in-out] w-full left-0 bg-[#F3F5F9] h-[calc(100vh - 109.09px)] overflow-auto xl:hidden"
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
              <button
                tw="flex items-center gap-3 hover:(bg-aqua text-white) transition duration-300 py-2.5 px-8 border-[2px] border-transparent w-full "
                css={
                  router.asPath.includes('/productos')
                    ? isOpen
                      ? tw`bg-aqua text-white rounded-[20px 20px 0 0]`
                      : tw`bg-aqua text-white rounded-full`
                    : isOpen
                    ? tw`bg-aqua text-white rounded-[20px 20px 0 0]`
                    : tw`rounded-full`
                }
                onClick={() => setIsOpen(prevState => !prevState)}
              >
                Productos
                {isOpen ? (
                  <FaChevronUp size={12} />
                ) : (
                  <FaChevronDown size={12} />
                )}
              </button>
              <ListCategorias
                styleList={
                  isOpen
                    ? tw`px-8 rounded-[0 0 10px 10px] transition-[height] duration-300 bg-aqua text-white h-[473px] md:h-[500px] py-5`
                    : tw`px-8 rounded-[0 0 10px 10px] transition-[height] duration-300 bg-aqua text-white h-0 overflow-hidden`
                }
                //Lista
                categorias={categorias}
                //Para que pueda hacer la validacion
                categoria={categoria?.toString()}
                //Estilos si se cumple
                styleLink={tw`bg-white text-aqua`}
                //Estilos si no se cumple
                noStyleLink={tw`hover:bg-white hover:text-aqua`}
                menuToogle={menuToogle}
              />
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
        </MenuMobile>
      </nav>
    </header>
  )
}
