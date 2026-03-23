// src/Education/Education_styles.js
import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';

// 1. 容器 (透明背景，无缝衔接)
export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', 
  paddingTop: '15px', // 🚀 电脑端稍微留一点间距
  paddingBottom: theme.spacing(10),
  backgroundColor: 'transparent', 
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    paddingTop: '10px',   
    minHeight: 'auto',    
  },
}));

// 2. 教育卡片 (玻璃拟态 + 左侧小箭头)
export const EducationCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(21, 16, 48, 0.6)', 
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  // 🚀 核心修改：减小电脑端的内边距 (4 -> 3)
  padding: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2.5),
  },

  position: 'relative',
  overflow: 'visible', 
  transition: 'transform 0.3s ease, border-color 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-5px)',
    border: '1px solid #915EFF', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },

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

// 3. 时间轴的圆点 (空心发光圆)
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

// 4. 竖线 (渐变色)
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