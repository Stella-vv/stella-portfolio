// src/Projects/Projects.jsx
import React, { useState } from 'react';
import { 
  Box, Typography, Container, Grid, CardContent, 
  Dialog, IconButton 
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';

import { projectsData } from '../data/projects';
import {
  SectionContainer, ProjectCard, ImageContainer, StyledImage,
  OverlayBadge, TechTag, ActionButton
} from './Projects_styles';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProject?.screenshots) {
      setCurrentImgIndex((prev) => (prev + 1) % currentProject.screenshots.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (currentProject?.screenshots) {
      setCurrentImgIndex((prev) => (prev - 1 + currentProject.screenshots.length) % currentProject.screenshots.length);
    }
  };

  const handleOpen = (project) => {
    setCurrentProject(project);
    setCurrentImgIndex(0);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <SectionContainer id="projects">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        
        {/* 顶部标题区 - 保持适配 80% 缩放 */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3, mb: 1 }}>
            <Box sx={{ height: '2px', width: { xs: '40px', md: '60px' }, background: 'linear-gradient(to right, transparent, #915EFF)', borderRadius: '2px' }} />
            <Typography variant="overline" sx={{ color: '#915EFF', letterSpacing: '0.2rem', fontWeight: '900', fontSize: { xs: '0.85rem', md: '1rem' }, textTransform: 'uppercase' }}>
              Experience
            </Typography>
            <Box sx={{ height: '2px', width: { xs: '40px', md: '60px' }, background: 'linear-gradient(to left, transparent, #915EFF)', borderRadius: '2px' }} />
          </Box>

          <Typography variant="h2" sx={{ color: 'white', fontWeight: 900, mb: 2, fontSize: { xs: '2.8rem', md: '3.2rem', lg: '3.8rem' } }}>
            <span style={{ color: '#915EFF' }}>Projects</span> That Matter
          </Typography>
          
          <Typography 
          variant="body1" 
          sx={{ 
            color: '#a1a1aa', 
            maxWidth: '800px', 
            mx: 'auto', 
            fontSize: { xs: '1rem', md: '1rem' }, 
            lineHeight: 1.5,
            // 🚀 在这里调整或添加底部边距
            mb: { xs: 1, md: 6 } 
          }}
        >
            Each project represents a journey of problem-solving and creative development.
          </Typography>
        </Box>

        {/* 卡片网格 */}
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {projectsData.map((project) => (
            <Grid key={project.id} item xs={12} sm={6} md={4}>
              <ProjectCard>
                <ImageContainer>
                  <StyledImage src={project.image} alt={project.title} />
                  <OverlayBadge position="bottom-left">{project.year}</OverlayBadge>
                </ImageContainer>

                <CardContent sx={{ p: { xs: 4, md: 2 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, fontSize: { xs: '1.8rem', md: '1.2rem' }, mb: 1 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#a1a1aa', mb: 2, lineHeight: 1.4, fontSize: { xs: '1.1rem', md: '0.85rem' } }}>
                      {project.description}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mb: 2, minHeight: { xs: 'auto', md: '70px' } }}>
                    {project.tags.map((tag) => (
                      <TechTag key={tag}>{tag}</TechTag>
                    ))}
                  </Box>

                  <ActionButton variant="primary" fullWidth startIcon={<VisibilityIcon sx={{ fontSize: '1.1rem' }} />} onClick={() => handleOpen(project)}>
                    View Details
                  </ActionButton>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 弹窗部分 */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="lg" 
        PaperProps={{ 
          sx: { 
            background: 'linear-gradient(145deg, #27272a 0%, #09090b 100%)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '20px',
            overflowX: 'hidden',
          } 
        }}
      >
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 12, top: 12, color: '#a1a1aa', zIndex: 10, '&:hover': { color: '#fff' } }}>
          <CloseIcon />
        </IconButton>

        {currentProject && (
          <Box sx={{ p: { xs: 2, md: 4 }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 3, fontWeight: 700, fontSize: { xs: '1.8rem', md: '1.6rem' } }}>
              {currentProject.title}
            </Typography>

            <Box sx={{ position: 'relative', mb: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              {currentProject.screenshots?.length > 1 && (
                <IconButton onClick={prevImage} sx={{ position: 'absolute', left: 10, zIndex: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.5)' }}>
                  <ArrowBackIosNewIcon />
                </IconButton>
              )}

                  {/* 🚀 图片滚动容器 - 高亮灰色滑块版 */}
                  <Box sx={{
                      width: 'fit-content',
                      maxWidth: '100%',
                      maxHeight: { xs: '50vh', md: '55vh' }, 
                      overflowY: 'auto', 
                      borderRadius: '12px',
                      bgcolor: '#09090b',
                      mx: 'auto',
                      display: 'inline-block',
                      boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                      
                      // 1. 滚动条整体宽度
                      '&::-webkit-scrollbar': { 
                        width: '6px', 
                      },
                      
                      // 2. 滚动轨道 (保持透明)
                      '&::-webkit-scrollbar-track': { 
                        background: 'transparent' 
                      },
                      
                      // 3. 🚀 核心修改：高亮灰色滑块
                      '&::-webkit-scrollbar-thumb': { 
                          backgroundColor: '#555555', // 🚀 使用中灰色，不再刺眼
                          borderRadius: '10px',
                          // 去掉明显的白边，改用极淡的描边
                          border: '1px solid rgba(255, 255, 255, 0.1)', 
                          
                          '&:hover': { 
                            backgroundColor: '#777777', // 🚀 hover 时稍微变亮一点点作为反馈
                          }
                        }
                      }}>

                  <Box 
                    component="img" 
                    src={currentProject.screenshots[currentImgIndex]} 
                    sx={{ 
                      maxWidth: { xs: '100%', md: '800px' },
                      height: 'auto', 
                      display: 'block' 
                    }} 
                  />
              </Box>

              {currentProject.screenshots?.length > 1 && (
                <IconButton onClick={nextImage} sx={{ position: 'absolute', right: 10, zIndex: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.5)' }}>
                  <ArrowForwardIosIcon />
                </IconButton>
              )}
            </Box>

            {/* 🚀 找回页码：图片计数器 */}
            {currentProject.screenshots?.length > 1 && (
              <Typography variant="caption" sx={{ color: '#a1a1aa', display: 'block', mb: 1, fontSize: '0.85rem' }}>
                {currentImgIndex + 1} / {currentProject.screenshots.length}
              </Typography>
            )}

            <Box sx={{ textAlign: 'left', mt: 3, px: { xs: 1, md: 4 }, pb: 2, width: '100%', maxWidth: '800px' }}>
              <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 800 }}>Key Features:</Typography>
              <Box 
                component="ul" 
                sx={{ 
                  paddingLeft: '20px', 
                  color: '#d4d4d8', 
                  '& li::marker': {
                    color: 'rgba(145, 94, 255, 0.7)',
                    fontSize: '1.2rem'
                  }
                }}
              >
                {currentProject.features.map((feature, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <Typography variant="body2" sx={{ fontSize: '1rem', lineHeight: 1.6 }}>{feature}</Typography>
                  </li>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Dialog>
    </SectionContainer>
  );
};

export default Projects;