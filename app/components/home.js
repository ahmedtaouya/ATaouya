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
    width: '125px',
    height: '45px',
    borderRadius: '20px',
    border: 'none',
    boxShadow: '1px 1px rgba(107, 221, 215, 0.37)',
    padding: '5px 10px',
    background: 'rgba(0, 0, 0, 0.4)',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 505,
    fontSize: '16px',
    lineHeight: 1,
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 10px rgba(59, 190, 230, 0.568))',
    transition: '.5s linear',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      transition: '.5s linear',
      '& .texto': {
        display: 'none',
      },
      '& .mysvg': {
        display: 'inline',
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        top: '-3px',
        left: '-3px',
        width: '100%',
        height: '100%',
        border: '3.5px solid transparent',
        borderTop: '3.5px solid #fff',
        borderRight: '3.5px solid #fff',
        borderRadius: '50%',
        animation: 'animateC 2s linear infinite',
      },
    },
  }}
  href="/images/cv.pdf" // Replace with the actual path to your CV file
  download="Ahmed_TAOUYA_CV.pdf" // Set the default file name for download
  // Optional download icon
>
<span class="texto">Download</span>
    <svg className="mysvg" style={{ display: 'none' }} /* Your SVG icon code */ />
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
