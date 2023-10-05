"use client";
import { Box,Heading,Image } from '@chakra-ui/react'
import { EditIcon, SunIcon } from '@chakra-ui/icons';

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
export const Trash = () => {
    return(
        <Image 
        src="/trash.svg" 
        alt='Lixeira Iconer icone' 
        />
    )
}
export const Edit = () => {
    return(
        <EditIcon 
        aria-label='EditIcon icone' 
        />
    )
}

export const Sun = () => {
    return(
        <SunIcon w="35px" h="35px" aria-label='Sol icone'/>
    )
}