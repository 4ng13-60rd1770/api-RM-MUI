/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavoritesStore } from "../store/useFavoritesStore";
import { useCharacterStore } from "../store/useCharacterStore";
import { useEpisodes } from "../hook/useEpisodes";

interface CharacterModalProps {
  open: boolean;
  onClose: () => void;
  character: any; 
}

const CharacterModal = ({ open, onClose, character }: CharacterModalProps) => {
  const { characters } = useCharacterStore();
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const { episodes, loading } = useEpisodes(character?.episode || []);

  if (!character) return null;

  const relatedCharacters = characters.filter(
    (c) => c.species === character.species && c.id !== character.id
  );

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          my: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 24,
        }}
      >
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${character.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: -8,
            px: 2,
          }}
        >
          <Avatar
            src={character.image}
            sx={{ width: 100, height: 100, border: "3px solid white" }}
          />
          <Typography variant="h6" mt={1}>
            {character.name}
          </Typography>

          <IconButton
            onClick={() => toggleFavorite(character.id)}
            sx={{ color: isFavorite(character.id) ? "red" : "grey" }}
          >
            {isFavorite(character.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={4}
          px={3}
          py={2}
        >
          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom>
              Información
            </Typography>
            <Typography variant="body2">Nombre: {character.name}</Typography>
            <Typography variant="body2">ID: {character.id}</Typography>
            <Typography variant="body2">Especie: {character.species}</Typography>
            <Typography variant="body2">Género: {character.gender}</Typography>
            <Typography variant="body2">Estado: {character.status}</Typography>
          </Box>

          <Box flex={1}>
            <Typography variant="subtitle1" gutterBottom>
              Episodios
            </Typography>
            {loading ? (
              <Typography variant="body2">Cargando episodios...</Typography>
            ) : (
              <Box display="flex" flexWrap="wrap" gap={1}>
                {episodes.map((ep: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      flex: "1 1 45%",
                      minWidth: "140px",
                    }}
                  >
                    <Typography variant="body2">
                      {ep.name || "Nombre no disponible"}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Box px={3} pb={3}>
          <Typography variant="subtitle1" gutterBottom>
            Personajes Relacionados
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            {relatedCharacters.map((relChar) => (
              <Box
                key={relChar.id}
                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
              >
                <Avatar src={relChar.image} />
                <Typography variant="caption">{relChar.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CharacterModal;
