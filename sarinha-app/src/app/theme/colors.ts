export const colors = {
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

export const semanticTokens = {
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
    customInput: {
      border: {
        _light: "base.gray.200",
        _dark: "base.gray.700",
      },
      bg: { _light: "base.gray.100", _dark: "base.gray.500" },
    },
    task: {
      container: {
        unfinished: {
          bg: {
            _light: "#FFF",
            _dark: "base.gray.500",
          },
          borderColor: {
            _light: "base.gray.200",
            _dark: "base.gray.400",
          },
        },
        finished: {
          bg: {
            _light: "#EDEDED",
            _dark: "base.gray.500",
          },
          borderColor: {
            _light: "base.gray.200",
            _dark: "base.gray.500",
          },
        },
      },
      finished: {
        color: {
          _light: "base.gray.400",
          _dark: "base.gray.100",
        },
      },
    },
  },
};
