"use client";

import { Flex } from "@chakra-ui/react";
import DarkModeIcon from "./icons/DarkModeIcon";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function MobileMenu() {
  return (
    <Flex
      display={{ base: "flex", sm: "none" }}
      justifyContent="space-between"
      bg="product.dark-pink"
      color="white"
      p="20px"
    >
      <HamburgerIcon cursor="pointer" w="20px" h="20px" />
      <DarkModeIcon cursor="pointer" w="20px" h="20px" />
    </Flex>
  );
}
