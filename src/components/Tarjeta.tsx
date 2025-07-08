import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface CharacterCardProps {
  image: string;
  name: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
}

const Tarjeta = ({
  image,
  name,
  species,
  status,
  location,
  episode,
}: CharacterCardProps) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row', 
        borderRadius: 2,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '100%', 
        maxWidth: {  md: '100%' , sm: '50%' },
        height: 200,
        mx: 'auto'
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 180,
          objectFit: 'cover',
        }}
        image={image}
        alt={name}
      />

      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography variant="h6" component="div" fontWeight="bold">
          {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {species}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {location?.name ?? 'Unknown'}
        </Typography>

        <Typography variant="body2" color="text.secondary">
      {episode ? episode.length : 0}
        </Typography>

        <Box
          sx={{
            mt: 1,
            display: 'inline-block',
            px: 1.5,
            py: 0.5,
            borderRadius: '20px',
            backgroundColor:
              status === 'Alive'
                ? 'green'
                : status === 'Dead'
                ? 'red'
                : 'gray',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.875rem',
          }}
        >
          {status}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Tarjeta;
