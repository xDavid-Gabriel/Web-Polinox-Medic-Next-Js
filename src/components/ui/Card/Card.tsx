import Link from 'next/link'
import tw, { TwStyle } from 'twin.macro'

import { fn } from '../../../utils/functions'
import { OptimizedImage } from '../OptimizedImg/OptimizedImg'
import { Button } from '../Button/Button'
import { useState } from 'react'

interface Props {
  href: string
  src: string
  alt: string
  nombre: string
  styleCard?: TwStyle
}
export const Card = ({ href, src, alt, nombre, styleCard }: Props) => {
  const [imageError, setImageError] = useState(false)
  const imageUrl = src // Reemplaza esto con la URL de la imagen que deseas verificar
  const fallbackImageUrl =
    'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/blog/los-10-equipos-medicos-mas-importantes-en-los-hospitales.png' // Reemplaza esto con la URL de la imagen estática de respaldo

  const handleImageError = () => {
    setImageError(true)
  }
  return (
    <Link
      href={href}
      // key={categoria.codigo}
      tw="flex flex-col gap-7 items-center text-center mx-auto lg:max-w-[initial] lg:mx-0"
      className="group"
      data-aos="flip-left"
      css={styleCard}
    >
      <figure tw="relative overflow-hidden">
        {imageError ? (
          <OptimizedImage
            src={fallbackImageUrl}
            alt="Imagen de respaldo"
            stylesImg={tw`rounded-[20px 20px 0px 0px;] h-[250px]`}
          />
        ) : (
          <OptimizedImage
            src={imageUrl}
            alt={alt}
            stylesImg={tw`rounded-[20px 20px 0px 0px;] h-[250px]`}
            onError={handleImageError}
          />
        )}

        <div tw="bg-aqua/20 translate-y-[100%] absolute rounded-[20px 20px 0px 0px;] inset-0 transition duration-300 group-hover:translate-y-0"></div>
      </figure>

      <div tw="flex flex-col gap-3 items-center  px-8">
        <strong tw="text-[18px] font-bold text-navy-blue">
          {fn.capitalize(nombre)}
        </strong>
      </div>

      <Button
        variant="tertiary"
        css={tw`mt-auto group-hover:translate-y-2 transition duration-300`}
      >
        Ver detalle
      </Button>
    </Link>
  )
}
