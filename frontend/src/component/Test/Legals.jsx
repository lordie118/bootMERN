import React from 'react';
import { 
  AppBar, 
  Box, 
  Container, 
  Toolbar, 
  Typography, 
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Divider,
  useScrollTrigger,
  Fade,
  Fab,
  IconButton
} from '@mui/material';
import { ChevronUp, Menu } from 'lucide-react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0019A5',
      light: '#2196f3',
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#0019A5',
      marginTop: '2.5rem',
      marginBottom: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#4a4a4a',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
          '&:hover': {
            background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
            color: 'white',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 8,
          '&:hover': {
            backgroundColor: 'rgba(0,25,165,0.04)',
          },
        },
      },
    },
  },
});

function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000,
        }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
            color: 'white',
          }}
        >
          <ChevronUp size={24} />
        </Fab>
      </Box>
    </Fade>
  );
}

function Legals() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Header */}
      <AppBar 
        position="sticky" 
        sx={{ 
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              AXA
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {['AUTO', 'MOTO', 'HABITATION', 'EPARGNE', 'PRÉVOYANCE', 'SANTÉ', 'LOISIRS'].map((item) => (
                <Button 
                  key={item}
                  color="inherit"
                  sx={{
                    '&:hover': {
                      background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
                      color: 'white',
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <IconButton 
              sx={{ display: { xs: 'block', md: 'none' } }}
              color="inherit"
            >
              <Menu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper 
          elevation={0} 
          sx={{ 
            p: { xs: 2, sm: 4 },
            background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)',
          }}
        >
          <Typography variant="h1" align="center">Mentions légales</Typography>
          
          <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
            <Typography paragraph>
              Le site d'AXA Assurance Maroc, est un site d'information qui s'adresse aussi bien aux clients d'AXA Assurance Maroc, qu'aux non-clients.
            </Typography>

            <Typography paragraph>
              Les informations contenues sur le site <Link>www.axa.ma</Link> ont un caractère strictement informatif, elles n'emportent aucun engagement juridique ni accord contractuel de la part d'AXA Assurance Maroc qui se réserve par ailleurs la faculté d'en modifier les caractéristiques.
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h2">Présentation générale</Typography>

            <Typography paragraph>
              Vous êtes actuellement connecté au site "www.axa.ma" qui est édité par AXA Assurance Maroc.
            </Typography>

            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                background: 'rgba(0,25,165,0.02)',
                border: '1px solid rgba(0,25,165,0.1)',
                borderRadius: 2,
                mb: 4,
              }}
            >
              <List>
                {[
                  "Dénomination sociale : AXA Assurance Maroc.",
                  "Représentant légal : Meryem CHAMI – Directeur Général.",
                  "Société anonyme au capital de : 900.000.000 DHS (au 31 décembre 2013).",
                  "RC Casablanca : 34221.",
                  "Siège Social : 120/122, Avenue Hassan II. 20 000 Casablanca.",
                  "Directeur de la publication : Direction Stratégie et Distribution d'AXA Assurance Maroc."
                ].map((text, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemText 
                      primary={text}
                      primaryTypographyProps={{
                        sx: { 
                          fontSize: '0.95rem',
                          color: '#2c3e50',
                        }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            <Typography variant="h2">Droit de propriété intellectuelle</Typography>
          </Box>
        </Paper>
      </Container>

      <ScrollTop />
    </ThemeProvider>
  );
}

const Link = ({ children }: { children: React.ReactNode }) => (
  <Typography
    component="a"
    href="#"
    sx={{
      background: 'linear-gradient(45deg, #0019A5 30%, #2196f3 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textDecoration: 'none',
      fontWeight: 500,
      '&:hover': {
        textDecoration: 'underline',
      },
    }}
  >
    {children}
  </Typography>
);

export default Legals;