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
        border: "2px solid rgb(255, 255, 255)",
        width: { xs: "180px", sm: "200px" },
        height: "40px",
        position: "relative",
        fontSize: "0.9rem",
        
      }}
    >
      <Box
        onClick={() => handleToggle(false)}
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: !showFavorites ? "#8bc547" : "white",
          color: !showFavorites ? "8bc547" : "#8bc547",
          fontWeight: "bold",
          borderRadius: "10",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: !showFavorites ? "#e6f3d8" : "#f5f5f5",
          },
        }}
      >
        Todos
      </Box>

      <Box
        onClick={() => handleToggle(true)}
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: showFavorites ? "#8bc547" : "white",
          color: showFavorites ? "8bc547" : "#8bc547",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: showFavorites ? "#e6f3d8" : "#f5f5f5",
          },
        }}
      >
        Favoritos
      </Box>
    </Box>
  );
};

export default ToggleButtonSwipe;
