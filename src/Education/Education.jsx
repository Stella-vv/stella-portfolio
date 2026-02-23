import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School'; 

import { 
  SectionContainer, 
  EducationCard, 
  TimelineDot, 
  TimelineLine 
} from './Education_styles';

const educationData = [
  {
    id: 1,
    degree: 'Master of Information Technology',
    school: 'UNIVERSITY OF NEW SOUTH WALES',
    date: 'January 2024 - September 2025',
    description: 'Specialized in advanced software engineering and AI systems. Developed strong skills in full-stack development and cloud computing.',
  },
  {
    id: 2,
    degree: 'Bachelor of Network Engineering',
    school: 'SICHUAN NORMAL UNIVERSITY',
    date: 'September 2018 - June 2022',
    description: 'Built a solid foundation in computer science, networking protocols, and system architecture. Graduated with honors.',
  }
];

const Education = () => {
  return (
    <SectionContainer id="education">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        
        {/* 顶部标题区 */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 3, 
            mb: 2 
          }}>
            
            <Box sx={{ 
              height: '2px', 
              width: { xs: '40px', md: '100px' }, 
              background: 'linear-gradient(to right, transparent, #915EFF)',
              borderRadius: '2px'
            }} />

            <Typography
              variant="overline"
              sx={{ 
                color: '#915EFF', 
                letterSpacing: '0.2rem', 
                fontWeight: '900',
                fontSize: { xs: '1rem', md: '1.2rem' }, 
                textTransform: 'uppercase'
              }}
            >
              MY JOURNEY
            </Typography>

            <Box sx={{ 
              height: '2px', 
              width: { xs: '40px', md: '100px' }, 
              background: 'linear-gradient(to left, transparent, #915EFF)', 
              borderRadius: '2px'
            }} />
          </Box>

          {/* 大标题 */}
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' } 
            }}
          >
            <span style={{ color: '#915EFF' }}>Education</span> History
          </Typography>
        </Box>

        {/* 时间轴主体 (保持不变) */}
        <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative', pl: { xs: 4, md: 8 } }}>
          
          {educationData.map((item, index) => (
            <Box key={item.id} sx={{ mb: 8, position: 'relative' }}>
              
              <TimelineLine sx={{ 
                background: index === educationData.length - 1 
                  ? 'linear-gradient(to bottom, #915EFF, transparent)' 
                  : '#915EFF' 
              }} />
              
              <TimelineDot />

              <EducationCard>
                <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', lg: 'center' }} mb={2}>
                  <Box>
                     <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, fontSize: '1.5rem', mb: 1 }}>
                        {item.degree}
                     </Typography>
                     <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <SchoolIcon sx={{ color: '#915EFF' }} /> {item.school}
                     </Typography>
                  </Box>
                  
                  <Box sx={{ 
                      mt: { xs: 2, lg: 0 },
                      px: 2, py: 0.5, 
                      borderRadius: '20px', 
                      border: '1px solid rgba(145, 94, 255, 0.3)',
                      color: '#aaa6c3',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      background: 'rgba(145, 94, 255, 0.05)',
                      whiteSpace: 'nowrap'
                  }}>
                      {item.date}
                  </Box>
                </Stack>

                <Typography variant="body1" sx={{ color: '#aaa6c3', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {item.description}
                </Typography>
              </EducationCard>
            </Box>
          ))}
        </Box>

      </Container>
    </SectionContainer>
  );
};

export default Education;