import './App.css';
import { HashRouter, HashRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Wrapper from './components/wrapper/wrapper';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';

function App() {
  return (
    <HashRouter basename="/dev-portfolio">
      <Router>
        <Header />
        <Wrapper >
          <Route exact path="/" component={Home} />
          <Route exact path="/dev-portfolio/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/" component={Footer} />
        </Wrapper>
      </Router>
    </HashRouter>
  );
}

export default App;
