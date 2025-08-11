"use client";
import React ,{useState} from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, Button, CardMedia , Modal } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Cours() {
  const certificates = [
    {
      title: "The unix Workbench",
      image: "/images/unix.png",
      description: "View Certificate",
    },
    {
      title: "C++ Mastery",
      image: "/images/c++.png",
      description: "View Certificate",
    },
    {
      title: "JavaScript Proficiency",
      image: "/images/js.png",
      description: "View Certificate",
    },
    {
      title: "UI/UX Expertise",
      image: "/images/ui ux.png",
      description: "View Certificate",
    },
    {
      title: "React Developer",
      image: "/images/react.png",
      description: "View Certificate",
    },
   
  ];

  const settings = {
    dots: true, // Enable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    arrows: true, // Show next/prev arrows
  };
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleOpen = (image) => {
      setSelectedImage(image);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setSelectedImage(null);
    };

  return (
     <Box
      sx={{
        width: "100%",
        maxWidth: 450,
        textAlign: "center",
        justifyContent: "center"
      
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Certificates
      </Typography>

      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <Card
            key={index}
            sx={{
              margin: "auto",
              maxWidth: 400,
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: 3,
              padding: 2,
              cursor: "pointer",
            }}
            onMouseEnter={() => handleOpen(cert.image)} // open on hover
          >
            <CardMedia
              component="img"
              alt={cert.title}
              height="200"
              image={cert.image}
            />
            <CardContent>
              <Typography variant="h6">{cert.title}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>

      {/* Full-screen image modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={handleClose}
        >
          <Box
            component="img"
            src={selectedImage}
            alt="Certificate"
            sx={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: 2,
              boxShadow: 5,
              transform: "scale(1)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default Cours;
