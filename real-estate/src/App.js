import React from 'react';
import Header from './components/Header';
import ScrollSection from './components/ScrollSection';
import Latest from './components/Latest';
import About from './components/About';
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
function App() {
  return (
    <div>
      <Header />

      <ScrollSection id="latest" bgColor="#f5f5f5">
       <Latest/>
        {/* You can place your card components here */}
      </ScrollSection>

      <ScrollSection id="about" bgColor="#ffffff">
        <About />
      </ScrollSection>

      <ScrollSection id="contact" bgColor="#f5f5f5">
        <Contact/>
      </ScrollSection>
      
      <ScrollSection id="about" bgColor="#ffffff">
        <Footer />
      </ScrollSection>
      <GoToTop/>
    </div>
  );
}

export default App;
