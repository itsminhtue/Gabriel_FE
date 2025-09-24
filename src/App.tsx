import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./components/hooks/useGenre";

const App = () => {
  const [ selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"#"}>
        <NavBar />
      </GridItem>

      <Show when={"lg"}>
        <GridItem
          area={"aside"}
          bg={"#"}
          display={{ base: "none", lg: "block" }}>
          <GenreList onSelectGenre={setSelectedGenre} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>

      <GridItem area={"main"} bg={"#"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
