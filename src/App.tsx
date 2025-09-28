import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import SortSelector from "./components/SortSelector";
import type { SortOption } from "./components/SortSelector";
import { useState } from "react";
import type { Genre } from "./components/hooks/useGenre";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [platformSelected, setPlatformSelected] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [ordering, setOrdering] = useState<SortOption>("-metacritic");
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
      <GridItem area={"nav"} bg={"#"}>
        <NavBar onSelectPlatform={setPlatformSelected} onSearch={setSearchValue} />
        <SortSelector value={ordering} onChange={setOrdering} />
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
        <GameGrid
          platformSelected={platformSelected}
          searchValue={searchValue}
          ordering={ordering}
          genre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default App;
