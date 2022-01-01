import { useColorMode, Switch } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      position="fixed"
      bottom="1rem"
      right="1rem"
      color="green"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    />
  );
};
