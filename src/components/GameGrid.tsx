import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { SortOption } from "./SortSelector";


import type { Genre } from "./hooks/useGenre";

interface GameGridProps {
  platformSelected?: string;
  searchValue?: string;
  ordering: SortOption;
  genre?: Genre | null;
}

const GameGrid = ({ platformSelected, searchValue, ordering, genre }: GameGridProps) => {
  // Pass all filter params to useGames
  const { games, error, loading } = useGames({
    platform: platformSelected,
    search: searchValue,
    ordering: ordering,
  genre: genre ? String(genre.id) : undefined,
  });
  const skeletons = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} 
        columnGap={"10px"} 
        rowGap={"20px"} 
      >
        {loading && skeletons.map((s) => (
          <GameCardContainer  key={s}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

        {games.map((game) => (
          <GameCardContainer key={game.id}>
              <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
