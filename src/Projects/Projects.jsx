import React, { useState } from 'react';
import { 
  Box, Typography, Container, Grid, CardContent, Stack, 
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
  const [imgIndex, setImgIndex] = useState(0);

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 切换到下一张
  const nextImage = (e) => {
    e.stopPropagation();
    if (currentProject?.screenshots) {
      setCurrentImgIndex((prev) => (prev + 1) % currentProject.screenshots.length);
    }
  };

  // 切换到上一张
  const prevImage = (e) => {
    e.stopPropagation();
    if (currentProject?.screenshots) {
      setCurrentImgIndex((prev) => (prev - 1 + currentProject.screenshots.length) % currentProject.screenshots.length);
    }
  };

  const handleOpen = (project) => {
    setCurrentProject(project);
    setImgIndex(0);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const nextImg = () => {
    setImgIndex((prev) => (prev + 1) % currentProject.screenshots.length);
  };

  const prevImg = () => {
    setImgIndex((prev) => (prev - 1 + currentProject.screenshots.length) % currentProject.screenshots.length);
  };

  return (
    <SectionContainer id="projects">
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
        
        {/* 顶部标题区 - 增加渐变线条样式 */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          
          {/* 🚀 新增：带渐变线条的小标题容器 */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: 3, 
            mb: 2 
          }}>
            {/* 左侧渐变线 */}
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
                fontWeight: '900', // 加重字重匹配其他页面
                fontSize: { xs: '1rem', md: '1.3rem' },
                textTransform: 'uppercase'
              }}
            >
              Experience
            </Typography>

            {/* 右侧渐变线 */}
            <Box sx={{ 
              height: '2px', 
              width: { xs: '40px', md: '100px' }, 
              background: 'linear-gradient(to left, transparent, #915EFF)', 
              borderRadius: '2px' 
            }} />
          </Box>

          {/* 2. 大标题：加大到 lg: 5.5rem */}
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' } // 🟢 匹配 Skills
            }}
          >
            <span style={{ color: '#915EFF' }}>Projects</span> That Matter
          </Typography>
          
          {/* 3. 描述文字：加大到 1.4rem，行高 1.8 */}
          <Typography
            variant="body1"
            sx={{ 
              color: '#a1a1aa', 
              maxWidth: '900px', 
              mx: 'auto', 
              fontSize: { xs: '1rem', md: '1.4rem' }, // 🟢 匹配 Skills
              lineHeight: 1.8 
            }}
          >
            Each project represents a journey of problem-solving and creative development.
          </Typography>
        </Box>

        {/* 卡片网格 (保持之前调好的大尺寸样式) */}
        <Grid container spacing={4} justifyContent="center">
          {projectsData.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              
              <ProjectCard>
                <ImageContainer>
                  <StyledImage src={project.image} alt={project.title} />
                  <OverlayBadge position="bottom-left">{project.year}</OverlayBadge>
                </ImageContainer>

                <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  {/* 🚀 核心修改 1：将标题和描述打包，让这部分自动拉伸去填满剩余空间 */}
                  <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 2 }}>
                      <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, fontSize: '1.8rem' }}>
                        {project.title}
                      </Typography>
                    </Box>

                    {/* 删除了原本写在这里的 flexGrow: 1 */}
                    <Typography variant="body1" sx={{ color: '#a1a1aa', mb: 4, lineHeight: 1.7, fontSize: '1.1rem' }}>
                      {project.description}
                    </Typography>
                  </Box>

                  {/* 🚀 核心修改 2：统一标签区域的高度 */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1.5, 
                    mb: 4, 
                    minHeight: '110px', // 设定足够容纳 3 行标签的高度
                    alignContent: 'flex-start' // 确保所有的标签都从该区域的最上方开始排列
                  }}>
                    {project.tags.map((tag) => (
                      <TechTag key={tag}>{tag}</TechTag>
                    ))}
                  </Box>

                  <ActionButton 
                    variant="primary" 
                    fullWidth 
                    startIcon={<VisibilityIcon />}
                    onClick={() => handleOpen(project)}
                  >
                    View Details
                  </ActionButton>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>

{/* 详情弹窗 */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="lg" 
        PaperProps={{ 
          sx: { 
            background: 'linear-gradient(145deg, #27272a 0%, #09090b 100%)', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            borderRadius: '20px', 
            position: 'relative',
            overflowX: 'hidden', 
            
            // 🚀 修改 1：大幅降低紫色滚动条的透明度，变得极其柔和
            '&::-webkit-scrollbar': { width: '10px' },
            '&::-webkit-scrollbar-track': { background: 'transparent', margin: '12px 0' },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(145, 94, 255, 0.25)', // 透明度降到 0.25，平时几乎是暗灰带点紫
              borderRadius: '10px',
              border: '2px solid transparent', 
              backgroundClip: 'padding-box',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: 'rgba(145, 94, 255, 0.5)', // 鼠标悬停时才微微亮起
              backgroundClip: 'padding-box',
            },
          } 
        }}
      >

        {/* 关闭按钮保持低调的浅灰色 */}
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 12, top: 12, color: '#a1a1aa', zIndex: 10, '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.05)' } }}>
          <CloseIcon />
        </IconButton>

  {currentProject && (
    <Box sx={{ p: 4, textAlign: 'center' }}>

      {/* 2. 项目标题 */}
      <Typography variant="h4" sx={{ color: 'white', mb: 4, fontWeight: 700 }}>
        {currentProject.title}
      </Typography>

      {/* 1. 图片展示区 */}
      <Box sx={{ position: 'relative', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', mx: 'auto' }}>
        
        {/* 上一张按钮 */}
        {currentProject.screenshots?.length > 1 && (
          <IconButton 
            onClick={prevImage}
            sx={{ position: 'absolute', left: 10, zIndex: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        )}

        {/* 🚀 核心修改：新增一个滚动容器 */}
        <Box sx={{
            width: '100%',
            maxWidth: '850px',
            maxHeight: { xs: '60vh', md: '65vh' }, 
            overflowY: 'auto', 
            overflowX: 'hidden',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            bgcolor: '#09090b', // 使用深灰色底板
            
            // 🎨 美化滚动条：解决超出边缘和颜色突兀的问题
            '&::-webkit-scrollbar': { 
              width: '12px', // 稍微加宽一点，给下方的透明边框留出空间
            },
            '&::-webkit-scrollbar-track': { 
              background: 'transparent',
              margin: '8px 0', // 🚀 关键：让滑轨上下留出 8px 的边距，绝对不会再顶破圆角
            },
            '&::-webkit-scrollbar-thumb': { 
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // 换成低调高级的半透明白色
              borderRadius: '10px',
              border: '3px solid transparent', // 🚀 关键：用透明边框把滑块往里挤
              backgroundClip: 'padding-box',   // 让背景色只渲染到内边距，产生“悬浮”的间隙感
            },
            '&::-webkit-scrollbar-thumb:hover': { 
              backgroundColor: 'rgba(255, 255, 255, 0.4)', // 鼠标悬停时稍微变亮
            },
        }}>
            {/* 图片主体 */}
            <Box 
              component="img"
              src={currentProject.screenshots[currentImgIndex]} 
              alt={`${currentProject.title} screenshot`}
              sx={{ 
                width: '100%',   
                height: 'auto',  
                display: 'block',
                borderRadius: '12px' // 确保长图最上方和最下方也有一点圆角过渡
              }} 
            />
        </Box>

        {/* 下一张按钮 */}
        {currentProject.screenshots?.length > 1 && (
          <IconButton 
            onClick={nextImage}
            sx={{ position: 'absolute', right: 10, zIndex: 10, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </Box>

      {/* 显示图片计数 (例如 1 / 3) */}
      {currentProject.screenshots?.length > 1 && (
        <Typography variant="caption" sx={{ color: '#a1a1aa', display: 'block', mb: 2 }}>
          {currentImgIndex + 1} / {currentProject.screenshots.length}
        </Typography>
      )}

      {/* 3. 重点：Key Features 展示部分 */}
{/* 3. 重点：Key Features 展示部分 */}
        <Box sx={{ textAlign: 'left', mt: 4, px: { xs: 1, md: 4 }, pb: 2 }}>
          
          {/* 标题换成亮白色 */}
          <Typography variant="h6" sx={{ color: '#fff', mb: 2, fontWeight: 800, letterSpacing: '0.05em' }}>
            Key Features:
          </Typography>

          <Box 
            component="ul" 
            sx={{ 
              paddingLeft: '20px', 
              color: '#d4d4d8', // 柔和的浅灰色正文
              '& li::marker': {
                color: 'rgba(145, 94, 255, 0.7)',// 列表前面的小圆点也统一换成浅灰色，彻底去除紫色
                fontSize: '1.2rem'
              }
            }}
          >
            {currentProject.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: '16px', lineHeight: 1.8 }}>
                <Typography variant="body2" sx={{ fontSize: '1.05rem', letterSpacing: '0.02em', fontWeight: 500 }}>
                  {feature}
                </Typography>
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