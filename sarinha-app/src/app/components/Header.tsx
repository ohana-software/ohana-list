"use client";
import { Center, Flex, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import DarkModeIcon from "./icons/DarkModeIcon";
import LightModeIcon from "./icons/LightModeIcon";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Grid bg="headerBg" h="200px" templateColumns="repeat(4, 1fr)">
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
            cursor="pointer"
            color="headerIcon"
            onClick={toggleColorMode}
            display={colorMode === "light" ? "block" : "none"}
          />
          <LightModeIcon
            w={{ base: "20px", sm: "35px" }}
            h={{ base: "20px", sm: "35px" }}
            cursor="pointer"
            onClick={toggleColorMode}
            display={colorMode === "dark" ? "block" : "none"}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
