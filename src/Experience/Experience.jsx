import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

import { 
  SectionContainer, 
  ExperienceCard, 
  TimelineDot, 
  TimelineLine 
} from './Experience_styles';

const experiences = [
  {
    id: 1,
    role: 'Store Team Member',
    company: 'Woolworths',
    date: 'May 2025 - Present',
    points: [
      'Assisted customers at self-checkout stations and managed manual checkout operations, ensuring accurate and efficient payment processing.',
      'Prepared and packed online orders with a strong focus on accuracy, speed, and presentation quality.',
      'Collaborated with team members in a fast-paced retail environment to maintain smooth store operations and customer satisfaction.'
    ]
  },
  {
    id: 2,
    role: 'Operation and Maintenance Intern',
    company: 'Suzhou Pengyu Micro-Grid Technology Co. Ltd',
    date: 'March 2022 - June 2022',
    points: [
      'Maintained daily website operations and system stability, handling emergency incidents, bug fixes, and routine security checks in a production environment.',
      'Diagnosed and resolved website issues through debugging and basic security assessments, improving incident response efficiency.',
      'Collected and analyzed user experience feedback to support website optimization and usability improvements.'
    ]
  },
];

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
          
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 5 } }}>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 3, 
            mb: 2 
          }}>
            
            <Box sx={{ 
              height: '2px', 
              width: { xs: '40px', md: '80px' },
              background: 'linear-gradient(to right, transparent, #915EFF)',
              borderRadius: '2px'
            }} />

            <Typography
              variant="overline"
              sx={{ 
                color: '#915EFF', 
                letterSpacing: '0.2rem', 
                fontWeight: '900',
                fontSize: { xs: '1rem', md: '1.1rem' },
                textTransform: 'uppercase'
              }}
            >
              Work 
            </Typography>

            {/* 右侧渐变线 */}
            <Box sx={{ 
              height: '2px', 
              width: { xs: '40px', md: '80px' }, 
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
              fontSize: { xs: '2.8rem', md: '3.8rem', lg: '4.5rem' } 
            }}
          >
            Work <span style={{ color: '#915EFF' }}>Experience</span>
          </Typography>
        </Box>

        {/* 时间轴内容 */}
        <Box sx={{ maxWidth: '900px', mx: 'auto', position: 'relative', pl: { xs: 7, md: 8 } }}>
          
          {experiences.map((exp, index) => (
            <Box key={exp.id} sx={{ mb: { xs: 6, md: 5 }, position: 'relative' }}> 
              
              <TimelineLine sx={{ 
                background: index === experiences.length - 1 
                  ? 'linear-gradient(to bottom, #915EFF, transparent)' 
                  : '#915EFF' 
              }} />
              
              <TimelineDot />

              <ExperienceCard>
                <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', lg: 'center' }} mb={1.5}>
                  <Box>
                     <Typography variant="h4" sx={{ 
                       color: 'white', 
                       fontWeight: 700, 
                       fontSize: { xs: '1.4rem', md: '1.25rem' }, 
                       mb: 0.5 
                     }}>
                        {exp.role}
                     </Typography>
                     <Typography variant="h6" sx={{ 
                       color: '#fff', 
                       fontSize: { xs: '0.95rem', md: '0.9rem' }, 
                       fontWeight: 500, 
                       display: 'flex', 
                       alignItems: 'center', 
                       gap: 1 
                     }}>
                        <WorkIcon sx={{ color: '#915EFF', fontSize: '1.1rem' }} /> {exp.company}
                     </Typography>
                  </Box>
                  
                  {/* 日期标签 */}
                  <Box sx={{ 
                      mt: { xs: 1.5, lg: 0 },
                      px: 2, py: 0.5, 
                      borderRadius: '20px', 
                      border: '1px solid rgba(145, 94, 255, 0.2)',
                      color: '#aaa6c3',
                      fontSize: '0.8rem', 
                      fontWeight: 600,
                      background: 'rgba(145, 94, 255, 0.05)',
                      whiteSpace: 'nowrap'
                  }}>
                      {exp.date}
                  </Box>
                </Stack>

                {/* 工作详情列表 */}
                <Box component="ul" sx={{ m: 0, pl: 2, color: '#aaa6c3' }}>
                  {exp.points.map((point, i) => (
                    <Typography 
                      component="li" 
                      key={i} 
                      variant="body2" 
                      sx={{ 
                        mb: 0.8, 
                        lineHeight: 1.6, 
                        fontSize: { xs: '1rem', md: '0.92rem' },
                        '&::marker': { color: '#915EFF' } 
                      }}
                    >
                      {point}
                    </Typography>
                  ))}
                </Box>
              </ExperienceCard>
            </Box>
          ))}
        </Box>

      </Container>
    </SectionContainer>
  );
};

export default Experience;