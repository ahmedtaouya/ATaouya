import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField, Button } from "@mui/material";
import { FaSearchLocation, FaPhone, FaMailBulk } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../i18n";
// import ".next/server/app/api/sendmail";

const Footer = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch("/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setSuccess(false);
    }
  } catch (error) {
    console.error("Error sending email:", error);
    setSuccess(false);
  } finally {
    setLoading(false);
  }
};


  return (
    <Box sx={{ bgcolor: "transparent", py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          {/* Contact Information Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.4)", p: 4, borderRadius: "10px", boxShadow: 3 }}>
              <Typography variant="h6" mb={2} sx={{ color: "white" }}>
                {t("contactInfo")}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" display="flex" alignItems="center" gap={1} sx={{ color: "white" }}>
                  <FaSearchLocation size={20} color="white" />
                  {t("location")}
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" display="flex" alignItems="center" gap={1} sx={{ color: "white" }}>
                  <FaPhone size={20} />
                  {t("phone")}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" display="flex" alignItems="center" gap={1} sx={{ color: "white" }}>
                  <FaMailBulk size={20} />
                  {t("email")}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Get in Touch Form */}
          <Grid item xs={12} md={6}>
            <Box component="form" onSubmit={handleSubmit} sx={{ bgcolor: "rgba(0, 0, 0, 0.4)", p: 4, borderRadius: "10px", boxShadow: 3 }}>
              <Typography variant="h6" mb={2} sx={{ color: "white" }}>
                {t("getInTouch")}
              </Typography>
              <TextField
                fullWidth
                label={t("name")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                label={t("emailLabel")}
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                fullWidth
                label={t("message")}
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                required
                sx={{
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <Button variant="contained" color="primary" fullWidth type="submit" disabled={loading}>
                {loading ? t("sending") : t("submit")}
              </Button>
              {success !== null && (
                <Typography mt={2} sx={{ color: success ? "green" : "red" }}>
                  {success ? t("messageSent") : t("messageError")}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;