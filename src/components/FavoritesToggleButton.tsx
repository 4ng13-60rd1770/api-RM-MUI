import { Button, ButtonGroup } from "@mui/material";

interface Props {
  onFilterChange: (filter: "all" | "favorites") => void;
}

const FavoritesFilterButtons = ({ onFilterChange }: Props) => {
  return (
    <ButtonGroup variant="contained">
      <Button onClick={() => onFilterChange("all")}>Todos</Button>
      <Button onClick={() => onFilterChange("favorites")}>Favoritos</Button>
    </ButtonGroup>
  );
};

export default FavoritesFilterButtons;
