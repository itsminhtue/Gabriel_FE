import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/bonglua.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justify={"space-between"} width={"100%"} p={4}>
      <HStack>
        <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />
        <Text>Navigation Bar</Text>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
