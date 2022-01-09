import { ReactNode } from "react";
import { Box, Flex, Link, Button, Stack, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { data, error, loading } = useMeQuery();
  const [logout, { loading: logOutLoading, error: logOutError }] =
    useLogoutMutation();
  const apolloClient = useApolloClient();

  let MenuIitems = null;
  if (error) {
    MenuIitems = (
      <>
        <NextLink href={"/register"}>
          <Button mr={4}>Register</Button>
        </NextLink>
        <NextLink href={"/login"}>
          <Button>Login</Button>
        </NextLink>
      </>
    );
  }

  if (data?.me) {
    MenuIitems = (
      <>
        <Link mr={4}>{data.me.firstName}</Link>
        <Button
          isLoading={logOutLoading}
          onClick={async () => {
            await logout();
            await apolloClient.resetStore();
          }}
        >
          Logout
        </Button>
      </>
    );
  }

  return (
    <>
      <Box bg={"#ff3c1a"} px={4}>
        <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
          <NextLink href={"/"}>
            <Box fontWeight={"bold"}>TRAVEL LOG</Box>
          </NextLink>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <span onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </span>
            </Stack>
            <Box ml={10}>{MenuIitems}</Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
