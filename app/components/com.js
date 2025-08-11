"use client";
import { useState } from "react";
import { Box, Typography, Tooltip, Card, CardContent, Button, CardMedia ,Container, Divider, Modal} from "@mui/material";
import { SiCplusplus, SiPhp, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiMui } from "react-icons/si";
import { SiReact, SiNodedotjs, SiNextdotjs, SiLaravel, SiFigma } from "react-icons/si";
import { FaDatabase, FaWindows, FaLinux, FaTerminal, FaProjectDiagram } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineCluster } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import { Box, Typography} from "@mui/material";
import { Lens } from "./ui/lens";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import technologies from "../data/technologies";
import { TypeAnimation } from "react-type-animation";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card.jsx";

const { languages, frameworks, databases,systems } = technologies;


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
  dots: true, // Enable navigation dots
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one slide at a time
  slidesToScroll: 1,
  arrows: true, // Show next/prev arrows
};


function Competencies() {
  const [hovering, setHovering] = useState(false);
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
    p: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2 // Augmente l’espace entre les sections
  }}
>
  {/* Skills Section */}
<Card
sx={
  {backgroundColor: "rgba(0, 0, 0, 0.4)",
   padding:4, // Fond noir
   width: "100%",
    
 }}> <Typography variant="h3" gutterBottom color="black">
    Competencies
  </Typography>
  
  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" color="white" gutterBottom>
      Programming Languages
    </Typography>
    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
      Core technologies I work with daily:
    </Typography>
    <Container className="flex flex-row flex-wrap gap-4">
      <AnimatedTooltip items={languages} />
    </Container>
  </Box>
  <Divider sx={{ my: 4 }} />

  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" color="white" gutterBottom>
      Frameworks
   
    </Typography>
    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
      Modern tools I use to build robust applications:
    </Typography>
    <Container className="flex flex-row flex-wrap gap-4">
      <AnimatedTooltip items={frameworks} />
    </Container>
  </Box>
  <Divider sx={{ my: 4 }} />

  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" color="white" gutterBottom>
      Database Technologies
    </Typography>
    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
      Database systems I'm proficient with:
    </Typography>
    <Container className="flex flex-row flex-wrap gap-4">
      <AnimatedTooltip items={databases} />
    </Container>
  </Box>
  <Divider sx={{ my: 4 }} />

  <Box sx={{ mb: 4 }}>
    <Typography variant="h4" color="white" gutterBottom>
      Operating Systems
    </Typography>
    <Typography variant="body1" color="white" sx={{ mb: 2 }}>
      Operating Systems:
    </Typography>
    <Container className="flex flex-row flex-wrap gap-4">
      <AnimatedTooltip items={systems} />
    </Container>
  </Box></Card>
 




  {/* Certificates Section */}
    <Box
      sx={{
        width: "100%",
        maxWidth: 450,
        textAlign: "center",
        ml: 40,
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
</Box>

  );
}

export default Competencies;
