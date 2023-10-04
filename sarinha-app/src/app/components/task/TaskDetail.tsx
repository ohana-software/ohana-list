'use client'
import { Box, Flex, Input, useStatStyles } from '@chakra-ui/react'
import TrashIcon from "../icons/TrashIcon"
import CircleIcon from "../icons/CircleIcon"
import CheckCircleIcon from '../icons/CheckCircleIcon'
import Task from "../../models/Task"
import { useTasksDispatch } from '@/app/context/TaskContext'
import { useRef, useState } from 'react'

interface Props {
  task: Task
  editMode: boolean
}
export default function TaskDetail({ task, editMode }: Props) {
  const [descriptionInput, setDescriptionInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useTasksDispatch()

  function handleDeleteTask() {
    dispatch({
      operation: 'delete',
      task: task
    }); 
  }

  function handleUpdateStatus() {
    task.finished = !task.finished;
    dispatch({
      operation: 'updateStatus',
      task: task,
    }); 
  }

  function handleUpdateTask(e: any) {
    task.description = e.target.value;
    dispatch({
      operation: 'update',
      task: task,
    }); 
  }

  async function toggleInput() {
    if (descriptionInput) return setDescriptionInput(false)

    await setDescriptionInput(true)
    inputRef.current!.focus()
  }

  let boxShadow;
  let circleIcon;
  let trashColor;
  let taskColor;
  let taskDecoration;
  let bgColor;
  if (task.finished) {
    boxShadow = undefined;
    circleIcon = (
      <CheckCircleIcon w='18px' h='18px' color='#B22D95' checkcolor='#D9D9D9' />
    );
    trashColor = '#808080';
    taskColor = '#808080'
    taskDecoration = 'line-through'
    bgColor = '#EDEDED'
  } else {
    boxShadow = '0px 2px 8px 0px rgba(0, 0, 0, 0.06)';
    circleIcon = <CircleIcon w='18px' h='18px' color='#D57B5A' />
    trashColor = '#E25858';
    taskColor = '#333'
    taskDecoration = undefined
    bgColor = '#FFF'
  }

  return (
      <Flex
        p='16px'
        gap='12px'
        bg={bgColor}
        borderRadius='8px'
        border='1px'
        borderColor='#D9D9D9'
        boxShadow={boxShadow}
        w='100%'
        pointerEvents={editMode ? undefined : 'none'}
      >
        <Flex as='button' w='24px' h='24px' p='3.273px' onClick={handleUpdateStatus}>
          { circleIcon }
        </Flex>
        <Box as='p' w='100%' fontSize='14px' fontWeight={'400'} lineHeight='19.6px' color={taskColor} textDecoration={taskDecoration} display={descriptionInput ? 'none' : 'block'} onClick={toggleInput}>{task.description ? task.description : '(Sem descrição)'}</Box>
        <Box ref={inputRef} bg={bgColor} as='input' w='100%' fontSize='14px' fontWeight={'400'} lineHeight='19.6px' color={taskColor} value={task.description} onChange={handleUpdateTask} display={descriptionInput ? 'block' : 'none'} onBlur={toggleInput}
        />

        <Flex
          as='button'
          w='24px'
          h='24px'
          p='5px 5.522px 5px 6px'
          justifyContent='center'
          alignItems='center'
          onClick={handleDeleteTask}>
          <TrashIcon width="13px" height="14px" color={trashColor}/>
        </Flex>
      </Flex>
  )
}