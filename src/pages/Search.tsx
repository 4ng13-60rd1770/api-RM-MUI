import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useCharacterStore } from "../store/useCharacterStore";
import Tarjeta from "../components/Tarjeta";
import SearchSection from "../components/Search";
import FavoritesFilterButtons from "../components/FavoritesToggleButton";
import { useFavoritesStore } from "../store/useFavoritesStore";

const BuscadorPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { characters, loading, fetchCharacters } = useCharacterStore();
  const { favorites } = useFavoritesStore();
  const [filter, setFilter] = useState<"all" | "favorites">("all");

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const displayedCharacters =
    filter === "favorites"
      ? characters.filter((c) => favorites.includes(c.id))
      : characters;

  const filteredCharacters = displayedCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#e6e7e3", minHeight: "100vh" }}>
      <SearchSection onSearch={(query) => setSearchValue(query)} />

      <Box textAlign="center" my={2}>
        <FavoritesFilterButtons onFilterChange={setFilter} />
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        mx="auto"
        maxWidth={{ md: "80em", sm: "100%" }}
        sx={{ mt: 4, px: 2 }}
      >
        {filteredCharacters.map((character) => (
          <Box key={character.id} width={{ xs: "50%", sm: "48%" }}>
            <Tarjeta
              id={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              location={character.location}
              episode={character.episode}
              status={character.status}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BuscadorPage;
