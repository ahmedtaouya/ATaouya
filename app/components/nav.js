"use client";

import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FormControl, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Flag from "react-world-flags";
import "../i18n";

const drawerWidth = 240;
const navItems = ['Linkedin', 'Github'];

const LanguageSelector = ({ language, handleLanguageChange }) => (
  <FormControl sx={{ 
    mr: { xs: 0, sm: 2 },
    minWidth: { xs: 80, sm: 120 }
  }} size="small">
    <Select
      value={language}
      onChange={handleLanguageChange}
      size="small"
      sx={{
        boxShadow: "none",
        borderRadius: 1,
        borderColor: "rgba(0, 0, 0, 0.23)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        '& .MuiSelect-select': {
          padding: { xs: '8px 12px', sm: '8px 16px' }
        }
      }}
    >
      {[
        { code: "fr", flag: "FR", label: "FR" },
        { code: "en", flag: "US", label: "EN" },
        { code: "ar", flag: "MA", label: "AR" },
      ].map((lang) => (
        <MenuItem key={lang.code} value={lang.code}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2" color="text.primary">
              {lang.label}
            </Typography>
            <Flag code={lang.flag} style={{ width: 24, height: 16 }} />
          </Box>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (event) => {
    const lng = event.target.value;
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img
          src="./images/ah.png"
          alt="Logo"
          style={{ height: '60px' }}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              sx={{ textAlign: 'center' }}
              component="a"
              href={
                item === 'Linkedin' 
                  ? 'https://www.linkedin.com/in/ahmed-taouya-3b3563252/' 
                  : 'https://github.com/ahmedtaouya'
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemText 
                primary={item} 
                primaryTypographyProps={{ 
                  color: 'text.primary',
                  fontWeight: 'medium'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Toolbar sx={{
          minHeight: { xs: 56, sm: 64 },
          paddingX: { xs: 1, sm: 2 }
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center',
              '& img': {
                height: { xs: '70px', sm: '90px' }
              }
            }}
          >
            <img
              src="./images/ah.png"
              alt="Logo"
            />
          </Typography>
          <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 }
          }}>
            <IconButton
              component="a"
              href="https://github.com/ahmedtaouya"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                backgroundColor: 'white', 
                '&:hover': { 
                  backgroundColor: '#1877F2', 
                  '& svg': {
                    color: 'white'
                  }
                },
                padding: { xs: '6px', sm: '8px' },
                marginRight: { xs: '4px', sm: '8px' }
              }}
            >
              <FaGithub size={20} color="#000" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/ahmed-taouya-3b3563252/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                backgroundColor: 'white', 
                '&:hover': { 
                  backgroundColor: '#1DA1F2',
                  '& svg': {
                    color: 'white'
                  }
                },
                padding: { xs: '6px', sm: '8px' },
                marginRight: { xs: '4px', sm: '8px' }
              }}
            >
              <FaLinkedin size={20} color="#000" />
            </IconButton>

            <LanguageSelector 
              language={language}
              handleLanguageChange={handleLanguageChange}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)'
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;