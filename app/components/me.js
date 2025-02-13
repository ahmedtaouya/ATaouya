"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { CardBody, CardContainer } from "./ui/3d-card";
import { Compare } from "./ui/compare";
import { useTranslation } from "react-i18next";
import "../i18n"; // Importation de la configuration i18n

function Me() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Section gauche : animation scroll */}
        <Box>
          <Compare
            firstImage="/images/cv.jpg"
            secondImage="/images/cv2.jpg"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[300px] w-[300px] md:h-[500px] md:w-[750px]"
            slideMode="hover"
          />
        </Box>

        {/* Section droite : informations du développeur */}
        <Box flex={10} sx={{ marginLeft: 4 }}>
          <CardContainer className="inter-var">
            <CardBody className="bg-[rgba(0,0,0,0.4)] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border w-auto rounded-xl p-6">
              <Typography
                variant="h4"
                component="h1"
                className="text-xl font-bold text-white"
                gutterBottom
              >
                {t("title")}
              </Typography>

              <Typography
                variant="body1"
                className="text-white text-sm max-w-sm"
                sx={{ marginBottom: 2 }}
              >
                {t("description1")}
              </Typography>

              <Typography
                variant="body1"
                className="text-white text-sm max-w-sm"
                sx={{ marginBottom: 2 }}
              >
                {t("description2")}
              </Typography>

              <Typography
                variant="body1"
                className="text-white text-sm max-w-sm"
                sx={{ marginBottom: 2 }}
              >
                {t("description3")}
              </Typography>
            </CardBody>
          </CardContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default Me;
