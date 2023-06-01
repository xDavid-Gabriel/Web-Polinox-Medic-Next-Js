import tw, { styled } from 'twin.macro'
interface btnProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'whatsapp'
}
export const Button = styled.button.attrs({ className: '' })(
  ({ variant = 'primary' }: btnProps) => [
    tw`transition duration-300 rounded-full border-[2px] border-transparent font-medium inline-block py-2.5 px-7`,
    variant === 'primary' && tw` bg-white  text-aqua hover:bg-white/80`,

    variant === 'secondary' &&
      tw` border-aqua text-aqua hover:bg-aqua hover:text-white`,
    variant === 'tertiary' && tw`!bg-aqua text-white hover:!bg-aqua/80`,

    variant === 'whatsapp' &&
      tw`rounded-full bg-[linear-gradient(36.13deg, #2EB843 14.03%, #62D96F 84.6%);] text-white  hover:scale-[1.1] border-0 w-[60px] h-[60px] text-4xl  grid place-content-center z-20 fixed bottom-[98px] right-[24px] animate-bounce lg:text-4xl`,
    ,
  ],
)
