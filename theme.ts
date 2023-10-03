import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

export const colorModeConfig = extendTheme({ config })

export const styleTheme = {
  fontSizes: {
    lg: '18px',
  },
  colors: {
    gray: {
      700: '#0D0D0D',
      600: '#1A1A1A',
      500: '#262626',
      400: '#333333',
      300: '#808080',
      200: '#D9D9D9',
      100: '#F2F2F2',
    },
    danger: '#E25858',
    pink: '#BF477E',
    dark_pink: '#B22D95',
    light_orange: '#D57B5A',
    yellow_button: '#ECB62A',
    green: '#4BE03F',
  },
}
