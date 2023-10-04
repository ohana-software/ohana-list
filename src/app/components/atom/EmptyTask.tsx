import { Box, Image, Heading, Text } from "@chakra-ui/react";

export  const EmptyTask = ()=> {
    return (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        padding="4"
        border="1px solid #E2E8F0"
        borderRadius="md"
        backgroundColor="white"
        boxShadow="sm"
    >
        <Image src={"/clipboard.svg"} alt="icone_anotacoes" boxSize="64px" />
            <Heading as="h3" size="md" mt="2">
                Você ainda não tem tarefas cadastradas
            </Heading>
        <Text>Crie tarefas e organize seus itens a fazer</Text>
    </Box>
);
}