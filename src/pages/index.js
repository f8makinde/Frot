// import localFont from "next/font/local"
import { Lora, Open_Sans, Poppins } from 'next/font/google'
import Homepage from '@/components/Homepage'

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open_sans',
})
const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: "600",
  variable: '--font-poppins',
})

export default function Home() {
  return (
    <main
      className={`${poppins.variable} ${open_sans.variable} ${lora.variable}`}
    >
      <Homepage />
    </main>
  )
}
