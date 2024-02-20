import logo from "./logo.svg";
import "./App.scss";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
      <Blogs />
      <Contact />
     <Footer />  
    </div>
  );
}

export default App;