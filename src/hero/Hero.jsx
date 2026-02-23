import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; 
import { 
  CodePaper, 
  Keyword, 
  StringColor, 
  FuncColor, 
  PropColor, 
  NumColor 
} from './Hero_styles';

const Hero = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'flex-start', 
      justifyContent: 'center',
      bgcolor: 'transparent',
      pt: { xs: 20, md: 25 }, 
      pb: 10 
    }}>
      <Box sx={{ width: '86%', mx: 'auto' }}> 
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          alignItems="center" 
          justifyContent="space-between" 
          gap={{ xs: 8, md: 10 }} 
          sx={{ width: '100%' }}
        >
          
          <Box sx={{ flex: 1.2, maxWidth: '850px', display: 'flex', flexDirection: 'column' }}>
            
            <Typography variant="h6" sx={{ 
              color: '#915EFF', 
              fontWeight: 'bold', 
              mb: 3, 
              fontSize: '1.2rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Who am I
            </Typography>
            
            <Typography variant="h1" sx={{ 
              fontSize: { xs: '3.5rem', md: '5.5rem', lg: '7rem' },
              color: 'white', 
              mb: 4, 
              fontWeight: 900,
              lineHeight: 1.1, 
            }}>
              About me <br />
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: '#aaa6c3', 
              mb: 3, 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.8,
              maxWidth: '95%'
            }}>
              I transform ideas into digital reality through clean code, thoughtful design, and innovative solutions that create real impact and drive meaningful change.
            </Typography>

            <Typography variant="body1" sx={{ 
              color: '#aaa6c3', 
              mb: 6, 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              lineHeight: 1.8,
              maxWidth: '95%'
            }}>
              As a passionate full-stack developer based in Australia, I specialize in turning complex challenges into elegant solutions that deliver real value.
            </Typography>
            
            
            <Stack direction="row" spacing={4}>

            <Button 
              variant="contained" 
              size="large" 
              component="a"       
              href="/CV_Stella Xiong.pdf" 
              target="_blank"       
              rel="noopener noreferrer"
              startIcon={<DownloadIcon sx={{ fontSize: '1.5rem' }} />} 
              sx={{ 
                bgcolor: '#915EFF', 
                borderRadius: '50px', 
                px: 6, 
                py: 1.8,
                fontSize: '1.3rem', 
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: '0 0 25px rgba(145, 94, 255, 0.5)',
                '&:hover': { bgcolor: '#7c46e0' } 
              }}
            >
              Get My CV
            </Button>

            </Stack>
          </Box>

          <Box sx={{ flex: 1.2, width: '100%', display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}>
            <CodePaper elevation={12} sx={{ 
              transform: { lg: 'scale(1.02)' },
              transition: 'transform 0.3s ease',
              '&:hover': { transform: { lg: 'scale(1.05)' } }
            }}>
              <Box sx={{ mt: 2, lineHeight: 1.7, fontSize: { xs: '0.9rem', md: '1.15rem' }, textAlign: 'left', fontWeight: 500 }}>
        
                <div><Keyword>const</Keyword> <FuncColor>dev</FuncColor> = {'{'}</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>name</PropColor>: <StringColor>'Stella Xiong'</StringColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>age</PropColor>: <NumColor>25</NumColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>role</PropColor>: <StringColor>'Full-Stack Developer'</StringColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>skills</PropColor>: [<StringColor>'Frontend'</StringColor>, <StringColor>'Backend'</StringColor>, <StringColor>'Database'</StringColor>, <StringColor>'Figma'</StringColor>]</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>quickLearner</PropColor>: <Keyword>true</Keyword>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>problemSolver</PropColor>: <Keyword>true</Keyword>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>hireable</PropColor>: <Keyword>function</Keyword>() {'{'}</div>
                <div style={{ paddingLeft: '40px' }}><Keyword>return</Keyword> (this.quickLearner && this.problemSolver && this.skills.length &gt;= 3);</div>
                <div style={{ paddingLeft: '20px' }}>{'}'},</div>
                <div>{'};'}</div>
              </Box>
            </CodePaper>
          </Box>

        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;