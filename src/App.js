import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Container from './components/layouts/Container';
import {BrowserRouter as Router, Switch, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home/>}>
            </Route>
            <Route path='/projects' element={<Projects/>}>
            </Route>
            <Route path='/company' element={<Company/>}>
            </Route>
            <Route path='/contact' element={<Contact/>}>
            </Route>
            <Route path='/newProject' element={<NewProject/>}>
            </Route>
            <Route path='/Project/:id' element={<Project/>}>
            </Route>
        </Routes>
      </Container>
      <Footer></Footer>
    </Router>
  );
}

export default App;
