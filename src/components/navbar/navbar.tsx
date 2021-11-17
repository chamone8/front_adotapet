import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsGrid3X3GapFill, BsList, IoIosLogIn } from "react-icons/all";
import "./navbar.css";
import imgLogo from "../../assets/logo.jpg";

// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Header = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg="teal.500"
        color="white"
        {...props}
      >
        <Flex align="right" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Chakra UI
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {/* <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text> */}
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          {/* <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button> */}
          <span className="iconMenu">
            <BsList />
          </span>
        </Box>
        {/* <span className="iconLogin"><IoIosLogIn /></span> */}
      </Flex>
      <img className="imgLogo" src={imgLogo}></img>
    </div>
  );
};

export default Header;
