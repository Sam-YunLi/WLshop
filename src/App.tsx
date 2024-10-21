import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import Contact from './pages/Contact';

const App: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDrawer = (open: boolean) => () => {
      setDrawerOpen(open);
    };
  
    // Custom Link wrapper to handle ref forwarding for MUI's ListItem
    const CustomLink = React.forwardRef<HTMLAnchorElement, { to: string }>((props, ref) => (
      <Link ref={ref} {...props} />
    ));
  
    return (
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} sx={{ display: { xs: 'block', sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              按摩店名字
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
  
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={CustomLink} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={CustomLink} to="/services" onClick={toggleDrawer(false)}>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button component={CustomLink} to="/about" onClick={toggleDrawer(false)}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={CustomLink} to="/contact" onClick={toggleDrawer(false)}>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
  
        <Box component="main" sx={{ marginTop: 8, padding: 3 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
    );
  };
  

export default App;