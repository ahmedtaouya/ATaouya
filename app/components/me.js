"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { CardBody, CardContainer } from "./ui/3d-card";
import { Compare } from "./ui/compare";
import { useTranslation } from "react-i18next";
import "../i18n";

function Me() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: 0, md:0 } }}>
      <Box
        display="flex"
         flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        <Box sx={{ 
          width: '40%', 
          maxWidth: { xs: '100%', md: '100%' },
          paddingLeft: { xs: 1, md: 8 }
        }}>
          <CardContainer className="inter-var">
            <CardBody className="bg-[rgba(0,0,0,0.4)] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border w-[500px] rounded-xl p-4">
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: 2
                }}
              >
                {t("title")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  color: 'white',
                  marginBottom: 2,
                  maxWidth: '100%'
                }}
              >
                {t("description1")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  color: 'white',
                  marginBottom: 2,
                  maxWidth: '100%'
                }}
              >
                {t("description2")}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  color: 'white',
                  marginBottom: 2,
                  maxWidth: '100%'
                }}
              >
                {t("description3")}
              </Typography>
            </CardBody>
          </CardContainer>
        </Box>
       
        <Box sx={{ 
          width: '100%', 
          maxWidth: { xs: '300px', md: '560px' },
          marginBottom: { xs: 4, md: 0 }
        }}>
          <Compare
            firstImage="/images/cv.jpg"
            secondImage="/images/cv2.jpg"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="h-[300px] w-[300px] md:h-[500px] md:w-[750px]"
            slideMode="hover"
          />
        </Box>

        
        
      </Box>
    </Container>
  );
}

export default Me;