import { Flex,Input,Button } from '@chakra-ui/react'
import { Plus } from './Icons'

export const SearchBar = () => {
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
                borderColor="gray.200"
                bg="gray.100" 
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