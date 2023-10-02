"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import  { theme }  from './styles/theme'
import { CacheProvider } from '@chakra-ui/next-js'

const inter = Inter({ subsets: ['latin'] }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="pt-br">
        <head>
          <title>ohana - list</title>
        </head>
        <body className={inter.className}>
          <CacheProvider>
            <ChakraProvider resetCSS  theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              {children}
            </ChakraProvider>
          </CacheProvider>
        </body>
      </html>
  )
}