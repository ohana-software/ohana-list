import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import TrashIcon from "../icons/TrashIcon";
import exportExcel from "@/app/util/exportExcel";
import { useTasks } from "@/app/context/TaskContext";

type Props = {
  display: boolean;
  toggle: () => void;
};
export default function TaskMenu({ display, toggle }: Props) {
  const tasks = useTasks();

  return (
    <Flex display={display ? "flex" : "none"}>
      <Menu>
        <MenuButton as={Button}>
          Opções <ChevronDownIcon w="20px" h="20px" />
        </MenuButton>
        <MenuList bgColor="#ECB62A">
          <MenuItem
            as={Flex}
            gap="6px"
            bgColor="product.yellow-button"
            color="white"
            _hover={{
              bgColor: "product.light-orange",
              color: "white",
              cursor: "pointer",
            }}
            fontSize="14px"
            fontWeight={"700"}
            onClick={() => exportExcel(tasks, "Tarefas")}
          >
            Download
            <DownloadIcon />
          </MenuItem>
          <MenuItem
            as={Flex}
            onClick={toggle}
            gap="6px"
            bgColor="product.yellow-button"
            color="white"
            _hover={{
              bgColor: "product.light-orange",
              color: "white",
              cursor: "pointer",
            }}
            fontSize="14px"
            fontWeight={"700"}
          >
            Deletar várias
            <TrashIcon />
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
