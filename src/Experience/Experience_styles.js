// src/Experience/Experience_styles.js
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';

// 复用之前的透明背景容器
export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',             // 🚀 新增 flex 布局确保对齐正常
  flexDirection: 'column',     // 🚀 新增
  justifyContent: 'flex-start',// 🚀 新增
  paddingTop: '20px',
  paddingBottom: theme.spacing(10),
  backgroundColor: 'transparent',
  position: 'relative',

  // 🚀 核心修复：手机端收紧边距
  [theme.breakpoints.down('md')]: {
    paddingTop: '10px', 
    minHeight: 'auto',  
  },
}));

// 卡片样式
export const ExperienceCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(21, 16, 48, 0.6)', 
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'visible',
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    border: '1px solid #915EFF', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },

  // 左侧箭头
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-10px',
    top: '24px',
    width: '0', 
    height: '0', 
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent', 
    borderRight: '10px solid rgba(255, 255, 255, 0.1)',
  }
}));

// 时间轴圆点
export const TimelineDot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#915EFF', 
  border: '4px solid #1d1836',
  boxShadow: '0 0 10px #915EFF', 
  position: 'absolute',
  left: '-58px',
  top: '28px',
  zIndex: 2,
  
  [theme.breakpoints.down('md')]: {
    left: '-40px', 
  },
}));

// 时间轴竖线
export const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-51px', 
  top: '0',
  bottom: '-50px',
  width: '2px',
  background: 'linear-gradient(to bottom, #915EFF, transparent)', 
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    left: '-33px',
  },
}));