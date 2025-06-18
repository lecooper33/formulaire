import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Container,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const StyledContainer = styled(Paper)(({ theme }) => ({
  width: '768px',
  maxWidth: '100%',
  height: '450px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '30px',
  boxShadow: '0 5px 15px rgba(0,0,0,0.35)',
  display: 'flex',
  margin: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100vh',
    margin: 0,
    borderRadius: 0,
  }
}));

const FormSection = styled(Box)(({ theme, isMobile }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.6s ease-in-out',
  height: isMobile ? 'auto' : '100%',
  overflowY: 'auto',
  '& > *': {
    marginBottom: theme.spacing(1),
  },
  [theme.breakpoints.down('sm')]: {
    position: 'relative !important',
    width: '100% !important',
    transform: 'none !important',
    opacity: '1 !important',
    display: props => props.show ? 'flex' : 'none',
  }
}));

const ToggleSection = styled(Box)(({ theme, isActive }) => ({
  position: 'absolute',
  top: 0,
  left: isActive ? '0%' : '50%',
  width: '50%',
  height: '100%',
  overflow: 'hidden',
  transition: 'all 0.6s ease-in-out',
  background: 'linear-gradient(to right, #5c6bc0, #512da8)',
  borderRadius: isActive ? '0 150px 100px 0' : '150px 0 0 100px',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  textAlign: 'center',
  zIndex: 1000,
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    left: 0,
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2),
  }
}));

const SocialIcons = styled(Box)({
  display: 'flex',
  gap: '10px',
  marginBottom: '20px',
});

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [activeForm, setActiveForm] = useState('login');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleMode = () => {
    if (isMobile) {
      setActiveForm(isSignUp ? 'login' : 'signup');
    }
    setIsSignUp(!isSignUp);
  };

  return (
    <Container sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to right, #e2e2e2, #c9d6ff)',
      overflowY: 'hidden',
      padding: isMobile ? 0 : theme.spacing(2),
    }}>
      <StyledContainer>
        {isMobile && (
          <ToggleSection isActive={isSignUp}>
            {isSignUp ? (
              <>
                <Typography variant="h5" gutterBottom>Bon retour !</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Connectez-vous pour accéder à votre compte
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={toggleMode}
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: '8px'
                  }}
                >
                  Se connecter
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h5" gutterBottom>Bonjour !</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Inscrivez-vous pour accéder à nos services
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={toggleMode}
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: '8px'
                  }}
                >
                  S'inscrire
                </Button>
              </>
            )}
          </ToggleSection>
        )}        <FormSection 
          sx={{ 
            position: 'absolute',
            left: 0,
            transform: !isMobile && (isSignUp ? 'translateX(100%)' : 'translateX(0)'),
            opacity: !isMobile && (isSignUp ? 0 : 1),
            zIndex: isSignUp ? 1 : 2,
            width: '50%',
            display: isMobile ? (activeForm === 'login' ? 'flex' : 'none') : 'flex'
          }}
          isMobile={isMobile}
        >
          <Typography variant="h4" gutterBottom>Connexion</Typography>
          <SocialIcons>
            <IconButton color="primary"><FacebookIcon /></IconButton>
            <IconButton color="primary"><GitHubIcon /></IconButton>
            <IconButton color="primary"><TwitterIcon /></IconButton>
          </SocialIcons>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Utiliser votre email et votre mot de passe
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mot de passe"
            type="password"
            required
            sx={{ mb: 2 }}
          />
          <Link href="#" sx={{ mb: 2 }}>
            Mot de passe oublié ?
          </Link>          <Box sx={{ mt: 2, mb: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#512da8',
                '&:hover': { bgcolor: '#5c6bc0' },
                textTransform: 'uppercase',
                borderRadius: '8px',
                width: '80%',
              }}
            >
              Connexion
            </Button>
          </Box>
        </FormSection>        <FormSection 
          sx={{ 
            position: 'absolute',
            left: 0,
            transform: !isMobile && (isSignUp ? 'translateX(100%)' : 'translateX(0)'),
            opacity: !isMobile && (isSignUp ? 1 : 0),
            zIndex: isSignUp ? 5 : 1,
            width: '50%',
            height: '100%',
          }}
          isMobile={isMobile}
          show={isSignUp}
        >
          <Typography variant="h4" gutterBottom>Créer un compte</Typography>
          <SocialIcons>
            <IconButton color="primary"><FacebookIcon /></IconButton>
            <IconButton color="primary"><GitHubIcon /></IconButton>
            <IconButton color="primary"><TwitterIcon /></IconButton>
          </SocialIcons>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Ou utiliser votre email
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Nom"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            type="email"
            required
            sx={{ mb: 2 }}
          />            <TextField
            fullWidth
            margin="normal"
            label="Mot de passe"
            type="password"
            required
            sx={{ mb: 2 }}
          />
          <Box sx={{ mt: 2, mb: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#512da8',
                '&:hover': { bgcolor: '#5c6bc0' },
                textTransform: 'uppercase',
                borderRadius: '8px',
                width: '80%',
              }}
            >
              S'inscrire
            </Button>
          </Box>
        </FormSection>

        {!isMobile && (
          <ToggleSection isActive={isSignUp}>
            {isSignUp ? (
              <>
                <Typography variant="h4" gutterBottom>Bon retour !</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Connectez-vous pour accéder à votre compte
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={toggleMode}
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: '8px'
                  }}
                >
                  Se connecter
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>Bonjour !</Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Inscrivez-vous pour accéder à nos services
                </Typography>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={toggleMode}
                  sx={{
                    borderColor: '#fff',
                    color: '#fff',
                    textTransform: 'uppercase',
                    borderRadius: '8px'
                  }}
                >
                  S'inscrire
                </Button>
              </>
            )}
          </ToggleSection>
        )}
      </StyledContainer>
    </Container>
  );
};

export default LoginSignup;