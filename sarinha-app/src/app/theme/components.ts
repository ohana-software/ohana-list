import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  baseStyle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "base.gray.100",
    borderRadius: "8px",
    fontSize: "sm",
    fontWeight: "bold",
    transition: "0.2s",
    p: "16px",
  },
  sizes: {
    md: {
      fontSize: "sm",
    },
  },
  variants: {
    yellow: {
      bg: "product.yellow-button",
      _hover: {
        background: "product.light-orange",
      },
    },
    red: {
      bg: "base.danger",
      _hover: {
        background: "product.light-orange",
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "yellow",
  },
});

export const Description = defineStyleConfig({
  baseStyle: {
    w: "100%",
    fontWeight: "regular",
    overflowWrap: "anywhere",
  },
  variants: {
    unfinishedTask: {
      bg: "task.container.unfinished.bg",
      color: "task.unfinished.color",
      textDecoration: undefined,
    },
    finishedTask: {
      color: "base.gray.300",
      bg: "task.container.finished.bg",
      textDecoration: "line-through",
    },
  },
});

export const CustomInput = defineStyleConfig({
  baseStyle: {
    w: "100%",
    fontWeight: "regular",
    _placeholder: { color: "base.gray.300" },
    _focus: { outline: "none", borderColor: "product.dark-pink" },
    border: "1px",
    borderRadius: "8px",
    borderColor: "customInput.border",
    fontSize: "md",
    p: "16px",
    bg: "customInput.bg",
  },
});

export const TaskContainer = defineStyleConfig({
  baseStyle: {
    p: "16px",
    gap: "12px",
    w: "100%",
    display: "flex",
    borderRadius: "8px",
  },
  variants: {
    unfinished: {
      boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.06)",
      bg: "task.container.unfinished.bg",
      border: "1px",
      borderColor: "task.container.unfinished.borderColor",
    },
    finished: {
      boxShadow: undefined,
      bg: "task.container.finished.bg",
      border: "1px",
      borderColor: "task.container.finished.borderColor",
    },
  },
});
