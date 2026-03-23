// src/App.jsx
import Navbar from './components/Navbar';
import Profile from './Home/Home';
import Hero from './hero/Hero';
import Skills from './Skills/Skills.jsx';
import Education from './Education/Education';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: '#050816', py: 4, textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
    <Typography variant="body2" sx={{ color: '#aaa6c3' }}>
      © 2026 Stella Xiong. All rights reserved.
    </Typography>
  </Box>
);

function App() {
  return (
    <>
      <Navbar />
      
      <div id="home"><Profile /></div>
      <div id="about"><Hero /></div>
      
      {/* 建议放在 Skills 后面，Projects 前面，或者根据你喜好调整顺序 */}
      <div id="skills"><Skills /></div>
      
      <Education />
      
      <Projects />

      <Experience />

      <Footer />
    </>
  );
}

export default App;