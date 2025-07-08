import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  imageSrc: string;
  imageAlt: string;
  extraImageSrc?: string;
  extraImageAlt?: string;
}

const Header = ({
  title,
  subtitle,
  buttonText,
  imageSrc,
  extraImageSrc,
}: HeaderProps) => {
    const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${imageSrc})`,
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
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {extraImageSrc && (
          <img
            src={extraImageSrc}
            style={{
              width: 550,
              marginBottom: 80,
              zIndex: 3, 
            }}
          />
        )}

        <Typography variant="h1" component="h1">
          {t(title)}
        </Typography>
        <Typography variant="h3" component="h1">
          {t(subtitle)}
        </Typography>
        <Button variant="contained" onClick={() => navigate('/search')}
        sx={{
          backgroundColor: 'main.main', 
          color: 'dark.main',
          padding: '10px 30px',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderRadius: '50px',
          paddingX: 4,
          marginY: 4,
          '&:hover': {
            backgroundColor: 'gray.50',
          },
          zIndex: 3, 
        }}>
          {t(buttonText)}
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
