"use client";
import {Box,useColorMode,UnorderedList,Textarea,ListItem,IconButton, Checkbox} from '@chakra-ui/react'
import { Edit, Trash } from './Icons';
import { useContext, useState } from 'react'
import { CountContext } from '../Contexts/CrudContex'



const LisTask = () => {
    const {task,setTasks,isChecked,setIsChecked} =useContext(CountContext) 
    const { colorMode } = useColorMode()
    const [edit,setEdits] = useState(true)

    function Delete(index:number){
        setTasks(task.filter((list) => list.id !== index))
    }

    function EditTask(){
        if(edit == true){
            setEdits(false)
        }
        else{
            setEdits(true)
        }
    }
    const modeColor = colorMode === 'light' ? 'gray.400' : 'gray.100'
    

    return (
        <UnorderedList
            w="51.112%"
            h="50vh"
            listStyleType="none"
            overflowX="hidden"
            display="flex"
            flexDirection="column"
            gap="3"
        >
            {task.map((list) => (
                <ListItem 
                    key={list.id}
                    display="flex"
                    alignItems="flex-start"
                    p="16px"
                    gap="3"
                    borderRadius="8px"
                    border="1px"
                    borderColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
                    bg={ colorMode === 'light' ? 'gray.200' : 'gray.400'}
                    boxShadow="0px 2px 8px 0px rgba(0, 0, 0, 0.06)"
                    w="100%"
                    h={{base:"36px",md:"72px"}}
                >
                    <Checkbox
                    position="relative"

                    display="block"
                    isChecked={isChecked}
                    onChange={()=>{setIsChecked(!isChecked)}}
                    >
                        <Box
                            as="div"
                            w="18px"
                            h="18px"
                            borderRadius="32px"
                            border="1px solid #D57B5A"
                            position="absolute"
                            overflowX="hidden"
                            overflowY="hidden"
                            top="0"
                            left="0"
                        >
                        </Box>
                    </Checkbox>

                        <IconButton
                        icon={<Edit />}
                        onClick={EditTask} 
                        aria-label='EditButton'/>
                        <Textarea
                        isReadOnly={edit}
                        w="100%"
                        rows={2}
                        p="0"
                        lineHeight="140%"
                        fontSize="14px"
                        border="none"
                        resize="none"
                        color={isChecked === true ? 'gray.300' : modeColor }
                        textDecoration={isChecked === true ? 'line-through' : 'none'}
                        >
                            {list.text}
                        </Textarea>
                        <IconButton
                        icon={<Trash />}
                        onClick={() => Delete(list.id)} 
                        aria-label='DeleteButton'/>
                    </ListItem> 
            ))}
        </UnorderedList>
        );
    };

export default LisTask;
