import { extendTheme } from "@chakra-ui/react";
import { colors, semanticTokens } from "./colors";
import { fontSizes, fontWeights } from "./fonts";
import { Button, CustomInput, Description, TaskContainer } from "./components";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  semanticTokens,
  config,
  components: {
    Button,
    Description,
    TaskContainer,
    CustomInput,
  },
});
