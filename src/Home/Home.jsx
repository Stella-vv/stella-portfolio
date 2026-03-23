import React from 'react';
import { Box, Typography, Button, Stack, Chip } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{ 
      minHeight: { xs: '80vh', md: '100vh' }, 
      pt: { xs: 12, md: 0 }, 
      pb: { xs: 8, md: 0 },
      width: '100%',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      bgcolor: 'transparent',
      position: 'relative',
      overflow: 'hidden',
      px: { xs: 2, sm: 4 }, // 🚀 把左右内边距提上来，放在最外层
      boxSizing: 'border-box'
    }}>
      
      <Box sx={{ 
        width: '100%', 
        // 🚀 调整：在电脑端稍微收窄最大宽度，防止文字在 80% 缩放时拉得太长
        maxWidth: { xs: '100%', md: '800px', lg: '1000px' }, 
        textAlign: 'center',
        zIndex: 1,
      }}>
          
      <Chip 
          label="✨ Available for all opportunities" 
          sx={{ 
            bgcolor: 'rgba(145, 94, 255, 0.1)', 
            color: '#e2d4ff', 
            border: '1px solid rgba(145, 94, 255, 0.2)',
            fontWeight: 600,
            fontSize: { xs: '0.85rem', sm: '1rem' },
            borderRadius: '50px',
            height: 'auto',
            py: { xs: 1, sm: 1.5 },
            px: { xs: 1.5, sm: 3 },
            mb: 4,
            boxShadow: '0 0 15px rgba(145, 94, 255, 0.2)',
            // 强制允许内部文字换行，打断“帐篷效应”
            '& .MuiChip-label': { 
              padding: { xs: '4px 8px', sm: '0' }, 
              whiteSpace: 'normal', 
              textAlign: 'center',
              lineHeight: 1.4
            }
          }} 
        />

        <Typography variant="h1" sx={{ 
          fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' }, 
          color: 'white', 
          mb: 2, 
          fontWeight: 900,
          lineHeight: 1.1, 
          letterSpacing: '-0.02em'
        }}>
          <Box component="span" sx={{ 
            background: 'linear-gradient(to right, #915EFF, #FF6B6B)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block',
          }}>
            Full Stack
          </Box>
            <br />
            Developer
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: '#aaa6c3', 
          mb: { xs: 4, md: 6 }, 
          // 🚀 调整：电脑端正文字号从 1.6rem 缩小到 1.25rem
          fontSize: { xs: '1rem', md: '1.25rem' }, 
          lineHeight: 1.6,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          I craft exceptional digital experiences with modern technologies, building scalable applications from concept to deployment.
        </Typography>
        
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          spacing={2.5} 
          justifyContent="center" 
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Button 
            component="a"
            href="#projects"
            variant="contained" 
            size="large" 
            sx={{ 
              width: { xs: '100%', sm: 'auto' }, // 手机端按钮宽度 100%
              bgcolor: '#915EFF', 
              borderRadius: '50px', 
              px: 5, 
              py: 1.5,
              fontSize: { xs: '1.2rem', md: '1.1rem' },
              fontWeight: 'bold',
              boxShadow: '0 0 30px rgba(145, 94, 255, 0.4)',
              '&:hover': { bgcolor: '#7c46e0' } 
            }}>
            View My Experience
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            component="a"
            href="mailto:stellaxiong420@outlook.com"
            sx={{ 
              width: { xs: '100%', sm: 'auto' }, // 手机端按钮宽度 100%
              color: 'white', 
              borderColor: 'rgba(255,255,255,0.2)', 
              borderRadius: '50px',
              px: 5,
              py: 1.5,
              fontSize: { xs: '1.2rem', md: '1.1rem' },
              '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } 
            }}
          >
            Contact Me
          </Button>
        </Stack>

      </Box>
    </Box>
  );
};

export default Profile;