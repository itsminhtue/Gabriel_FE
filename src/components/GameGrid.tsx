import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, loading } = useGames();
  const skeletons = [1,2,3,4,5,6,7,8,9,10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} 
      //gap="10px"
      columnGap={"10px"} 
      rowGap={"20px"} 
      
      >
        {loading && skeletons.map((s) => (
          <GameCardContainer>
            <GameCardSkeleton key={s} />
          </GameCardContainer>
        ))}

        {games.map((game) => (
          <GameCardContainer>
              <GameCard key={game.id} game={game} />
          </GameCardContainer>
        
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
