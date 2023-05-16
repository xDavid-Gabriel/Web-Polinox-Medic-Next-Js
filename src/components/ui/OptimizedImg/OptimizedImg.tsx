import tw, { TwStyle } from 'twin.macro'
import styled from 'styled-components'

interface PropsPicture {
  src: string
  alt: string
  srcMobile: string
  srcTablet: string
  srcDesktop: string
  stylesPicture?: TwStyle
  mediaTablet: number
  mediaDesktop: number
  loading: 'lazy' | 'eager' | undefined
}
export const OptimizedPicture = ({
  srcMobile,
  srcTablet,
  srcDesktop,
  alt,
  stylesPicture,
  mediaTablet = 768,
  mediaDesktop = 1280,
  loading = 'lazy',
}: PropsPicture) => {
  return (
    <picture css={stylesPicture}>
      <source
        srcSet={`/img/desktop${srcDesktop}`}
        media={`(min-width: ${mediaDesktop}px)`}
      />
      <source
        srcSet={`/img/tablet${srcTablet}`}
        media={`(min-width: ${mediaTablet}px)`}
      />
      <img loading={loading} src={`/img/movil${srcMobile}`} alt={alt} />
    </picture>
  )
}

interface PropsImg {
  src: string
  alt: string
  loading?: 'lazy' | 'eager' | undefined
  stylesImg?: TwStyle
}

export const OptimizedImage = ({
  src,
  alt,
  loading = 'lazy',
  stylesImg,
}: PropsImg) => {
  return <img src={src} alt={alt} loading={loading} css={stylesImg} />
}

interface OptimizedBgProps {
  src: string
}
export const OptimizedBg = styled.section<OptimizedBgProps>`
  background-repeat: no-repeat; /* Evita que se repita la imagen */
  background-size: cover; /* Ajusta la imagen al tamaño del componente */
  background-position: center;
  /* Imagen para mobile */
  background-image: url(${props => `${props.src}`});
`
/* Imagen para tablets */
//@media (min-width: 768px) {
// background-image: url(${props => `/img/tablet${props.srcTablet}`});
// }

/* Imagen para desktops */
// @media (min-width: 1280px) {
// background-image: url(${props => `/img/desktop${props.srcDesktop}`});
//}
