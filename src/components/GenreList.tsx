import { Heading, HStack, List, Spinner, Image, Button } from "@chakra-ui/react";
import type { Genre } from "./hooks/useGenre"
import useGenre from "./hooks/useGenre";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, error, loading } = useGenre();

    if (error) return null;
    if (loading) return <Spinner />;
    return (
        <>
            <Heading>Genres</Heading>
            <List.Root>
                {data.map(g => (
                    <List.Item key={g.id}>
                        <HStack>

                            <Image boxSize={"32px"} borderRadius={8} objectFit={"cover"} marginRight={"8px"} src={getCroppedImageUrl(g.image_background)} />

                            <Button
                                whiteSpace={"normal"}
                                textAlign={"left"}
                                variant={"subtle"}
                                fontSize={"md"}

                                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
                                onClick={() => onSelectGenre(g)}
                            >
                                {g.name}
                            </Button>
                        </HStack>
                    </List.Item>

                ))}
            </List.Root>
        </>
    )
}

export default GenreList
