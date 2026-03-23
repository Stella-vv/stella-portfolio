import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';

// 定义动画
const scrollX = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollXReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', 
  paddingTop: '60px',
  position: 'relative',
  zIndex: 1,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',     
    paddingTop: '20px',    
    paddingBottom: '60px', 
  },
}));

export const MarqueeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '85%',
  maxWidth: '1000px',
  margin: '0 auto',
  overflow: 'hidden',
  // 🚀 核心改动：在电脑端显著减小上下内边距 (原本是 2)
  padding: theme.spacing(2, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0.8, 0), 
  },
  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
}));

export const MarqueeTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})(({ theme, reverse }) => ({
  display: 'flex',
  gap: '1rem', 
  [theme.breakpoints.up('md')]: {
    // 🚀 核心改动：在电脑端缩小卡片之间的左右间距 (从 2rem 缩小到 1.2rem)
    gap: '1.2rem', 
  },
  width: 'max-content',
  animation: `${reverse ? scrollXReverse : scrollX} 60s linear infinite`, 
  '&:hover': {
    animationPlayState: 'paused',
  },
}));

export const SkillCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '8px 16px', 
  [theme.breakpoints.up('md')]: {
    // 🚀 核心改动：缩小电脑端卡片内部图标和文字的间距 (12px -> 8px)
    gap: '8px', 
    // 🚀 核心改动：缩小电脑端卡片的内边距 (原本是 12px 24px)
    padding: '8px 20px', 
  },
  borderRadius: '50px', 
  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    backgroundColor: 'rgba(145, 94, 255, 0.15)', 
    border: '1px solid #915EFF',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(145, 94, 255, 0.2)',
  },
}));