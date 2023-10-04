import { Flex,Input,Button, useColorModeValue } from '@chakra-ui/react'
import { Plus } from './Icons'

export const SearchBar = () => {

    const bgSearchBar = useColorModeValue('gray.100', 'gray.500')
    const bcSearchBar = useColorModeValue('gray.200', 'gray.700')

    return(
        <Flex
        gap="2"
        position="absolute"
        left="50%"
        top="100%"
        transform="translate(-50%, -50%);"
        flexDirection={{base:"column",md:"row"}}
        >
                <Input 
                placeholder='Adicione uma nova tarefa'
                borderRadius="8px"
                border="1px solid"
                borderColor={bcSearchBar}
                bg={bgSearchBar} 
                p="16px"
                h="100%"
                minW={{base:"-moz-max-content",lg:"44.306vw"}}
                />
                <Button 
                    display="flex"
                    p="16px"
                    alignItems="center"
                    justifyContent="center"
                    gap="2"
                    borderRadius="8px"
                    bg='yellow.500'
                    aria-label='botão adiicionar tarefa'
                    color="gray.100"
                    h="100%"
                    minW={{lg:"90px"}}
                >
                    Criar
                    <Plus />
            </Button>
        </Flex>
    )
}