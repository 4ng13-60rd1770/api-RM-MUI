import { Box, Button, CircularProgress, Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { useCharacterStore, type Character } from "../store/useCharacterStore";
import Tarjeta from "../components/Tarjeta";
import SearchSection from "../components/Search";
import { useFavoritesStore } from "../store/useFavoritesStore";
import ToggleButtonSwipe from "../components/ToggleButtonSwipe";
import AdvancedFilterModal from "../components/AdvancedFilter";
import TuneIcon from "@mui/icons-material/Tune";
import ClearIcon from "@mui/icons-material/Clear";
import CharacterModal from "../components/CharacterModal";

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

const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

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

  const handleClearFilters = () => {
    setAdvancedFilters({
      species: "",
      gender: "",
      status: "",
    });
  };

const handleCardClick = (character: Character) => {
  setSelectedCharacter(character);
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

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body1" sx={{ fontWeight: "medium" }}>
            {filteredCharacters.length} personaje
            {filteredCharacters.length !== 1 ? "s" : ""}
          </Typography>

          <Button
            variant="outlined"
            onClick={() => setOpenFilterModal(true)}
            sx={{
              minWidth: "0",
              width: 50,
              height: 50,
              borderRadius: "50%",
              borderColor: "white",
              backgroundColor: "white",
              color: "gray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#8bc547",
                color: "white",
                borderColor: "#8bc547",
                "& .MuiSvgIcon-root": {
                  color: "white",
                },
              },
            }}
          >
            <TuneIcon sx={{ fontSize: 25, color: "gray" }} />
          </Button>
        </Box>
      </Box>

      <AdvancedFilterModal
        open={openFilterModal}
        onClose={() => setOpenFilterModal(false)}
        onApply={handleApplyFilters}
      />

      <Box
        sx={{
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          width: "100%",
          maxWidth: "80em",
          justifyContent: "flex-start",
        }}
      >
        {Object.entries(advancedFilters).map(([key, value]) =>
          value ? (
            <Chip
              key={key}
              label={`${key}: ${value}`}
              color="success"
              variant="outlined"
            />
          ) : null
        )}
      </Box>

      {filteredCharacters.length > 0 ? (
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
            <Box
              key={character.id}
              width={{ xs: "50%", sm: "48%" }}
              onClick={() => handleCardClick(character)}
            >
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
      ) : (
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h1" component="h1">
            Oh no !
          </Typography>
          <Typography variant="subtitle1">
            ¡Parece que haz perdido el viaje!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<ClearIcon />}
            onClick={handleClearFilters}
            sx={{ mt: 2 }}
          >
            Limpiar filtros
          </Button>
        </Box>
      )}


      <CharacterModal
  open={Boolean(selectedCharacter)}
  onClose={() => setSelectedCharacter(null)}
  character={selectedCharacter}
/>

    </Box>
  );
};

export default BuscadorPage;
