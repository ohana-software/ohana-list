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
        heading: 'Inter,Roboto',
        body:'Inter,Roboto'
    },

    colors:{
        white:{
            "500":"#FFFFFF",
            "600":"#F2F2F2",
            "700":"#E6E6E6",
            "800":"#D9D9D9",
            "900":"#CCCCCC",
        },
        gray:{
            "200":"#D9D9D9",
            "300":"#808080",
            "400":"#333333",
            "500":"#262626",
            "600":"#1A1A1A",
            "700":"#0D0D0D",
            },
        yellow:{
            "500":"#ECB62A",
            },
        orange:{
                "Light":"#D57B5A",
            },
        pink:{
            "25":"#BF477E",
            "Dark":"#B22D95"
        },
        },
    breakpoints,

    boxSizing:{
        boxSizing:"border-box"
    },

    config
})