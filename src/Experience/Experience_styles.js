import { styled } from '@mui/material/styles';
import { Box, Card } from '@mui/material';

// 1. 容器：优化标准缩放下的垂直布局
export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  display: 'flex',             
  flexDirection: 'column',     
  justifyContent: 'flex-start',
  // 💻 100% 缩放下，顶部留白建议增加一点点，防止内容太靠上
  paddingTop: '15px', 
  paddingBottom: theme.spacing(10),
  backgroundColor: 'transparent',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    paddingTop: '10px', 
    minHeight: 'auto',  
  },
}));

// 2. 卡片样式：收紧内边距，优化悬停效果
export const ExperienceCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(21, 16, 48, 0.6)', 
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  
  // 🚀 核心修改：100% 缩放下，建议使用更精致的内边距 (24px)
  padding: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    // 📱 手机端维持 2.5 左右的间距，防止窄屏下文字太挤
    padding: theme.spacing(2.5), 
  },

  position: 'relative',
  overflow: 'visible',
  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
  
  '&:hover': {
    // 🚀 核心修改：100% 缩放下向上移动 3px 效果最自然，5px 略显跳跃
    transform: 'translateY(-3px)',
    border: '1px solid #915EFF', 
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
  },

  // 左侧小箭头：保持与卡片边框颜色一致
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

// 3. 时间轴圆点：保持对齐
export const TimelineDot = styled(Box)(({ theme }) => ({
  width: '16px',
  height: '16px',
  borderRadius: '50%',
  backgroundColor: '#915EFF', 
  border: '4px solid #1d1836',
  boxShadow: '0 0 10px #915EFF', 
  position: 'absolute',
  // 💻 100% 缩放下，位置参数通常不需要大幅改动，除非你觉得点不在正中间
  left: '-58px',
  top: '28px',
  zIndex: 2,
  
  [theme.breakpoints.down('md')]: {
    left: '-40px', 
  },
}));

// 4. 时间轴竖线：优化视觉连续性
export const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-51px', 
  top: '0',
  // 🚀 核心修改：让竖线延伸距离稍微缩小，避免底部过度留白
  bottom: '-40px',
  width: '2px',
  background: 'linear-gradient(to bottom, #915EFF, transparent)', 
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    left: '-33px',
  },
}));