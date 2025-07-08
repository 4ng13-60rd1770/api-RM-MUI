import {
  Box,
  Modal,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onApply: (filters: { species: string; gender: string; status: string }) => void;
}

const speciesOptions = ["Human", "Alien", "Robot"];
const genderOptions = ["Male", "Female", "Genderless", "unknown"];
const statusOptions = ["Alive", "Dead", "unknown"];

const AdvancedFilterModal = ({ open, onClose, onApply }: Props) => {
  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    status: "",
  });

const handleSelect = (type: "species" | "gender" | "status", value: string) => {
  setFilters((prev) => ({
    ...prev,
    [type]: prev[type] === value ? "" : value,
  }));
};

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          backgroundColor: "white",
          p: 4,
          borderRadius: 2,
          maxWidth: 400,
          mx: "auto",
          mt: "10%",
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Filtros Avanzados
        </Typography>

        {/* Species */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Especie
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {speciesOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              clickable
              onClick={() => handleSelect("species", option)}
              color={filters.species === option ? "primary" : "default"}
              variant={filters.species === option ? "filled" : "outlined"}
            />
          ))}
        </Stack>

        {/* Gender */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Género
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {genderOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              clickable
              onClick={() => handleSelect("gender", option)}
              color={filters.gender === option ? "primary" : "default"}
              variant={filters.gender === option ? "filled" : "outlined"}
            />
          ))}
        </Stack>

        {/* Status */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Estado
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {statusOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              clickable
              onClick={() => handleSelect("status", option)}
              color={filters.status === option ? "primary" : "default"}
              variant={filters.status === option ? "filled" : "outlined"}
            />
          ))}
        </Stack>

        <Box display="flex" justifyContent="flex-end" mt={3} gap={1}>
          <Button variant="outlined" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" onClick={handleApply}>
            Aplicar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AdvancedFilterModal;
