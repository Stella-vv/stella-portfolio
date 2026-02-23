// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = () => {
  // 🚀 补全所有页面的跳转链接，确保每个页面都能点击跳转
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: 'rgba(5, 8, 22, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        py: 0.5, // 保持导航栏厚度
      }}
    >
      {/* 保持 90% 宽度和最初的布局 */}
      <Box sx={{ width: '95%', mx: 'auto' }}> 
        <Toolbar disableGutters>
          
          {/* Logo 图标保持 2.5rem 大小 */}
          <CodeIcon sx={{ display: 'flex', mr: 1, color: '#915EFF', fontSize: '2.5rem' }} />
          
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.1rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '1.6rem' // 🚀 恢复最初的大字号
            }}
          >
            Stella Xiong
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* 菜单项部分 - 字号加大，gap 稍微调整以容纳 6 个选项 */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 4 }}> 
            {navItems.map((item) => (
              <Button
                key={item.name}
                component="a"
                href={`#${item.id}`} // 绑定到 App.jsx 中的对应 ID
                sx={{ 
                  color: 'white',
                  fontWeight: 500,
                  fontSize: '1.2rem', // 🚀 字号加大 (比之前的 1.1rem 明显更大)
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