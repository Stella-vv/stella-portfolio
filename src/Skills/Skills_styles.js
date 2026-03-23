import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material'; // 别忘了引入 Box

// 定义动画 (不需要 export，因为只在这个文件内部用)
const scrollX = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollXReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

// 👇 必须加 'export'！
export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', 
  paddingTop: '50px',
  position: 'relative',
  zIndex: 1,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',     // 取消强制 100% 屏幕高度，让容器贴合内容实际高度
    paddingTop: '40px',    // 稍微往下推一点，不要死死贴着导航栏
    paddingBottom: '60px', // 稍微收紧底部留白，让下一个板块自然接上来
  },
}));

// 👇 必须加 'export'！
export const MarqueeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '85%',
  maxWidth: '1000px',
  margin: '0 auto',
  overflow: 'hidden',
  padding: theme.spacing(2, 0),
  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
}));

// 👇 必须加 'export'！
export const MarqueeTrack = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'reverse',
})(({ theme, reverse }) => ({
  display: 'flex',
  gap: '1rem', // 🚀 手机端卡片间距缩小到 1rem
  [theme.breakpoints.up('md')]: {
    gap: '2rem', // 💻 电脑端恢复为 2rem
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
  padding: '8px 16px', // 🚀 手机端卡片内边距缩小
  [theme.breakpoints.up('md')]: {
    gap: '12px',
    padding: '12px 24px', // 💻 电脑端恢复正常大小
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