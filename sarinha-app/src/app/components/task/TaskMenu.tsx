import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";
import { Flex, Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import TrashIcon from "../icons/TrashIcon";

type Props = {
  display: boolean;
  toggle: () => void;
}
export default function TaskMenu({ display, toggle }: Props) {
  return (
    <Flex display={display ? 'flex' : 'none'}>
    <Menu>
      <MenuButton
        fontSize='14px'
        fontWeight={"700"}
         _hover={{bgColor: '#ECB62A', color: 'white'}}
         _active={{bgColor: '#ECB62A', color: 'white'}} bgColor='#D9D9D9'
         color='#333'
         as={Button}
         rightIcon={<ChevronDownIcon />}>
          Opções
      </MenuButton>
      <MenuList bgColor='#ECB62A'>
        <MenuItem
          as={Flex}
          gap='6px'
          bgColor='#ECB62A'
          color='white'
          _hover={{bgColor: '#D57B5A', color: 'white', cursor: 'pointer'}}
          fontSize='14px'
          fontWeight={"700"}>
            Download<DownloadIcon /></MenuItem>
        <MenuItem 
          as={Flex}
          onClick={toggle}
          gap='6px'
          bgColor='#ECB62A'
          color='white'
          _hover={{bgColor: '#D57B5A', color: 'white', cursor: 'pointer'}}
          fontSize='14px'
          fontWeight={"700"}>
            Deletar várias<TrashIcon /></MenuItem>
      </MenuList>
    </Menu>
  </Flex>
  )
}