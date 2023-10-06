import { Box, Image, Heading, Text } from "@chakra-ui/react";

export  const EmptyTask = ()=> {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            padding="64px 24px"
            gap="4"
            borderTop="1px"
            borderColor="gray.400"
            borderRadius="8px"
            w="51.112%"
        >
            <Image src={"/clipboard.svg"} alt="icone_anotacoes" boxSize="64px" />
                <Box as="span"  mt="2">
                    <Text fontWeight="bold" color="gray.300">
                        Você ainda não tem tarefas cadastrada
                    </Text>
                    <Text color="gray.300">
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </Box>
        </Box>
    );
}