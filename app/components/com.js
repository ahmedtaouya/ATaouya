import { useState } from "react";
import { Box, Typography, Tooltip, Card, CardContent, Button, CardMedia } from "@mui/material";
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

const sections = [
  {
    title: "Programming Languages",
    description: "Core technologies I work with daily:",
    skills: [
      { Icon: SiJavascript, label: "JavaScript", color: "#f7df1e", tooltip: "Programming language" },
      { Icon: SiPhp, label: "PHP", color: "#8993be", tooltip: "Programming language" },
      { Icon: SiHtml5, label: "HTML", color: "#e34f26", tooltip: "Markup language" },
      { Icon: SiCss3, label: "CSS", color: "#1572b6", tooltip: "Styling language" },
      { Icon: SiCplusplus, label: "C++", color: "#00599C", tooltip: "Programming language" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Modern tools I use to build robust applications:",
    skills: [
      { Icon: SiReact, label: "React.js", color: "#61dafb", tooltip: "Frontend library" },
      { Icon: SiNodedotjs, label: "Node.js", color: "#68a063", tooltip: "Backend runtime" },
      { Icon: SiNextdotjs, label: "Next.js", color: "#000000", tooltip: "React framework" },
      { Icon: SiBootstrap, label: "Bootstrap", color: "#563d7c", tooltip: "CSS framework" },
      { Icon: SiMui, label: "MUI", color: "#007FFF", tooltip: "React component library" },
      { Icon: SiLaravel, label: "Laravel", color: "#ff2d20", tooltip: "PHP framework" },
    ],
  },
  {
    title: "Databases",
    description: "Technologies I use to manage data:",
    skills: [
      { Icon: FaDatabase, label: "SQL", color: "#4479A1", tooltip: "Structured Query Language" },
      { Icon: FaDatabase, label: "PL/SQL", color: "#cc0000", tooltip: "Oracle Procedural Language" },
    ],
  },
  {
    title: "Design & Architecture",
    description: "Concepts and tools for software design:",
    skills: [
      { Icon: AiOutlineCluster, label: "Merise", color: "#2A324B", tooltip: "Design methodology" },
      { Icon: AiOutlineCluster, label: "Merise 2", color: "#2A324B", tooltip: "Advanced Merise" },
      { Icon: FaProjectDiagram, label: "UML", color: "#3A524B", tooltip: "Unified Modeling Language" },
    ],
  },
  {
    title: "Operating Systems",
    description: "Platforms I work with:",
    skills: [
      { Icon: FaWindows, label: "Windows", color: "#00ADEF", tooltip: "Operating system" },
      { Icon: FaLinux, label: "Linux", color: "#FCC624", tooltip: "Operating system" },
      { Icon: FaTerminal, label: "Unix", color: "#81B3A3", tooltip: "Unix-based systems" },
    ],
  },
];
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
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "row", // Stack sections vertically
        alignItems: "center", // Center align content horizontally
        gap: 6, // Space between sections
      }}
    >
      {/* Skills Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800, // Limit the width for better alignment
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              mb: 6,
              textAlign: "center", // Center-align section titles and descriptions
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "", fontWeight: "bold", mb: 2 }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "", mb: 4, fontSize: "1rem" }}
            >
              {section.description}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3, // Space between skill icons
                justifyContent: "center", // Center the icons
              }}
            >
              {section.skills.map(({ Icon, label, color, tooltip }, skillIndex) => (
                <Tooltip key={skillIndex} title={`${label} - ${tooltip}`} arrow>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#fff",
                      borderRadius: "50%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.2s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    <Icon size={30} style={{ color }} />
                  </Box>
                </Tooltip>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Certificates Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800, // Align with the skills section
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "",
            fontWeight: "bold",
            mb: 4,
          }}
        >
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
              }}
            >

              <Lens hovering={hovering} setHovering={setHovering}>
                <CardMedia
                  component="img"
                  alt={cert.title}
                  height="200"
                  image={cert.image}

                /></Lens>

              <CardContent>
                <Typography variant="h6" sx={{ color: "" }}>
                  {cert.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default Competencies;
