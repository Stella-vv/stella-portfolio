// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // 1. 开启暗黑模式
    background: {
      default: '#050816', // 2. 极深的蓝黑色背景 (比纯黑更有质感)
      paper: '#151030',   // 卡片的背景色 (略浅一点的紫色)
    },
    primary: {
      main: '#915EFF',    // 3. 核心主色：霓虹紫
    },
    secondary: {
      main: '#aaa6c3',    // 次要文字颜色：灰紫色
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaa6c3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 900, // 大标题加粗
    },
    h2: {
      fontWeight: 700,
    },
  },
  components: {
    // 定制按钮样式，加上那个漂亮的渐变
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // 不自动大写
          borderRadius: '20px',  // 圆角按钮
        },
      },
    },
  },
});

export default theme;