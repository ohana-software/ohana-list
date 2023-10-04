import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider } from '@chakra-ui/react'

import { styleTheme } from '../../theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ohana List',
  description: 'Processo seletivo para Ohana',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" type="image/x-icon" href="/favicon.jpeg"></link>
      <body className={inter.className}>
        <ChakraProvider theme={styleTheme}>{children}</ChakraProvider>
      </body>
    </html>
  )
}
