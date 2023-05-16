import tw, { styled } from 'twin.macro'
import { squada_one } from '../../../utils'

interface H1Props {
  variant?: 'primary'
}

export const H1 = styled.h1.attrs({ className: squada_one.className })(
  ({ variant = 'primary' }: H1Props) => [
    tw`font-normal`,
    variant === 'primary' &&
      tw`text-[24px] leading-[35px] md:leading-[55px] md:text-[35px] xl:text-[45px]`,
  ],
)

interface H2Props {
  variant?: 'primary'
}

export const H2 = styled.h2.attrs({ className: squada_one.className })(
  ({ variant = 'primary' }: H2Props) => [
    tw`font-normal`,
    variant === 'primary' && tw`text-[27px] md:text-[33px] xl:text-[43px]`,
  ],
)

interface H3Props {
  variant?: 'primary' | 'secondary'
}
export const H3 = styled.h3.attrs({ className: squada_one.className })(
  ({ variant = 'primary' }: H3Props) => [
    tw`font-normal`,
    variant === 'primary' && tw`text-[19px] xl:text-[21px]`,
    variant === 'secondary' && tw`text-[20px] xl:text-[35px]`,
  ],
)
