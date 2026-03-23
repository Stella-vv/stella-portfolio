// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu'; // 🚀 引入汉堡菜单图标

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(5, 8, 22, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        py: 0.5, 
      }}
    >
      <Box sx={{ width: '95%', mx: 'auto' }}> 
        <Toolbar disableGutters>
          
          <CodeIcon sx={{ display: 'flex', mr: 1, color: '#915EFF', fontSize: '2.5rem' }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: { xs: 1, lg: 0 }, // 🚀 手机端让标题撑开空间
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.6rem'
            }}
          >
            Stella Xiong
          </Typography>

          {/* 🚀 手机端汉堡菜单 */}
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', lg: 'none' } }}
              PaperProps={{
                sx: { backgroundColor: '#151030', color: 'white', border: '1px solid #915EFF' }
              }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.name} onClick={handleCloseNavMenu} component="a" href={`#${item.id}`}>
                  <Typography textAlign="center" sx={{ fontWeight: 'bold' }}>{item.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }} />

          {/* 桌面端菜单栏 */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4 }}> 
            {navItems.map((item) => (
              <Button
                key={item.name}
                component="a"
                href={`#${item.id}`} 
                sx={{ 
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.2rem', 
                  textTransform: 'none',
                  '&:hover': { color: '#915EFF', background: 'transparent' } 
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;