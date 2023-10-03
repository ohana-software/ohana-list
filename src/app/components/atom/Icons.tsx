"use client";
import { Box,Heading,Image } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons';

export const Moon = () => {
    return(
        <Image 
        src="/luaIcon.svg" 
        alt='Lua Icon' 
        />
    )
}
export const Plus = () => {
    return(
        <Image 
        src="/plus.svg" 
        alt='adicionar icone' 
        />
    )
}

export const Sun = () => {
    return(
        <SunIcon w="35px" h="35px"/>
    )
}