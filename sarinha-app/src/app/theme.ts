import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "250px",
  md: "432px",
};

const colors = {
  product: {
    pink: "#BF477E",
    "dark-pink": "#B22D95",
    "light-orange": "#D57B5A",
    "yellow-button": "#ECB62A",
  },
  base: {
    gray: {
      100: "#F2F2F2",
      200: "#D9D9D9",
      300: "#808080",
      400: "#333333",
      500: "#262626",
      600: "#1A1A1A",
      700: "#0D0D0D",
    },
    danger: "#E25858",
  },
};

const semanticTokens = {
  colors: {
    headerBg: {
      _light: "base.gray.200",
      _dark: "base.gray.700",
    },
    headerIcon: {
      _light: "#252525",
      _dark: "white",
    },
    containerBg: {
      _light: "#F5F5F5",
      _dark: "base.gray.600",
    },
    addTask: {
      bg: {
        _light: "base.gray.100",
        _dark: "base.gray.500",
      },
    },
  },
};

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "40px",
};

const fontWeights = {
  regular: 400,
  bold: 700,
  black: 900,
};

const lineHeights = {
  base: "140%",
};

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  semanticTokens,
  config,
});
