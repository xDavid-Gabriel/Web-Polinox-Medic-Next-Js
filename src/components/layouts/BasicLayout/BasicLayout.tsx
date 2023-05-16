import { FC, PropsWithChildren } from 'react'
import { uiComps } from '../../ui'
import Head from 'next/head'
import { ICategoria } from '../../../interfaces'
import tw from 'twin.macro'
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaSearchLocation,
  FaWhatsapp,
} from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useGlobal } from '../../../context/GlobalContext'

interface Props {
  title: string
  categorias: ICategoria[]
}
export const BasicLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title,
  categorias,
}) => {
  const router = useRouter()

  const { number, text } = useGlobal()
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
      </Head>
      <uiComps.Header categorias={categorias} />
      <main>{children}</main>
      <a
        href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
        target="_blank"
      >
        <uiComps.Button
          variant="whatsapp"
          aria-label="Boton de whatsapp que se va a whatsapp"
        >
          <FaWhatsapp />
        </uiComps.Button>
      </a>
      <div tw="hidden fixed left-[4rem] sm:flex flex-col gap-5 top-[40rem] z-[3] items-center">
        <a
          href="https://www.facebook.com/PolinoxMedic"
          target="_blank"
          tw="w-12 h-12 rounded-[10px] grid place-content-center bg-light-blue-grey shadow-[0px 10px 15px rgba(30, 30, 30, 0.1)] hover:scale-[1.1] transition duration-300"
        >
          <FaFacebook size={25} />
        </a>
        <a
          href="https://www.instagram.com/polinoxmedic/"
          target="_blank"
          tw="w-12 h-12 rounded-[10px] grid place-content-center bg-light-blue-grey shadow-[0px 10px 15px rgba(30, 30, 30, 0.1)] hover:scale-[1.1] transition duration-300"
        >
          <FaInstagram size={25} />
        </a>
        <div tw="w-[2px] h-[4rem] bg-smoky-gray rounded-full" />
      </div>
      <footer tw="bg-[linear-gradient(90deg, #2D4491 0%, #01A8B1 100%);] py-12 mt-10 sm:mt-20 xl:mt-32 text-white">
        <div tw="container grid sm:grid-cols-2 lg:grid-cols-3 gap-y-10">
          <uiComps.OptimizedImage
            src="/img/logo-white.webp"
            alt="Polinox Medic"
            stylesImg={tw`w-[10rem] text-center mx-auto sm:mx-0 sm:col-span-2 lg:col-span-3`}
          />
          <div tw="flex flex-col gap-6 text-center sm:text-start">
            <uiComps.H3 variant="secondary">Contáctenos</uiComps.H3>
            <ul tw="flex flex-col gap-4 font-medium items-center sm:items-start">
              <li>
                <a
                  href="mailto:ventaspolinoxmedic@gmail.com"
                  tw="flex gap-3 items-center break-all"
                >
                  <FaEnvelope size={20} tw="flex-none " />
                  ventaspolinoxmedic@gmail.com
                </a>
              </li>
              <li>
                <a
                  href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
                  target="_blank"
                  tw="flex gap-3 items-center"
                >
                  <FaWhatsapp size={20} tw="flex-none" />
                  (+51) 902 796 268
                </a>
              </li>
              <li>
                <a href="#" tw="flex gap-3 items-center break-all">
                  <FaSearchLocation size={20} tw="flex-none" />
                  Av. 28 de Julio. nro 404 <br /> La Tomilla Cayma Arequipa Perú
                </a>
              </li>
            </ul>
          </div>

          <div tw="flex flex-col gap-6 text-center sm:text-start sm:justify-self-center">
            <uiComps.H3 variant="secondary">Enlaces</uiComps.H3>
            <ul tw="flex items-center sm:items-start flex-col gap-4 font-medium">
              <li tw="w-fit" className="group">
                <Link href="/">Inicio</Link>
                <hr
                  tw="rounded-lg h-[2px] w-0 opacity-0 bg-white transition-[width opacity] duration-500 group-hover:opacity-100 group-hover:w-full"
                  css={router.asPath === '/' ? tw`opacity-100 w-full` : ''}
                />
              </li>
              <li tw="w-fit" className="group">
                <Link href="/quienes-somos">Quienes somos</Link>
                <hr
                  tw="rounded-lg h-[2px] w-0 opacity-0 bg-white transition-[width opacity] duration-500 group-hover:opacity-100 group-hover:w-full"
                  css={
                    router.asPath.startsWith('/quienes-somos')
                      ? tw`opacity-100 w-full`
                      : ''
                  }
                />
              </li>
              <li tw="w-fit" className="group">
                <Link href="/productos/dental">Productos</Link>
                <hr
                  tw="rounded-lg h-[2px] w-0 opacity-0 bg-white transition-[width opacity] duration-500 group-hover:opacity-100 group-hover:w-full"
                  css={
                    router.asPath.startsWith('/productos/dental')
                      ? tw`opacity-100 w-full`
                      : ''
                  }
                />
              </li>
              <li tw="w-fit" className="group">
                <Link href="/contacto">Contacto</Link>
                <hr
                  tw="rounded-lg h-[2px] w-0 opacity-0 bg-white transition-[width opacity] duration-500 group-hover:opacity-100 group-hover:w-full"
                  css={
                    router.asPath.startsWith('/contacto')
                      ? tw`opacity-100 w-full`
                      : ''
                  }
                />
              </li>
            </ul>
          </div>
          <div tw="flex flex-col gap-6  text-center sm:text-start sm:col-span-2 lg:justify-self-center lg:col-span-1">
            <uiComps.H3 variant="secondary">Redes Sociales</uiComps.H3>
            <ul tw="flex gap-4 font-medium justify-center sm:justify-start">
              <li>
                <a
                  href="https://www.facebook.com/PolinoxMedic"
                  target="_blank"
                  tw="hover:scale-[1.1] block transition duration-300"
                >
                  <FaFacebook size={25} />
                </a>
              </li>
              <li>
                <a
                  tw="hover:scale-[1.1] block transition duration-300"
                  href={`https://api.whatsapp.com/send?phone=+51${number}&text=${text}`}
                  target="_blank"
                >
                  <FaWhatsapp size={25} />
                </a>
              </li>
              <li>
                <a
                  tw="hover:scale-[1.1] block transition duration-300"
                  href="https://www.instagram.com/polinoxmedic/"
                  target="_blank"
                >
                  <FaInstagram size={25} />
                </a>
              </li>
            </ul>
          </div>
          <hr tw="my-10 lg:mt-20 sm:col-span-2 lg:col-span-3" />
        </div>
        <p tw="text-center">
          © {new Date().getFullYear()} Polinox Medic. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  )
}
