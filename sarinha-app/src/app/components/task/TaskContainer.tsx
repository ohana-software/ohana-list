"use client";
import { Box, useStyleConfig } from "@chakra-ui/react";

export default function TaskContainer(props: any) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig("TaskContainer", { variant });

  return <Box __css={styles} {...rest} />;
}
