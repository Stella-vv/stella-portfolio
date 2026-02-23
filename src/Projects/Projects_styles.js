// src/Projects/Projects_styles.js
import { styled } from '@mui/material/styles';
import { Box, Card, Button } from '@mui/material';

export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: theme.spacing(10), // 🚀 增加顶部内边距
  paddingBottom: theme.spacing(10),
  backgroundColor: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', // 🚀 靠上对齐
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#09090b', // 极深背景
  border: '1px solid #27272a',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    borderColor: '#3f3f46',
  },
}));

export const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9', // 保持 16:9 比例
  overflow: 'hidden',
  backgroundColor: '#000',
});

export const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
  '.MuiCard-root:hover &': {
    transform: 'scale(1.05)',
  },
});

export const OverlayBadge = styled(Box)(({ theme, position }) => ({
  position: 'absolute',
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  fontSize: '0.85rem', // 🚀 放大：0.75 -> 0.85
  fontWeight: 600,
  padding: '6px 12px', // 🚀 放大：增加内边距
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  ...(position === 'top-right' && { top: '15px', right: '15px' }),
  ...(position === 'bottom-left' && { bottom: '15px', left: '15px' }),
}));

export const StatusDot = styled(Box)(({ color }) => ({
  width: '8px',  // 🚀 放大：6px -> 8px
  height: '8px',
  borderRadius: '50%',
  backgroundColor: color,
  boxShadow: `0 0 8px ${color}`,
}));

export const TypeBadge = styled(Box)(({ type }) => {
    const isOpenSource = type === 'Open Source';
    const color = isOpenSource ? '#22c55e' : '#f59e0b';
    const bg = isOpenSource ? 'rgba(34, 197, 94, 0.1)' : 'rgba(245, 158, 11, 0.1)';
    
    return {
      fontSize: '0.8rem', // 🚀 放大
      color: color,
      backgroundColor: bg,
      border: `1px solid ${color}`,
      padding: '4px 10px', // 🚀 放大
      borderRadius: '6px',
      display: 'inline-block',
      fontWeight: 600,
      marginLeft: '12px',
      verticalAlign: 'middle',
    };
});

// 🚀 重点修改：技术栈标签
export const TechTag = styled(Box)({
  fontSize: '0.9rem', // 🚀 放大：0.75 -> 0.9 (更清晰)
  color: '#a1a1aa',
  backgroundColor: '#18181b',
  border: '1px solid #27272a',
  padding: '6px 14px', // 🚀 放大：让胶囊更饱满
  borderRadius: '20px',
  fontWeight: 500,
});

// 🚀 重点修改：按钮
export const ActionButton = styled(Button)(({ theme, variant }) => ({
  // flex: 1,  <--- 🚀 删掉或者注释掉这一行！
  width: '100%', // 确保按钮横向填满（对应 fullWidth）
  textTransform: 'none',
  fontWeight: 700, 
  borderRadius: '10px',
  padding: '12px 20px', // 稍微加一点点上下内边距，让固定高度的按钮更好看
  fontSize: '1rem',
  
  ...(variant === 'primary' && {
    backgroundColor: '#1d1d20', 
    color: '#fff',
    border: '1px solid #27272a',
    '&:hover': {
      backgroundColor: '#27272a',
      borderColor: '#3f3f46',
    },
  }),

  ...(variant === 'secondary' && {
    backgroundColor: '#09090b',
    color: '#a1a1aa',
    border: '1px solid #27272a',
    '&:hover': {
      backgroundColor: '#18181b',
      color: '#fff',
    },
  }),
}));