import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { useFavoritesStore } from '../store/useFavoritesStore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
  location: { name: string };
  episode: string[];
}

const Tarjeta = ({
  id,
  image,
  name,
  species,
  status,
  location,
  episode,
}: CharacterCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const handleFavoriteClick = () => {
    toggleFavorite(id);
  };

  const favorite = isFavorite(id);

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 2,
        position: 'relative',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: { md: '100%', sm: '50%' },
        height: 200,
        mx: 'auto'
      }}
    >
     <IconButton
        onClick={handleFavoriteClick}
        sx={{
          position: "absolute",
          top: 8,
          left: 8,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
        }}
      >
        <StarsIcon sx={{ color: favorite ? 'green' : 'gray' }} fontSize="medium" />
      </IconButton>

      <CardMedia
        component="img"
        sx={{ width: 180, objectFit: 'cover' }}
        image={image}
        alt={name}
      />

      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h6" component="div" fontWeight="bold">{name}</Typography>
        <Typography variant="body2" color="text.secondary">{species}</Typography>
        <Typography variant="body2" color="text.secondary">{location?.name ?? 'Unknown'}</Typography>
        <Typography variant="body2" color="text.secondary">{episode ? episode.length : 0}</Typography>

        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 12,
            my: 2,
            px: 3.5,
            py: 1.5,
            borderRadius: '20px',
            backgroundColor:
              status === 'Alive'
                ? 'secondary.main'
                : status === 'Dead'
                ? '#fae7e7'
                : 'gray',
            color:
              status === 'Alive'
                ? 'contrastText'
                : status === 'Dead'
                ? '#5a1f1f'
                : 'white',
            fontWeight: 'semibold',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {status === 'Alive' && <CheckCircleOutlineIcon fontSize="medium" />}
          {status === 'Dead' && <HighlightOffIcon fontSize="medium" />}
          {status === 'unknown' && <HelpOutlineIcon fontSize="medium" />}
          {status}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tarjeta;
