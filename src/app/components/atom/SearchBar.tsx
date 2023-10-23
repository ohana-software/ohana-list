import { Flex,Input,Button, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { Plus } from './Icons'
import { useContext } from 'react'
import { CountContext } from '../Contexts/CrudContex'


export const SearchBar = () => {
    const bgSearchBar = useColorModeValue('gray.100', 'gray.500')
    const bcSearchBar = useColorModeValue('gray.200', 'gray.700')
    const cPlace = useColorModeValue('gray.200', 'gray.300')

    const { colorMode } = useColorMode()

    const {textInput,setTextInput,setTasks} =useContext(CountContext)

    function CreateTask(){
        if(textInput !== ""){
            setTasks((prev) => {
                return [...prev, {id:Math.random(),text:textInput,isChecked:false}]
            })
            setTextInput("")
        }
        else
        {
            alert("Digite algo")
        }
    }

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
                value={textInput}
                onChange={(e) =>{setTextInput(e.target.value)}}
                placeholder='Adicione uma nova tarefa'
                _placeholder={{ color: cPlace }}
                borderRadius="8px"
                border="1px solid"
                borderColor={bcSearchBar}
                bg={bgSearchBar} 
                p="16px"
                h="100%"
                minW={{base:"-moz-max-content",lg:"44.306vw"}}
                />
                <Button 
                    onClick={CreateTask}
                    display="flex"
                    p="16px"
                    alignItems="center"
                    justifyContent="center"
                    gap="2"
                    borderRadius="8px"
                    bg='yellow.500'
                    _hover={colorMode ==='light'? {background:"green.200"} : {background:"whiteAlpha.300"}}
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