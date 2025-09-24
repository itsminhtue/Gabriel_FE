import { HStack } from "@chakra-ui/react";
import type { Platform } from "./hooks/useGame";
import type { IconType } from "react-icons";
import { FaApple,  FaPlaystation, FaXbox, FaLinux, FaAndroid, FaWindows } from "react-icons/fa";
import { SiNintendo3Ds } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo3Ds,
    mac: FaApple,
    linux: FaLinux,
    web: BsGlobe,
    android: FaAndroid
  };

  return (
    <HStack>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} color="gray.500"/> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
