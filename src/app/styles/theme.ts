import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
};

export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body:'Roboto'
    },
    colors:{
        gray:{
            "200":"#D9D9D9",
            },
        yellow:{
            "500":"#ECB62A",
            },
        },
    breakpoints
})