"use client";
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent, Button, CardMedia } from "@mui/material";
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

  return (
    <Box sx={{ padding: 7, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Certificates
      </Typography>
      <Slider {...settings}>
        {certificates.map((cert, index) => (
          <Card key={index} sx={{ margin: "auto", maxWidth: 400 }}>
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
    </Box>
  );
}

export default Cours;
