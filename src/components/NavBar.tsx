import {
  Button,
  HStack,
  Image,
  Menu,
  MenuItem,
  Portal,
  Text,
  Input,
  InputGroup,
  Kbd,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import logo from "../assets/bonglua.png";
import platforms from "./data/platforms";
import { useState } from "react";

interface NavBarProps {
  onSelectPlatform: (platformSlug: string) => void;
  onSearch: (search: string) => void;
}

const NavBar = ({ onSelectPlatform, onSearch }: NavBarProps) => {
  const [selectedPlatformName, setSelectedPlatformName] = useState<string>(""); // tên platform
  const [searchValue, setSearchValue] = useState(""); // text search

  const handleSelect = (slug: string, name: string) => {
    setSelectedPlatformName(name);
    onSelectPlatform(slug);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <HStack justify={"space-between"} width={"100%"} p={4}>
      <HStack gap={4}>
        {/* Logo */}
        <Image src={logo} alt="Logo" boxSize={"60px"} objectFit={"contain"} />

        <Text fontWeight="bold">Navigation Bar</Text>

      
        <InputGroup flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
          <Input
            placeholder="Search contacts"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>

        {/* Dropdown chọn platform */}
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button size="sm" variant="outline">
              {selectedPlatformName || "Select Platform"}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <MenuItem
                  key="all-platforms"
                  value=""
                  onClick={() => handleSelect("", "")}
                >
                  Tất cả nền tảng
                </MenuItem>
                {platforms
                  .flatMap((group) => group.platforms)
                  .map((p) => (
                    <MenuItem
                      key={p.slug}
                      value={p.slug}
                      onClick={() => handleSelect(p.slug, p.name)}
                    >
                      {p.name}
                    </MenuItem>
                  ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </HStack>
    </HStack>
  );
};

export default NavBar;
