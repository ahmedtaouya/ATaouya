"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { CardBody, CardContainer } from "./ui/3d-card";
// import { MacbookScroll } from "./ui/macbook-scroll";
import { Compare } from "./ui/compare";



function Me() {
  
  return (
    <Container maxWidth="lg">
        <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row" }}
    alignItems="center"
    justifyContent="space-between"
    
  >
    {/* Left Section: Scroll Animation */}
    <Box
  
  >
    {/* <MacbookScroll /> */}
    <Compare
              firstImage="/images/cv.jpg"
              secondImage="/images/cv2.jpg"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[300px] w-[300px] md:h-[500px] md:w-[750px]"
              slideMode="hover"
            />
  </Box>


    {/* Right Section: Developer Info */}
    <Box
    flex={10}
    sx={{ marginLeft: 4 }} // Add spacing on the left
  >
      <CardContainer className="inter-var">
      <CardBody
  className="bg-[rgba(0,0,0,0.4)] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border w-auto rounded-xl p-6"
>
  <Typography
    variant="h4"
    component="h1"
    className="text-xl font-bold text-white"
    gutterBottom
  >
    Développeur Full-stack
  </Typography>

  <Typography
    variant="body1"
    className="text-white text-sm max-w-sm"
    sx={{ marginBottom: 2 }}
  >
    Passionné par l'innovation et les technologies modernes, je suis
    un développeur polyvalent, avec une expertise en développement
    web et en conception de logiciels. Actuellement en 3ème année
    d’ingénierie informatique et réseaux à l’EMSI.
  </Typography>

  <Typography
    variant="body1"
    className="text-white text-sm max-w-sm"
    sx={{ marginBottom: 2 }}
  >
    Mon expérience inclut des projets ambitieux, ainsi que la
    participation à un hackathon, où j'ai remporté la première
    place grâce à une solution innovante développée en équipe.
  </Typography>

  <Typography
    variant="body1"
    className="text-white text-sm max-w-sm"
    sx={{ marginBottom: 2 }}
  >
    Mon esprit d’analyse, ma capacité à résoudre des problèmes
    complexes et mon goût pour le travail collaboratif me permettent
    de m’épanouir dans des environnements dynamiques. Toujours à
    l’affût des nouvelles technologies, je m'investis également dans
    des projets personnels, afin d'améliorer en continu mes
    compétences techniques et ma créativité.
  </Typography>
</CardBody>

          </CardContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default Me;
