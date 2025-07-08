import { Box, TextField } from "@mui/material";
import { useState } from "react";
import headerImage from "../assets/headerImage.png";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Box
      sx={{
        height: "25vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src={headerImage}
        alt="Header"
        style={{
          width: "100%",
          height: "50%",
          objectFit: "contain",
          top: 0,
          left: 0,
          position: "absolute",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch", 
          color: "white",
          px: 2, 
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Buscar personaje"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSection;
