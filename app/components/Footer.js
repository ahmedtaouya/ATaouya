import React from 'react';
import { Box, Container, Grid, Typography, TextField, Button } from '@mui/material';
import { FaSearchLocation, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'transparent', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {/* Contact Information Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                p: 4,
                borderRadius: '10px',
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" mb={2} sx={{ color: 'white' }}>
                Contact Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ color: 'white' }}
                >
                  <FaSearchLocation size={20} />
                  4 avenue SIDI maussa doukali, SALE, SALA AL JADIDA
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ color: 'white' }}
                >
                  <FaPhone size={20} />
                  0652954880
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{ color: 'white' }}
                >
                  <FaMailBulk size={20} />
                  ahmad.taouya@gmail.com
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Get in Touch Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.4)',
                p: 4,
                borderRadius: '10px',
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" mb={2} sx={{ color: 'white' }}>
                Get in Touch
              </Typography>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
                required
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                InputLabelProps={{ style: { color: 'white' } }}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' },
                  },
                }}
                required
              />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
