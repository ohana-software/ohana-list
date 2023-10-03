"use client";
import {IconButton, useColorMode } from '@chakra-ui/react'
import { Moon,Sun } from '../atom/Icons'


export const BtnTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <>
            <IconButton 
                colorScheme="transparent"
                aria-label='botão mudar tema'
                icon={colorMode === 'light'? <Moon /> : <Sun />}
                position="absolute"
                right="0"
                top="0"
                margin={{base:"20px 18px 0 0",md:"36px 22px 0 0", lg:"41px 36px 0 0"}}
                w={{base:"5vh",md:"35px",lg:"35px"}} 
                onClick={toggleColorMode}
            />
        </>
    )
}