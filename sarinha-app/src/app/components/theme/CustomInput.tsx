"use client";
import { Box, useStyleConfig } from "@chakra-ui/react";

export default function CustomInput(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("CustomInput", { variant });

  return <Box as="input" __css={styles} {...rest} />;
}
