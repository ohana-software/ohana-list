import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

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
    taskLength: {
      bg: {
        _light: "base.gray.200",
        _dark: "base.gray.400",
      },
      color: {
        _light: "base.gray.400",
        _dark: "base.gray.200",
      },
    },
    task: {
      bg: {
        _light: "#FFF",
        _dark: "base.gray.500",
      },
      border: {
        _light: "base.gray.200",
        _dark: "base.gray.400",
      },
      color: {
        _light: "base.gray.400",
        _dark: "base.gray.100",
      },
      lineHeight: "19.6px",
      finished: {
        bg: {
          _light: "#EDEDED",
          _dark: "base.gray.500",
        },
        border: {
          _light: "base.gray.200",
          _dark: "base.gray.500",
        },
        color: "base.gray.300",
      },
    },
  },
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

const Button = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "base.gray.100",
    borderRadius: "8px",
    fontSize: "sm",
    fontWeight: "bold",
    transition: "0.2s",
    p: "16px",
  },
  sizes: {
    md: {
      fontSize: "sm",
    },
  },
  variants: {
    yellow: {
      bg: "product.yellow-button",
      _hover: {
        background: "product.light-orange",
      },
    },
    red: {
      bg: "base.danger",
      _hover: {
        background: "product.light-orange",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "yellow",
  },
});

const Input = defineStyleConfig({
  baseStyle: {
    w: "100%",
  },
  sizes: {
    sm: {},
    md: {},
  },
  variants: {
    default: {
      bg: {
        _light: "base.gray.100",
        _dark: "base.gray.500",
      },
      border: {
        _light: "base.gray.200",
        _dark: "base.gray.700",
      },
    },
    task: {
      unfinished: {},
      finished: {},
    },
  },
  defaultProps: {
    size: "md",
  },
});

const Flex = defineStyleConfig({
  variants: {},
  defaultProps: {},
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  semanticTokens,
  config,
  components: {
    Button,
  },
});
