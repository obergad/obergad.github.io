import './styles/App.css';
import Home from "./components/Home.js";
import YoutubeEmbed from "./components/YoutubeEmbed";
import { useRef } from 'react'
import Header from "./components/Header.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Skills from "./components/Skills.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <div className="App">
      <Header/>
      <Home />
      <About refr={myRef}/>
      <Skills id="skills" refr={myRef}/>
      <Footer/>
    </div>
  );
}

export default App;
