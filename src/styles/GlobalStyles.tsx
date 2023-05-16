import { createGlobalStyle, CSSObject } from 'styled-components'
import tw, { theme, globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle`
  body{
    ${tw`text-smoky-gray bg-light-blue-grey`}
  }
  img{
    ${tw`w-full h-full object-cover`}
  }

  @media  (min-width: 1024px) {
    .swiper--categorias > .swiper-wrapper{
    display:contents;
  }
  
  
}
  
${{ ...(globalStyles as CSSObject) }}
`

export default GlobalStyles
