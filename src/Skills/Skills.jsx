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
// slug 对应 https://devicon.dev/ 的图标名称
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
      <Container maxWidth="80%" sx={{ textAlign: 'center', mb: 8 }}>
                
        <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: 3, // 线条和文字的间距
        mb: 2 
        }}>
        
        {/* 左边的渐变线：从透明 -> 紫色 */}
        <Box sx={{
            height: '2px',
            width: { xs: '40px', md: '100px' }, // 手机上短一点，电脑上长一点
            background: 'linear-gradient(to right, transparent, #915EFF)',
            borderRadius: '2px'
        }} />

        {/* 中间的文字 */}
        <Typography 
            variant="body1" 
            sx={{ 
            color: '#915EFF', // 统一改成霓虹紫，和线条呼应
            letterSpacing: '0.2em', // 字间距拉大，更有高级感
            textTransform: 'uppercase', 
            fontWeight: 700,
            fontSize: { xs: '1rem', md: '1.3rem' },
            textShadow: '0 0 10px rgba(145, 94, 255, 0.3)' // 稍微加一点发光效果
            }}
        >
            Skills & Expertise
        </Typography>

        {/* 右边的渐变线：从紫色 -> 透明 */}
        <Box sx={{
            height: '2px',
            width: { xs: '40px', md: '100px' }, 
            background: 'linear-gradient(to left, transparent, #915EFF)', // 注意方向反过来
            borderRadius: '2px'
        }} />

        </Box>
        
        <Typography 
            variant="h2" 
            sx={{ 
                fontWeight: 900, 
                mb: 2,
                fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' } 
            }}
            >
            My Development <span style={{ color: '#915EFF' }}>Arsenal</span>
            </Typography>

        <Typography 
            variant="body1" 
            sx={{ 
            color: '#aaa6c3', 
            maxWidth: '800px', // 放宽一点最大宽度，防止文字换行太频繁
            mx: 'auto', 
            lineHeight: 1.8,   // 增加行高，阅读更舒服
            // 🚀 修改：大幅调大字体
            fontSize: { xs: '1rem', md: '1.4rem' } 
            }}
        >
            From frontend frameworks to backend technologies, these are the tools I use to craft exceptional digital experiences and solve complex problems.
        </Typography>
      </Container>

      {/* 第一排：向左滚动 */}
      <MarqueeContainer sx={{ mb: 4 }}>
        <MarqueeTrack>
          {double(skillsRow1).map((skill, index) => (
            <SkillCard key={`row1-${index}`}>
              <img 
                src={skill.customUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                style={{ width: '40px', height: '40px' }}
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, flexGrow: 1, textAlign: 'center', fontSize: '1rem' }}>
                {skill.name}
              </Typography>
            </SkillCard>
          ))}
        </MarqueeTrack>
      </MarqueeContainer>

      {/* 第二排：向右滚动 (reverse={true}) */}
      <MarqueeContainer sx={{ mb: 4 }}>
        <MarqueeTrack reverse={true}> {/* 注意这里传了 props */}
          {double(skillsRow2).map((skill, index) => (
            <SkillCard key={`row2-${index}`}>
              <img 
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                style={{ width: '40px', height: '40px' }}
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, flexGrow: 1, textAlign: 'center', fontSize: '1rem' }}>
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
              <img 
                src={skill.customUrl || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.slug}/${skill.slug}-original.svg`} 
                alt={skill.name} 
                style={{ width: '40px', height: '40px' }}
              />
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, flexGrow: 1, textAlign: 'center', fontSize: '1rem' }}>
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