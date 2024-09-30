
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;