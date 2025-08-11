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
import Button from '@mui/material/Button';
import { FaGithub, FaMailBulk, FaLinkedin } from 'react-icons/fa';
import { FormControl, Select, MenuItem, Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Flag from "react-world-flags";
import "../i18n";
const drawerWidth = 240;
const navItems = ['Linkedin', 'Github'];
const LanguageSelector = ({ language, handleLanguageChange, isMobile }) => (
    <FormControl sx={{ mr: 2 }} size="small">
        <Select
            value={language}
            onChange={handleLanguageChange}
            size="small"
            sx={{
                boxShadow: "none",
                borderRadius: 1,
                bordercolor: "rgba(0, 0, 0, 0.23)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
             
            }}
        >
            {[
                { code: "fr", flag: "FR", label: "FR" },
                { code: "en", flag: "US", label: "EN" },
                { code: "ar", flag: "MA", label: "AR" },
            ].map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body2" color="secondary">
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
            <Typography variant="h6" sx={{ my: 2 }}></Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: '' }}>
            <CssBaseline />
            <AppBar
                component="nav"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Apply background color here
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 3, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h8"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <img
                            src="./images/ah.png"
                            alt="Logo"
                            style={{ height: '90px' }}
                        />
                    </Typography>
                    <IconButton
                        component="a"
                        href="https://github.com/ahmedtaouya"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#1877F2', color: 'white' },
                        center: 'center', justifyContent: 'center' , marginRight: '8px' }}
                    >
                        <FaGithub size={25} color="#000" />
                    </IconButton>
                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/ahmed-taouya-3b3563252/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ backgroundColor: 'white', '&:hover': { backgroundColor: '#1DA1F2', color: 'white' },
                        marginRight: '8px'  }}
                    >
                        <FaLinkedin size={25} color="#000" />
                    </IconButton>


                    {/* Language Selector */}
                    <LanguageSelector 
                        language={language}
                        handleLanguageChange={handleLanguageChange}
                        
                    />

                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
