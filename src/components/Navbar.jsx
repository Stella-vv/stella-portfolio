// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MenuIcon from '@mui/icons-material/Menu'; 

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
        // 💻 电脑端压缩高度，📱 手机端也稍微收紧
        py: { xs: 0.2, lg: 0 }, 
      }}
    >
      {/* 🚀 核心修改：将手机端 width 从 95% 提高到 98%，缩小两侧边距 */}
      <Box sx={{ 
        width: { xs: '98%', lg: '95%' }, 
        mx: 'auto' 
      }}> 
        <Toolbar disableGutters sx={{ minHeight: { xs: '56px', lg: '56px' } }}>
          
          {/* 🚀 手机端图标也缩小一点点 (2.5rem -> 2.2rem) */}
          <CodeIcon sx={{ 
            display: 'flex', 
            mr: 1, 
            color: '#915EFF', 
            fontSize: { xs: '2.2rem', lg: '1.8rem' } 
          }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              flexGrow: { xs: 1, lg: 0 }, 
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: { xs: '.05rem', lg: '.05rem' },
              color: 'white',
              textDecoration: 'none',
              // 🚀 手机端名字字号缩小 (1.6rem -> 1.4rem)
              fontSize: { xs: '1.4rem', lg: '1.2rem' }
            }}
          >
            Stella Xiong
          </Typography>

          {/* 🚀 手机端汉堡菜单 */}
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ p: 1 }} // 缩小按钮内边距
            >
              <MenuIcon fontSize="medium" /> {/* 🚀 图标改为 medium 更精致 */}
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
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 2 }}> 
            {navItems.map((item) => (
              <Button
                key={item.name}
                component="a"
                href={`#${item.id}`} 
                sx={{ 
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.1rem', 
                  textTransform: 'none',
                  px: 1,
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