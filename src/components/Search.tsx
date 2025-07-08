import { Box, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import headerImage from "../assets/header.jpg";

interface SearchSectionProps {
  onSearch: (query: string) => void;
}

const SearchSection = ({ onSearch }: SearchSectionProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "30vh",
        width: "100%",
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          width: { xs: "80%", md: "50%" },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Buscar personaje"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "primary.main" }} />
              </InputAdornment>
            ),
            sx: {
              color: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary",
              },
              borderRadius: 3,
            },
          }}
          sx={{
            backgroundColor: "rgba(0, 23, 0, 0.5)",
            borderRadius: 3,
            mt: 10,
            "& input::placeholder": {
              color: "white",
              opacity: 0.7,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchSection;
