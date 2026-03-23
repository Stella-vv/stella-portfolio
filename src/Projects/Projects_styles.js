// src/Projects/Projects_styles.js
import { styled } from '@mui/material/styles';
import { Box, Card, Button } from '@mui/material';

export const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  paddingTop: '15px',
  paddingBottom: '80px',
  backgroundColor: 'transparent',
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  width: '100%',
  // 🚀 核心修改：死命令！卡片最宽限制在 350px，防止 80% 缩放时横向拉伸
  maxWidth: '350px', 
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#09090b', 
  border: '1px solid #27272a',
  borderRadius: '12px',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    borderColor: '#915EFF',
  },
}));

export const ImageContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  aspectRatio: '16 / 9',
  overflow: 'hidden',
});

export const StyledImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const OverlayBadge = styled(Box)({
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: '#fff',
  fontSize: '0.7rem', 
  padding: '3px 8px',
  borderRadius: '20px',
  bottom: '10px',
  left: '10px',
});

export const TechTag = styled(Box)({
  fontSize: '0.7rem', // 标签缩小
  color: '#a1a1aa',
  backgroundColor: '#18181b',
  border: '1px solid #27272a',
  padding: '2px 8px', 
  borderRadius: '4px',
  fontWeight: 500,
});

export const ActionButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 700, 
  borderRadius: '8px',
  padding: '8px', 
  fontSize: '0.85rem', // 按钮文字缩小
  backgroundColor: '#1d1d20', 
  color: '#fff',
  border: '1px solid #27272a',
  '&:hover': {
    backgroundColor: '#915EFF',
    borderColor: '#915EFF',
  },
});