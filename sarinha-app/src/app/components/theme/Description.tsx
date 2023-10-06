"use client";
import { Box, useStyleConfig } from "@chakra-ui/react";

export default function Description(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("Description", { variant });

  return <Box as="p" __css={styles} {...rest} />;
}
