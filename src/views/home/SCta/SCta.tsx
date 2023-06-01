import tw from 'twin.macro'
import { uiComps } from '../../../components/ui/index'
import Link from 'next/link'
export const SCta = () => {
  return (
    <section tw="relative bg-[url(/img/home/cta.webp)] bg-no-repeat bg-cover mt-10 md:mt-20 xl:mt-32">
      <div tw="container py-10 sm:py-[9rem]">
        <div
          tw="text-white max-w-[600px] flex flex-col gap-7 "
          data-aos="fade-up"
        >
          <uiComps.H2>Equipo Médicos</uiComps.H2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and{' '}
          </p>
          <div tw="relative w-fit animate-bounce">
            <Link href="/contacto">
              <uiComps.Button css={tw`relative z-[5] px-[4rem]`}>
                Cotiza ya
              </uiComps.Button>
            </Link>
            <img
              src="/img/decoracion.svg"
              tw="w-[57px] absolute top-[-5px] z-[1] right-0 translate-x-[25%]"
              alt="Decoración"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
