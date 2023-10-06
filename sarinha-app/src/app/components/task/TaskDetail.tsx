"use client";
import { Flex, Input } from "@chakra-ui/react";
import TrashIcon from "../icons/TrashIcon";
import CircleIcon from "../icons/CircleIcon";
import CheckCircleIcon from "../icons/CheckCircleIcon";
import Task from "../../models/Task";
import { useTasksDispatch } from "@/app/context/TaskContext";
import { useRef, useState } from "react";
import TaskContainer from "./TaskContainer";
import Description from "../theme/Description";

interface Props {
  task: Task;
  editMode: boolean;
}
export default function TaskDetail({ task, editMode }: Props) {
  const [inputActive, setinputActive] = useState(false);
  const inputRef = useRef<any>(null);
  const dispatch = useTasksDispatch();
  const variant = task.finished ? "finished" : "unfinished";

  function handleDeleteTask() {
    dispatch({
      operation: "delete",
      task: task,
    });
  }

  function handleUpdateStatus() {
    task.finished = !task.finished;
    dispatch({
      operation: "updateStatus",
      task: task,
    });
  }

  function handleUpdateTask(e: any) {
    task.description = e.target.value;
    dispatch({
      operation: "update",
      task: task,
    });
  }

  async function toggleInput(e: any) {
    console.log(inputRef);
    if (inputActive) return setinputActive(false);

    await setinputActive(true);
    inputRef.current!.focus();
  }

  let circleIcon;
  if (task.finished) {
    circleIcon = (
      <CheckCircleIcon w="18px" h="18px" color="#B22D95" checkcolor="#D9D9D9" />
    );
  } else {
    circleIcon = <CircleIcon w="18px" h="18px" color="#D57B5A" />;
  }

  return (
    <TaskContainer
      variant={variant}
      pointerEvents={editMode ? undefined : "none"}
    >
      <Flex
        as="button"
        w="24px"
        h="24px"
        p="3.273px"
        onClick={handleUpdateStatus}
      >
        {circleIcon}
      </Flex>

      <Description
        as="p"
        display={inputActive ? "none" : "block"}
        variant={variant}
        onClick={toggleInput}
      >
        {task.description}
      </Description>

      <Input
        display={inputActive ? "block" : "none"}
        ref={inputRef}
        value={task.description}
        onChange={handleUpdateTask}
        onBlur={toggleInput}
      />

      <Flex
        as="button"
        w="24px"
        h="24px"
        p="5px 5.522px 5px 6px"
        justifyContent="center"
        alignItems="center"
        onClick={handleDeleteTask}
      >
        <TrashIcon
          width="13px"
          height="14px"
          color={task.finished ? "base.gray.300" : "product.danger"}
        />
      </Flex>
    </TaskContainer>
  );
}
