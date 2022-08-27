import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='center'>
      <Nav />
      <Landing />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
