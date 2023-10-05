"use client";
import { Center, Flex, Grid, GridItem } from "@chakra-ui/react";
import DarkModeIcon from "./icons/DarkModeIcon";

export default function Header() {
  return (
    <Grid bg="base.gray.200" h="200px" templateColumns="repeat(4, 1fr)">
      <GridItem display="block" w="100%" />
      <GridItem w="100%" colSpan={2}>
        <Center
          fontSize="lg"
          fontWeight="900"
          letterSpacing="-2.6px"
          textAlign="center"
          h="100%"
        >
          <h1 className="title">Ohana List</h1>
        </Center>
      </GridItem>
      <GridItem w="100%">
        <Flex
          justifyContent="end"
          pt={{ base: "20px", sm: "36px" }}
          pr={{ base: "25px", sm: "41px" }}
          w="100%"
        >
          <DarkModeIcon
            w={{ base: "20px", sm: "35px" }}
            h={{ base: "20px", sm: "35px" }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
