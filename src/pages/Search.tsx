import { Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useCharacterStore } from "../store/useCharacterStore";
import Tarjeta from "../components/Tarjeta";
import SearchSection from "../components/Search";
import { useFavoritesStore } from "../store/useFavoritesStore";
import ToggleButtonSwipe from "../components/ToggleButtonSwipe";
import AdvancedFilterModal from "../components/AdvancedFilter";

const BuscadorPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { characters, loading, fetchCharacters } = useCharacterStore();
  const { favorites } = useFavoritesStore();
  const [filter, setFilter] = useState<"all" | "favorites">("all");

  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    species: "",
    gender: "",
    status: "",
  });

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const displayedCharacters =
    filter === "favorites"
      ? characters.filter((c) => favorites.includes(c.id))
      : characters;

  const filteredCharacters = displayedCharacters.filter((character) => {
    const matchesName = character.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesSpecies = advancedFilters.species
      ? character.species === advancedFilters.species
      : true;
    const matchesGender = advancedFilters.gender
      ? character.gender === advancedFilters.gender
      : true;
    const matchesStatus = advancedFilters.status
      ? character.status === advancedFilters.status
      : true;
    return matchesName && matchesSpecies && matchesGender && matchesStatus;
  });

  const handleApplyFilters = (filters: {
    species: string;
    gender: string;
    status: string;
  }) => {
    setAdvancedFilters(filters);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "#e6e7e3",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 4,
        pt: 4,
      }}
    >
      <SearchSection onSearch={(query) => setSearchValue(query)} />

      <Box
        sx={{
          width: "100%",
          maxWidth: "80em",
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ToggleButtonSwipe
          onToggle={(showFavorites) =>
            setFilter(showFavorites ? "favorites" : "all")
          }
        />

        <Button
          variant="outlined"
          onClick={() => setOpenFilterModal(true)}
          sx={{
            borderColor: "#8bc547",
            color: "#8bc547",
            "&:hover": {
              backgroundColor: "#8bc547",
              color: "white",
            },
          }}
        >
          Filtros avanzados
        </Button>
      </Box>

 <AdvancedFilterModal
  open={openFilterModal}
  onClose={() => setOpenFilterModal(false)}
  onApply={handleApplyFilters}
/>

      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        width="100%"
        maxWidth="80em"
        sx={{ mt: 4 }}
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
