import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Spotlight from './components/UI/Spotlight';
import Reveal from './components/UI/Reveal';

function App() {
  return (
    <div className="min-h-screen bg-navy text-slate relative overflow-x-hidden">
      <Spotlight />
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <Reveal width="100%" delay={0.2}>
          <Hero />
        </Reveal>

        <Reveal width="100%">
          <About />
        </Reveal>

        <Reveal width="100%">
          <Education />
        </Reveal>

        <Reveal width="100%">
          <TechStack />
        </Reveal>

        <Reveal width="100%">
          <Projects />
        </Reveal>

        <Footer />
      </main>
    </div>
  );
}

export default App;