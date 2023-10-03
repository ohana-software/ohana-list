import { extendTheme,type ThemeConfig } from "@chakra-ui/react";

const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
};
const boxSizing = {
    borderBox:"border-box;"
};

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body:'Roboto'
    },
    colors:{
        gray:{
            "200":"#D9D9D9",
            "500":"#262626",
            "700":"#0D0D0D",
            },
        yellow:{
            "500":"#ECB62A",
            },
        },
    breakpoints,
    boxSizing:{
        boxSizing:"border-box"
    },
    config
})