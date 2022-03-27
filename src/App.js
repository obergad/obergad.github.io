import './styles/App.css';
import Home from "./components/Home.js";
import YoutubeEmbed from "./components/YoutubeEmbed";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <Header/>      
      <Home/>
      <About />
      <Footer/>

    </div>
  );
}

export default App;
