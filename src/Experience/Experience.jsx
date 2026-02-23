// src/Experience/Experience.jsx
import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work'; // 使用公文包图标

import { 
  SectionContainer, 
  ExperienceCard, 
  TimelineDot, 
  TimelineLine 
} from './Experience_styles';

// 工作经历数据 (提取自你的图片，按时间倒序排列)
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
  {
    id: 3,
    role: 'Software Testing Intern',
    company: 'Ningxia Zhongxiong Technology Co.Ltd',
    date: 'December 2021 - March 2022',
    points: [
      'Designed and executed test cases based on detailed product requirements, ensuring functional correctness before release.',
      'Reported defects using bug tracking systems and prepared structured test reports for cross-team review.',
      'Optimized and maintained test cases to improve testing efficiency, coverage, and overall test cycles.'
    ]
  }
];

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        
        {/* 顶部标题：保持与 Education/Skills 一致的渐变线条风格 */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 2 }}>
            <Box sx={{ height: '2px', width: { xs: '40px', md: '100px' }, background: 'linear-gradient(to right, transparent, #915EFF)', borderRadius: '2px' }} />
            <Typography
              variant="overline"
              sx={{ color: '#915EFF', letterSpacing: '0.2rem', fontWeight: '900', fontSize: { xs: '1rem', md: '1.2rem' }, textTransform: 'uppercase' }}
            >
              Work
            </Typography>
            <Box sx={{ height: '2px', width: { xs: '40px', md: '100px' }, background: 'linear-gradient(to left, transparent, #915EFF)', borderRadius: '2px' }} />
          </Box>

          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' }
            }}
          >
            Work <span style={{ color: '#915EFF' }}>Experience</span>
          </Typography>
        </Box>

        {/* 时间轴内容 */}
        <Box sx={{ maxWidth: '1000px', mx: 'auto', position: 'relative', pl: { xs: 4, md: 8 } }}>
          
          {experiences.map((exp, index) => (
            <Box key={exp.id} sx={{ mb: 8, position: 'relative' }}>
              
              {/* 连接线 */}
              <TimelineLine sx={{ 
                background: index === experiences.length - 1 
                  ? 'linear-gradient(to bottom, #915EFF, transparent)' 
                  : '#915EFF' 
              }} />
              
              {/* 圆点 */}
              <TimelineDot />

              {/* 卡片 */}
              <ExperienceCard>
                <Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', lg: 'center' }} mb={2}>
                  <Box>
                     <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, fontSize: '1.5rem', mb: 1 }}>
                        {exp.role}
                     </Typography>
                     <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <WorkIcon sx={{ color: '#915EFF', fontSize: '1.2rem', mr: 1 }} /> {exp.company}
                     </Typography>
                  </Box>
                  
                  {/* 日期 */}
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
                      {exp.date}
                  </Box>
                </Stack>

                {/* 工作详情列表 */}
                <Box component="ul" sx={{ m: 0, pl: 2, color: '#aaa6c3' }}>
                  {exp.points.map((point, i) => (
                    <Typography 
                      component="li" 
                      key={i} 
                      variant="body1" 
                      sx={{ 
                        mb: 1, 
                        lineHeight: 1.8, 
                        fontSize: '1.1rem',
                        '&::marker': { color: '#915EFF' } // 让列表前的圆点变成紫色
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