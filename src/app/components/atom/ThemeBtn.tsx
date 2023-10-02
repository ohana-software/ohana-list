import {IconButton,Heading } from '@chakra-ui/react'
import { Moon } from '../atom/Icons'


export const BtnTheme = () => {

    return(
            <IconButton 
                colorScheme="transparent"
                aria-label='botão mudar tema'
                icon={<Moon />}
                position="absolute"
                right="0"
                top="0"
                margin={{base:"20px 18px 0 0",md:"36px 22px 0 0", lg:"41px 36px 0 0"}}
                w={{base:"5vh",md:"35px",lg:"35px"}} 
            />
    )
}