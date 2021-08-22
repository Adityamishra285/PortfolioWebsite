import "./app.scss"
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/projectss/Works"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Aboutme/>
       <Portfolio/>
       <Works/>
       <Skills/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
