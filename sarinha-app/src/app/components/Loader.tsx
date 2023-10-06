import { Box, Center, Flex, Spinner } from "@chakra-ui/react";

type Props = {
  loading: boolean;
};
export default function Loader() {
  return (
    <Center textAlign="center" p="100px" fontSize="md" color="base.gray.300">
      <Flex flexDirection="column" alignItems="center" gap="16px">
        <Spinner w="56px" h="56px" />
        <Box as="p" lineHeight="22.4px">
          <Box as="span" fontWeight="bold">
            Aguarde
          </Box>
          <br />
          <Box as="span" fontWeight="regular">
            Carregando informações...
          </Box>
        </Box>
      </Flex>
    </Center>
  );
}
