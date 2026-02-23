import React from 'react';
import { Box, Typography, Button, Stack, Chip } from '@mui/material';

const Profile = () => {
  return (
    <Box sx={{ 
      height: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',     
      bgcolor: 'transparent',
      position: 'relative',
      overflow: 'hidden'    
    }}>
      
      <Box sx={{ 
        width: '90%', 
        maxWidth: '1200px', 
        textAlign: 'center',
        zIndex: 1 
      }}>
          
        <Chip 
          label="✨ Available for all opportunities" 
          sx={{ 
            bgcolor: 'rgba(145, 94, 255, 0.1)', 
            color: '#915EFF', 
            border: '1px solid rgba(145, 94, 255, 0.2)',
            fontWeight: 600,
            fontSize: '1.1rem',
            borderRadius: '50px',
            height: 'auto',
            py: 1.5,
            px: 3,
            mb: 4,
            boxShadow: '0 0 15px rgba(145, 94, 255, 0.2)',
            '& .MuiChip-label': { padding: 0 }
          }} 
        />

        <Typography variant="h1" sx={{ 
          fontSize: { xs: '3.5rem', md: '6rem', lg: '8rem' }, 
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
          mb: 6, 
          fontSize: { xs: '1.2rem', md: '1.6rem' }, 
          lineHeight: 1.6,
          maxWidth: '800px',
          mx: 'auto'
        }}>
          I craft exceptional digital experiences with modern technologies, building scalable applications from concept to deployment.
        </Typography>
        
        <Stack direction="row" spacing={3} justifyContent="center">
          <Button 
            component="a"
            href="#projects"
            variant="contained" 
            size="large" 
            sx={{ 
              bgcolor: '#915EFF', 
              borderRadius: '50px', 
              px: 5, 
              py: 1.5,
              fontSize: '1.2rem',
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
              color: 'white', 
              borderColor: 'rgba(255,255,255,0.2)', 
              borderRadius: '50px',
              px: 5,
              py: 1.5,
              fontSize: '1.2rem',
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