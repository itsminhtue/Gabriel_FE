import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1,2,3,4,5];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} 
      //gap="10px"
      columnGap={"10px"} 
      rowGap={"20px"} 
      
      >
        {loading && skeletons.map((s) => 
          <GameCardSkeleton key={s} />
        )}
        
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
