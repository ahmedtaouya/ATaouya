"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Modal,
} from "@mui/material";
import Slider from "react-slick";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import technologies from "../data/technologies";

const { languages, frameworks, databases, systems } = technologies;

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
  {
    title: "Design Fondamental",
    image: "/images/adobe.png",
    description: "View Certificate",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

function Competencies() {
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
      sx={(theme) => ({
        p: 4,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 2,
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
      })}
    >
      {/* Skills Section */}
      
      <Card
        sx={(theme) => ({
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: 4,
          width: "100%",
          color: "white",
          [theme.breakpoints.down("md")]: {
            padding: 2,
          },
        })}
      >
   
        

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Programming Languages
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Core technologies I work with daily:
          </Typography>
          <Container className="flex flex-row flex-wrap gap-4" sx={{ p: 0 }}>
            <AnimatedTooltip items={languages} />
          </Container>
        </Box>
        <Divider sx={{ my: 4, borderColor: "white" }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Frameworks
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Modern tools I use to build robust applications:
          </Typography>
          <Container className="flex flex-row flex-wrap gap-4" sx={{ p: 0 }}>
            <AnimatedTooltip items={frameworks} />
          </Container>
        </Box>
        <Divider sx={{ my: 4, borderColor: "white" }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Database Technologies
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Database systems I'm proficient with:
          </Typography>
          <Container className="flex flex-row flex-wrap gap-4" sx={{ p: 0 }}>
            <AnimatedTooltip items={databases} />
          </Container>
        </Box>
        <Divider sx={{ my: 4, borderColor: "white" }} />

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Operating Systems
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Operating Systems:
          </Typography>
          <Container className="flex flex-row flex-wrap gap-4" sx={{ p: 0 }}>
            <AnimatedTooltip items={systems} />
          </Container>
        </Box>
      </Card>

      {/* Certificates Section */}
      <Box
        sx={(theme) => ({
          width: "100%",
          maxWidth: 450,
          textAlign: "center",
          ml: 40,
          [theme.breakpoints.down("lg")]: {
            ml: 10,
          },
          [theme.breakpoints.down("md")]: {
            ml: 0,
            mt: 4,
            maxWidth: "100%",
          },
        })}
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
              onMouseEnter={() => handleOpen(cert.image)}
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
    </Box>
  );
}

export default Competencies;
