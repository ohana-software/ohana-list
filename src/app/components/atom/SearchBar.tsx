import { Flex,Input,Button } from '@chakra-ui/react'
import { Plus } from './Icons'

export const SearchBar = () => {
    return(
        <Flex >
                <Input 
                placeholder='Adicione uma nova tarefa' 
                />
                <Button 
                bg='yellow.500'
                aria-label='botão adiicionar tarefa'
                color="gray.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="2"
                p="16px"
                >
                    Criar
                    <Plus />
                </Button>
            </Flex>
    )
}