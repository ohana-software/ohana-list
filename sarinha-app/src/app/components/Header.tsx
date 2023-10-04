"use client";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import DarkModeIcon from "./icons/DarkModeIcon";
import MobileMenu from "./MobileMenu";

/*export default function Header() {
  return (
    <Center
      bg="base.gray.200"
      h="200px"
      fontSize="lg"
      fontWeight={"900"}
      letterSpacing="-2.6px"
      textAlign="center"
    >
      <h1 className="title">Ohana List</h1>
    </Center>
  );
}*/

export default function Header() {
  return (
    <Grid
      bg="base.gray.200"
      h="200px"
      gridTemplateRows={{ base: "auto 1fr", sm: "auto" }}
      templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(4, 1fr)" }}
    >
      <MobileMenu />
      <GridItem display={{ base: "none", sm: "block" }} w="100%" />
      <GridItem w="100%" minW="178px" colSpan={2}>
        <Center
          fontSize="lg"
          fontWeight={"900"}
          letterSpacing="-2.6px"
          textAlign="center"
          h="100%"
        >
          <h1 className="title">Ohana List</h1>
        </Center>
      </GridItem>
      <GridItem w="100%" display={{ base: "none", sm: "block" }}>
        <Flex
          justifyContent="end"
          pt={{ base: "10px", md: "36px" }}
          pr={{ base: "15px", md: "41px" }}
        >
          <DarkModeIcon
            w={{ base: "20px", md: "35px" }}
            h={{ base: "20px", md: "35px" }}
          />
        </Flex>
      </GridItem>
    </Grid>
  );
}
