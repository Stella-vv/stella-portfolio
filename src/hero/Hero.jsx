import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download'; 
import { 
  CodePaper, 
  Keyword, 
  StringColor, 
  FuncColor, 
  PropColor, 
  NumColor 
} from './Hero_styles';

const Hero = () => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'flex-start', 
      justifyContent: 'center',
      bgcolor: 'transparent',
      // 🚀 电脑端顶部留白稍微增加，让内容在 80% 缩放时更居中
      pt: { xs: 3, md: 8 }, 
      pb: 10
    }}>
      <Box sx={{ width: '86%', mx: 'auto' }}> 
        
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          alignItems="center" 
          justifyContent="space-between" 
          // 🚀 电脑端增加左右间距 (10 -> 12)，防止文字和代码窗口挤在一起
          gap={{ xs: 6, md: 12 }}
          sx={{ width: '100%' }}
        >
          
          <Box sx={{ flex: 1.2, maxWidth: '850px', display: 'flex', flexDirection: 'column' }}>
            
            <Typography variant="h6" sx={{ 
              color: '#915EFF', 
              fontWeight: 'bold', 
              mb: { xs: 1.5, md: 2 }, // 🚀 电脑端缩小下边距 (3 -> 2)
              // 🚀 电脑端字号缩小 (1.2rem -> 1rem)
              fontSize: { xs: '0.9rem', md: '1rem' },
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              Who am I
            </Typography>
            
            <Typography variant="h1" sx={{ 
              // 🚀 核心改动：电脑端大标题显著缩小 (5.5rem/7rem -> 4rem/5rem)
              fontSize: { xs: '2.8rem', md: '3.6rem', lg: '4.3rem' },
              color: 'white', 
              mb: 3, // 🚀 电脑端缩小间距 (4 -> 3)
              fontWeight: 900,
              lineHeight: 1.1, 
            }}>
              About me <br />
            </Typography>
            
            <Typography variant="body1" sx={{ 
              color: '#aaa6c3', 
              mb: 2, // 🚀 电脑端缩小间距 (3 -> 2)
              // 🚀 电脑端正文字号缩小 (1.4rem -> 1.15rem)
              fontSize: { xs: '1.05rem', md: '1.15rem' }, 
              lineHeight: 1.7,
              maxWidth: '100%'
            }}>
              I transform ideas into digital reality through clean code, thoughtful design, and innovative solutions that create real impact and drive meaningful change.
            </Typography>

            <Typography variant="body1" sx={{ 
              color: '#aaa6c3', 
              mb: 5, // 🚀 电脑端缩小下边距 (6 -> 5)
              // 🚀 电脑端正文字号缩小 (1.4rem -> 1.15rem)
              fontSize: { xs: '1.05rem', md: '1.15rem' }, 
              lineHeight: 1.8,
              maxWidth: '95%'
            }}>
              As a passionate full-stack developer based in Australia, I specialize in turning complex challenges into elegant solutions that deliver real value.
            </Typography>
            
            <Stack direction="row" spacing={4}>
              <Button 
                variant="contained" 
                size="large" 
                component="a"       
                href="/CV_Stella Xiong.pdf" 
                target="_blank"       
                rel="noopener noreferrer"
                startIcon={<DownloadIcon sx={{ fontSize: '1.5rem' }} />} 
                sx={{ 
                  bgcolor: '#915EFF', 
                  borderRadius: '50px', 
                  // 🚀 电脑端按钮内边距微调，让它更精致
                  px: { xs: 4, md: 5 }, 
                  py: { xs: 1.2, md: 1.5 },
                  // 🚀 电脑端字号缩小 (1.3rem -> 1.1rem)
                  fontSize: { xs: '1.1rem', md: '1.1rem' },
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 0 25px rgba(145, 94, 255, 0.5)',
                  '&:hover': { bgcolor: '#7c46e0' } 
                }}
              >
                Get My CV
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1.2, width: '100%', display: 'flex', justifyContent: { xs: 'center', lg: 'flex-end' } }}>
            <CodePaper elevation={12} sx={{ 
              // 🚀 电脑端缩小代码窗口的最大宽度，防止在 80% 缩放时横跨整个屏幕
              maxWidth: { xs: '100%', md: '700px' },
              transform: { lg: 'scale(1)' }, // 取消初始的 1.02 缩放， hover 时再放大
              transition: 'transform 0.3s ease',
              '&:hover': { transform: { lg: 'scale(1.05)' } }
            }}>
              <Box sx={{ 
                mt: 2, 
                lineHeight: 1.7, 
                // 🚀 代码内部字体缩小 (1.15rem -> 1rem)
                fontSize: { xs: '0.9rem', md: '1rem' }, 
                textAlign: 'left', 
                fontWeight: 500 
              }}>
                <div><Keyword>const</Keyword> <FuncColor>dev</FuncColor> = {'{'}</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>name</PropColor>: <StringColor>'Stella Xiong'</StringColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>age</PropColor>: <NumColor>25</NumColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>role</PropColor>: <StringColor>'Full-Stack Developer'</StringColor>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>skills</PropColor>: [<StringColor>'Frontend'</StringColor>, <StringColor>'Backend'</StringColor>, <StringColor>'Database'</StringColor>, <StringColor>'Figma'</StringColor>]</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>quickLearner</PropColor>: <Keyword>true</Keyword>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>problemSolver</PropColor>: <Keyword>true</Keyword>,</div>
                <div style={{ paddingLeft: '20px' }}><PropColor>hireable</PropColor>: <Keyword>function</Keyword>() {'{'}</div>
                <div style={{ paddingLeft: '40px' }}><Keyword>return</Keyword> (this.quickLearner && this.problemSolver && this.skills.length &gt;= 3);</div>
                <div style={{ paddingLeft: '20px' }}>{'}'},</div>
                <div>{'};'}</div>
              </Box>
            </CodePaper>
          </Box>

        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;