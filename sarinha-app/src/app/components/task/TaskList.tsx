import { Box, Center, Flex } from "@chakra-ui/react";
import TaskDetail from "./TaskDetail";
import Task from "../../models/Task";
import ClipboardIcon from "../icons/ClipboardIcon";
import { ArrowBackIcon, CheckCircleIcon } from "@chakra-ui/icons";
import TrashIcon from "../icons/TrashIcon";
import { useRef, useState } from "react";
import CircleIcon from "../icons/CircleIcon";
import TaskMenu from "./TaskMenu";
import { useTasksDispatch } from "@/app/context/TaskContext";

interface Props {
  display: string;
  tasks: Task[];
}
export default function TaskList({ display, tasks }: Props) {
  const [options, setOptions] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const optionsRef = useRef<HTMLInputElement>(null);
  const finishedTasks = tasks.filter((task) => task.finished == true);
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
            <Flex key={task.id} gap="5px" alignItems="center">
              <CircleIcon
                cursor="pointer"
                as="button"
                display={
                  !isTaskSelected(task.id) && !editMode ? "block" : "none"
                }
                onClick={() => handleSelectTask(task.id)}
                color="#333"
                width="20px"
                height="20px"
              />
              <CheckCircleIcon
                cursor="pointer"
                display={
                  isTaskSelected(task.id) && !editMode ? "block" : "none"
                }
                onClick={() => handleUnselectTask(task.id)}
                color="#333"
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
            color="#333"
            fontSize="14px"
            justifyContent="space-between"
          >
            <Box fontWeight={"700"}>
              {selectedTasks.length} de {tasks.length} selecionadas
            </Box>
            <Flex alignItems="center" gap="10px">
              <Box as="button" onClick={toggleDeleteMultiple} color="#808080">
                <ArrowBackIcon />
                Voltar às opções
              </Box>
              <Flex
                onClick={handleDeleteTasks}
                as="button"
                borderRadius="8px"
                alignItems="center"
                gap="5px"
                _hover={{ opacity: "74%" }}
                p="10px"
                fontWeight={"700"}
                fontSize="14px"
                bg="#E25858"
                color="white"
              >
                Deletar
                <TrashIcon />
              </Flex>
            </Flex>
          </Flex>
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

  return (
    <Flex
      w="90%"
      maxWidth="736px"
      m="0 auto"
      mt="64px"
      gap="24px"
      flexDirection="column"
      display={display}
    >
      <Flex
        justifyContent="space-between"
        width="100%"
        fontSize="14px"
        fontWeight={"700"}
      >
        <Flex color="#D57B5A" gap="8px">
          Tarefas criadas
          <Box
            p="2px 8px"
            fontSize="12px"
            borderRadius="999px"
            bg="#D9D9D9"
            color="#333"
          >
            {tasks.length}
          </Box>
        </Flex>
        <Flex color="#BF477E" gap="8px">
          Concluídas
          <Box
            p="2px 8px"
            fontSize="12px"
            borderRadius="999px"
            bg="#D9D9D9"
            color="#333"
          >
            {finishedTasks.length > 0
              ? `${finishedTasks.length} de ${tasks.length}`
              : 0}
          </Box>
        </Flex>
      </Flex>
      {dashboard}
    </Flex>
  );
}
