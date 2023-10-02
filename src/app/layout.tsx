import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ColorModeScript } from '@chakra-ui/react'

import theme from '../../theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ohana List',
  description: 'Processo seletivo para Ohana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
