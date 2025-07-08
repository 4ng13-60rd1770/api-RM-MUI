import { Box } from "@mui/material";
import { useState } from "react";

interface Props {
  onToggle: (showFavorites: boolean) => void;
}

const ToggleButtonSwipe = ({ onToggle }: Props) => {
  const [showFavorites, setShowFavorites] = useState(false);

  const handleToggle = (value: boolean) => {
    setShowFavorites(value);
    onToggle(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "50px",
        overflow: "hidden",
        border: "2px solid #8bc547",
        width: "fit-content",
        position: "relative",
        top: 10,
        left: 20,
        my: "0em",
      }}
    >
      <Box
        onClick={() => handleToggle(false)}
        sx={{
          px: 3,
          py: 1,
          backgroundColor: !showFavorites ? "#8bc547" : "white",
          color: !showFavorites ? "white" : "#8bc547",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: !showFavorites ? "#6ea63a" : "#f5f5f5",
          },
        }}
      >
        Todos
      </Box>
      <Box
        onClick={() => handleToggle(true)}
        sx={{
          px: 3,
          py: 1,
          backgroundColor: showFavorites ? "#8bc547" : "white",
          color: showFavorites ? "white" : "#8bc547",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: showFavorites ? "#6ea63a" : "#f5f5f5",
          },
        }}
      >
        Favoritos
      </Box>
    </Box>
  );
};

export default ToggleButtonSwipe;
