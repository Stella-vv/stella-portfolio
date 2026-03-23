import React from 'react';
import { Box, Typography, Container } from '@mui/material';
// 👇 引入样式
import { 
  SectionContainer, 
  MarqueeContainer, 
  MarqueeTrack, 
  SkillCard 
} from './Skills_styles';

// 3. 技能数据 (为了效果好，我们复制一份数据让滚动无缝衔接)
const skillsRow1 = [
  { name: 'React', slug: 'react' },
  { name: 'JavaScript', slug: 'javascript' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'PHP', slug: 'php' },
  { name: 'HTML5', slug: 'html5' },
  { name: 'CSS3', slug: 'css3' },
  { name: 'Tailwind', slug: 'tailwindcss' },
  { name: 'MUI', slug: 'materialui' },
];

const skillsRow2 = [
  { name: 'Python', slug: 'python' },
  { name: 'Java', slug: 'java' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'MongoDB', slug: 'mongodb' },
  { name: 'Git', slug: 'git' },
  { name: 'Docker', slug: 'docker' },
  { name: 'Figma', slug: 'figma' },
];

const skillsRow3 = [
  { name: 'Vite', slug: 'vitejs' },
  { name: 'Office', slug: 'Office', customUrl: '/office.svg' },
  { name: 'Markdown', slug: 'markdown' },
  { name: 'Flask', slug: 'flask' },
  { name: 'Linux', slug: 'linux' },
  { name: 'C++', slug: 'cplusplus' },
  { name: 'npm', slug: 'npm' },
  { name: 'Bootstrap', slug: 'bootstrap' },
];

// 辅助函数：生成重复数组以实现无缝循环
const double = (arr) => [...arr, ...arr];

const Skills = () => {
  return (
    <SectionContainer>
      <Container maxWidth="lg" sx={{ textAlign: 'center', mb: { xs: 8, md: 5 }, px: { xs: 2, md: 5 } }}>
                
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: { xs: 2, md: 3 },
          mb: { xs: 3, md: 2 }
        }}>
        
          {/* 左边的渐变线 */}
          <Box sx={{
              height: '2px',
              width: { xs: '30px', md: '70px' }, // 🚀 电脑端缩短线条
              background: 'linear-gradient(to right, transparent, #915EFF)',
              borderRadius: '2px'
          }} />

          {/* 中间的文字 */}
          <Typography 
              variant="body1" 
              sx={{ 
                color: '#915EFF', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase', 
                fontWeight: 700,
                fontSize: { xs: '0.85rem', md: '1rem' }, // 🚀 电脑端副标题缩小
                textShadow: '0 0 10px rgba(145, 94, 255, 0.3)'
              }}
          >
              Skills & Expertise
          </Typography>

          {/* 右边的渐变线 */}
          <Box sx={{
              height: '2px',
              width: { xs: '30px', md: '70px' }, 
              background: 'linear-gradient(to left, transparent, #915EFF)',
              borderRadius: '2px'
          }} />
        </Box>
        
        <Typography 
            variant="h2" 
            sx={{ 
                fontWeight: 900, 
                mb: { xs: 3, md: 2 },
                // 🚀 核心：电脑端大标题缩小 (最高 4.5rem)
                fontSize: { xs: '2.4rem', sm: '3.5rem', md: '3.6rem', lg: '4.2rem' }, 
                lineHeight: { xs: 1.2, md: 1.1 }
            }}
            >
            My Development <br sx={{ display: { xs: 'block', sm: 'none' } }} /> 
            <span style={{ color: '#915EFF' }}>Arsenal</span>
        </Typography>

        <Typography 
            variant="body1" 
            sx={{ 
              color: '#aaa6c3', 
              maxWidth: '800px', 
              mx: 'auto', 
              lineHeight: 1.8,   
              fontSize: { xs: '1rem', md: '1.15rem' }, // 🚀 电脑端正文缩小到 1.15rem
              px: { xs: 1, md: 0 }
            }}
        >
            From frontend frameworks to backend technologies, these are the tools I use to craft exceptional digital experiences and solve complex problems.
        </Typography>
      </Container>

      {/* 第一排：向左滚动 */}
      <MarqueeContainer sx={{ mb: { xs: 2, md: 2 } }}> {/* 🚀 核心修改：电脑端下边距缩小 (4 -> 2) */}
        <MarqueeTrack>
          {double(skillsRow1).map((skill, index) => (
            <SkillCard key={`row1-${index}`}>
              <Box 
                component="img"
                src={skill.customUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                sx={{ width: { xs: '24px', md: '30px' }, height: { xs: '24px', md: '30px' } }} // 🚀 电脑端图标缩小
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                {skill.name}
              </Typography>
            </SkillCard>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      {/* 第二排：向右滚动 */}
      <MarqueeContainer sx={{ mb: { xs: 2, md: 2 } }}> {/* 🚀 核心修改：电脑端下边距缩小 (4 -> 2) */}
        <MarqueeTrack reverse={true}> 
          {double(skillsRow2).map((skill, index) => (
            <SkillCard key={`row2-${index}`}>
              <Box 
                component="img"
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                sx={{ width: { xs: '24px', md: '30px' }, height: { xs: '24px', md: '30px' } }}
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                {skill.name}
              </Typography>
            </SkillCard>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      {/* 第三排：向左滚动 */}
      <MarqueeContainer>
        <MarqueeTrack>
          {double(skillsRow3).map((skill, index) => (
            <SkillCard key={`row3-${index}`}>
              <Box 
                component="img"
                src={skill.customUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                sx={{ width: { xs: '24px', md: '30px' }, height: { xs: '24px', md: '30px' } }}
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontSize: { xs: '0.85rem', md: '0.95rem' } }}>
                {skill.name}
              </Typography>
            </SkillCard>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

    </SectionContainer>
  );
};

export default Skills;