import { Box, useColorMode, UnorderedList, Textarea, ListItem, IconButton, Checkbox, Button } from '@chakra-ui/react'
import { PadUnlock, Padlock, Trash,CheckIco } from './Icons';
import { useContext, useState } from 'react'
import { CountContext } from '../Contexts/CrudContex'

const LisTask = () => {
    const { task, setTasks,isChecked,setIsChecked } = useContext(CountContext)

    const { colorMode } = useColorMode()

    const [editIcons, setEditIcons] = useState(Array(task.length).fill(false));

    const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

    function Delete(index: number) {
        setTasks(task.filter((list) => list.id !== index))
    }

    function DeleteSelectedTasks() {

    const newTasks = task.filter((_, index) => !selectedTasks.includes(index));
    
    setTasks(newTasks);
    
    setSelectedTasks([]);
}

    function EditTask(index: number) {
        const newEditIcons = [...editIcons];
        newEditIcons[index] = !newEditIcons[index];
        setEditIcons(newEditIcons);
        
        if (selectedTasks.includes(index)) {
            setSelectedTasks(selectedTasks.filter((taskIndex) => taskIndex !== index));
        } else {
            setSelectedTasks([...selectedTasks, index]);
        }
    }


    function checkButton(index:number) {
            setIsChecked((prevChecked) => {
            const newChecked = [...prevChecked];
            newChecked[index] = !newChecked[index];
            return newChecked;
            });
    }



    const modeColor = colorMode === 'light' ? 'gray.400' : 'gray.100';
    const bgColorTextArea = colorMode === 'light' ? 'gray.100' : 'gray.600';

    return (
    <>
        <UnorderedList
            w={{base:"90%",md:"51.112%"}}
            h="50vh"
            listStyleType="none"
            overflowX="hidden"
            display="flex"
            flexDirection="column"
            gap="3"
        >
            {task.map((list, index) => (
                <ListItem
                    key={list.id}
                    display="flex"
                    alignItems="center"
                    p="16px"
                    gap="3"
                    borderRadius="8px"
                    border="1px"
                    borderColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
                    bg={colorMode === 'light' ? 'gray.200' : 'gray.400'}
                    boxShadow="0px 2px 8px 0px rgba(0, 0, 0, 0.06)"
                    w="100%"
                    h={{ base: "36px", md: "72px" }}
                >
                <Box
                        as="label"
                        htmlFor={`checkbox-${index}`}
                        w="1.125em"
                        h="1.125em"
                        borderRadius="64px"
                        border={isChecked[index] ? "1px solid #B22D95" :"1px solid #D57B5A"}
                        position="relative"
                        transition="background-color 0.3s ease-in-out"
                        bg={isChecked[index] ? 'pink.Dark' : 'transparent'} 
                        cursor="pointer"
                    >
                    <Checkbox
                        name={`checkbox-${index}`}
                        id={`checkbox-${index}`}
                        isChecked={isChecked[index]}
                        onChange={() => checkButton(index)}
                        visibility='hidden'
                        >
                        </Checkbox>
                        {isChecked[index] && (

                            <CheckIco />

                        )}
                </Box>
                    <IconButton
                        icon={editIcons[index] == true ? <PadUnlock  /> : <Padlock />}
                        onClick={() => EditTask(index)}
                        _hover={{bg:"orange.Light"}}
                        aria-label='EditButton'
                        bg="transparent"
                    />
                    <Textarea
                        isReadOnly={editIcons[index] == true ? false : true} 
                        w="100%"
                        rows={2}
                        p="0"
                        lineHeight="140%"
                        bg={editIcons[index] == true ? bgColorTextArea  : 'transparent'}
                        fontSize="14"
                        border="none"
                        resize="none"
                        color={isChecked[index] ? 'gray.300' : modeColor}
                        textDecoration={isChecked[index] ? 'line-through' : 'none'}
                    >
                        {list.text}
                    </Textarea>
                    <IconButton
                        icon={<Trash />}
                        onClick={() => Delete(list.id)}
                        _hover={{bg:"red.200"}}
                        aria-label='DeleteButton'
                        bg="transparent"
                    />
                </ListItem>
            ))}
        </UnorderedList>
        <Button
            onClick={DeleteSelectedTasks}
            color={colorMode === 'light' ? 'red.400' : "red.200"}
            bg="transparent"
            _hover={{background:"red.500",color:"red.900"}}
            marginTop="8px"
        >
            Excluir Tarefas Abertas
        </Button>
    </>
    );
};

export default LisTask;
