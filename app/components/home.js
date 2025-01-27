"use client";

import React from 'react';
import { Box, Typography ,Button } from '@mui/material';
import { useRouter } from 'next/navigation'; 
import DownloadIcon from '@mui/icons-material/Download';
// import Ah from 'public/images/ahmed.jpg';
const  Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/me'); // Redirige vers /me
  };
  return (
    <Box
      sx={{
        minHeight: '100vh',
        //backgroundImage: `url('./images/backgroung.jpg')`,
        //backgroundSize: 'cover',
        //backgroundPosition: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for medium and above
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff', // White text for contrast
        textShadow: '1px 1px 5px rgba(0, 0, 0, 0.8)',
        padding: '70px',
        gap: '70px', // Add spacing between text and the Compare component
      }}
    >
      {/* Left Side - Text */}
      <Box
      sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: 'flex-start' },
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      <Typography variant="h2" gutterBottom>
        Bonjour
      </Typography>
      <Typography variant="h4" gutterBottom>
        Je m'appelle Ahmed TAOUYA
      </Typography>
      <Typography variant="h6" gutterBottom>
        Software, future ingénieur informatique et réseaux
      </Typography>
      <Button
      variant="contained"
      sx={{
        textDecoration: 'none',
        color: '#fff',
        fontFamily: 'sans-serif',
        fontWeight: 600,
        borderRadius: '50px',
        border: '2px rgba(0, 0, 0, 0.4)',
        padding: '14px 40px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#fff',
          color: '#4e484a',
        },
      }}
      href="/images/cv.pdf"
      download="Ahmed_TAOUYA_CV.pdf"
    >
      <span
        style={{
          position: 'relative',
          zIndex: 2,
        }}
      >
        Download CV
      </span>
    </Button>


    </Box>

      {/* Right Side - Compare Component */}
      <Box
  sx={{
    position: 'relative',
    width: '28vw',
    height: '28vw',
    border: '2px solid #fff',
    borderRadius: '50%',
    boxShadow: '0 0 10px #fff',
    overflow: 'hidden',
    display: 'flex', // Ensures image is centered within the box
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <img
    src="images/ahmed.jpg"
    alt="Ahmed TAOUYA"
    style={{
      position: 'absolute',
      top: '0px',
      display: 'block',
      objectFit: 'cover',
      width: '100%',
    }}
  />
</Box>

    </Box>
    
  );
}

export default Home;
