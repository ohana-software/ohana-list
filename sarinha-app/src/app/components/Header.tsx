"use client";
import { Center } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center
      bg="base.gray.200"
      h="200px"
      fontSize="lg"
      fontWeight={"900"}
      letterSpacing="-2.6px"
    >
      <h1 className="title">Ohana List</h1>
    </Center>
  );
}
