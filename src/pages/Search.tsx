import { Box, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';
import headerImage from '../assets/header.jpg';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

const BuscadorPage = () => {
    const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    console.log('Buscando personaje:', searchValue);

  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '25vh',
          width: '100%',
          backgroundImage: `url(${headerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            gap: 2,
            width: { xs: '80%', md: '50%' },
          }}
        >
<TextField
  fullWidth
  variant="outlined"
  placeholder={t('header.buscador')}
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  InputProps={{
      startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'primary.main' }} />
                </InputAdornment>
              ),
    sx: {
      color: 'white', 
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'text.secondary', 
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'text.secondary',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'text.secondary',
      },
      borderRadius: 3,
    },
  }}
  InputLabelProps={{
    sx: { color: 'white', }, 
  }}
  sx={{
    backgroundColor: 'rgba(0, 23, 0, 0.5)', 
    borderRadius: 3,
    mt: 10,
    '& input::placeholder': {
      color: 'white',
      opacity: 0.7, 
    },
  }}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }}
/>
        </Box>
      </Box>

    </Box>
  );
};

export default BuscadorPage;
