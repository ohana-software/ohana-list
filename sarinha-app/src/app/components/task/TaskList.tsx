import { Flex } from "@chakra-ui/react";
import Task from "./Task";


export default function Tasklist() {
  return (
    <Flex
      flexDirection='column'
      gap='14px'
    >
      <Task finished={false}/>
      <Task finished={true}/>
    </Flex>
  )
}