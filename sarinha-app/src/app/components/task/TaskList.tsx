"use client";

import { CheckCircleIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Flex, Button, Center, Box } from "@chakra-ui/react";
import CircleIcon from "../icons/CircleIcon";
import ClipboardIcon from "../icons/ClipboardIcon";
import TrashIcon from "../icons/TrashIcon";
import TaskDetail from "./TaskDetail";
import TaskMenu from "./TaskMenu";
import { useTasksDispatch } from "@/app/context/TaskContext";
import { useState, useRef } from "react";
import Task from "@/app/models/Task";

type Props = {
  tasks: Task[];
};
export default function TaskList({ tasks }: Props) {
  const [options, setOptions] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const optionsRef = useRef<HTMLInputElement>(null);
  const dispatch = useTasksDispatch();

  function toggleDeleteMultiple() {
    if (options) {
      setOptions(false);
      setEditMode(true);
      setSelectedTasks([]);
      return;
    }

    setOptions(true);
    setEditMode(false);
  }

  async function handleDeleteTasks() {
    await dispatch({
      operation: "deleteMultiple",
      ids: selectedTasks,
    });

    toggleDeleteMultiple();
  }

  function handleSelectTask(id: number) {
    setSelectedTasks([...selectedTasks, id]);
  }

  function handleSelectAllTasks() {
    setSelectedTasks(tasks.map((task) => task.id));
  }

  function handleUnselectAllTasks() {
    setSelectedTasks([]);
  }

  function handleUnselectTask(id: number) {
    setSelectedTasks(selectedTasks.filter((taskId) => taskId != id));
  }

  const isTaskSelected = (id: number) => {
    return selectedTasks.includes(id);
  };

  let dashboard;

  if (tasks.length > 0) {
    dashboard = (
      <>
        <Flex flexDirection="column" gap="14px">
          {tasks.map((task) => (
            <Flex key={task.id} gap="8px" alignItems="center">
              <CircleIcon
                cursor="pointer"
                as="button"
                display={
                  !isTaskSelected(task.id) && !editMode ? "block" : "none"
                }
                onClick={() => handleSelectTask(task.id)}
                width="20px"
                height="20px"
              />
              <CheckCircleIcon
                cursor="pointer"
                display={
                  isTaskSelected(task.id) && !editMode ? "block" : "none"
                }
                onClick={() => handleUnselectTask(task.id)}
                width="20px"
                height="20px"
              />
              <TaskDetail task={task} editMode={editMode} />
            </Flex>
          ))}
          <Flex
            display={options ? "flex" : "none"}
            ref={optionsRef}
            alignItems="center"
            fontSize="sm"
            gap="8px"
            justifyContent="space-between"
          >
            <Flex
              gap="10px"
              flexDirection={{ base: "column", sm: "row" }}
              fontSize={{ base: "xs", sm: "sm" }}
            >
              <CircleIcon
                cursor="pointer"
                as="button"
                display={selectedTasks.length < tasks.length ? "block" : "none"}
                onClick={handleSelectAllTasks}
                width="20px"
                height="20px"
              />
              <CheckCircleIcon
                cursor="pointer"
                display={selectedTasks.length < tasks.length ? "none" : "block"}
                onClick={handleUnselectAllTasks}
                width="20px"
                height="20px"
              />
              <Box fontWeight="bold">
                {selectedTasks.length} de {tasks.length} selecionadas
              </Box>
            </Flex>
            <Flex>
              <Button variant="red" onClick={handleDeleteTasks}>
                Deletar
                <TrashIcon w="16px" h="16px" />
              </Button>
            </Flex>
          </Flex>
          <Box
            as="button"
            alignItems="center"
            fontSize="sm"
            display={options ? "flex" : "none"}
            alignSelf="center"
            onClick={toggleDeleteMultiple}
          >
            <ArrowBackIcon />
            Voltar às opções
          </Box>
        </Flex>
        <TaskMenu display={!options} toggle={toggleDeleteMultiple} />
      </>
    );
  } else {
    dashboard = (
      <Center
        textAlign="center"
        p="64px 24px"
        fontSize="16px"
        color="#808080"
        borderRadius="8px"
        borderTop="1px"
        borderColor="#333"
      >
        <Flex flexDirection="column" alignItems="center" gap="16px">
          <ClipboardIcon w="56px" h="56px" />
          <Box as="p" lineHeight="22.4px">
            <Box as="span" fontWeight={"700"}>
              Você ainda não tem tarefas cadastradas
            </Box>
            <br />
            <Box as="span" fontWeight={"400"}>
              Crie tarefas e organize seus itens a fazer
            </Box>
          </Box>
        </Flex>
      </Center>
    );
  }

  return dashboard;
}
