// src/hero/styles.js
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

// 1. 提取 CodePaper
export const CodePaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1e1e1e',
  color: '#d4d4d4',
  padding: theme.spacing(5),
  borderRadius: '20px',
  fontFamily: '"Fira Code", "Consolas", monospace',
  border: '1px solid #333',
  boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
  position: 'relative',
  overflow: 'hidden',
  width: '100%', 
  maxWidth: '850px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#ff5f56',
    boxShadow: '28px 0 0 #ffbd2e, 56px 0 0 #27c93f',
  }
}));

// 2. 提取代码高亮的小组件
export const Keyword = styled('span')({ color: '#c586c0' });      // 紫色
export const StringColor = styled('span')({ color: '#ce9178' });  // 橙色
export const FuncColor = styled('span')({ color: '#dcdcaa' });    // 黄色
export const PropColor = styled('span')({ color: '#9cdcfe' });    // 蓝色
export const NumColor = styled('span')({ color: '#b5cea8' });     // 浅绿