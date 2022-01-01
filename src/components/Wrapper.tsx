import { Box } from "@chakra-ui/react";
import React from "react";

interface Props {
  variant?: "regular" | "small";
}

const Wrapper: React.FC<Props> = ({ children, variant = "regular" }) => {
  return (
    <Box
      mx={"auto"}
      maxW={variant === "regular" ? "800px" : "400px"}
      w={"100%"}
    >
      {children}
    </Box>
  );
};
export default Wrapper;
