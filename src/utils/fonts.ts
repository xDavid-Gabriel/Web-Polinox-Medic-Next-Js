import { Squada_One, Montserrat } from 'next/font/google'

export const squada_one = Squada_One({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-squada_one',
  display: 'swap',
})

export const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})
