import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Mail, Phone, MapPin } from 'lucide-react';

function ContactUs(){
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navigation */}
      <AppBar position="static" sx={{ backgroundColor: '#80CBC4', marginBottom: 4 }}>
        <Toolbar>
          <Grid container spacing={2}>
            {['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6'].map((page) => (
              <Grid item key={page}>
                <Button color="inherit">{page}</Button>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        {/* Contact Us Image Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 4, 
            mb: 4, 
            textAlign: 'center',
            backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography variant="h2" component="h1" sx={{ color: '#f44336', fontWeight: 'bold' }}>
            CONTACT US
          </Typography>
        </Paper>

        {/* Contact Form */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ backgroundColor: '#80CBC4' }}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Contact Info */}
        <Paper sx={{ p: 4, mb: 4, backgroundColor: '#f5f5f5' }}>
          <Typography variant="h5" component="h2" sx={{ mb: 3, textAlign: 'center' }}>
            CONTACT INFO
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone size={24} />
                <Typography sx={{ ml: 1 }}>+1 234 567 890</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Mail size={24} />
                <Typography sx={{ ml: 1 }}>contact@example.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MapPin size={24} />
                <Typography sx={{ ml: 1 }}>123 Street, City, Country</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Footer */}
        
      </Container>
    </Box>
  );
}

export default ContactUs;