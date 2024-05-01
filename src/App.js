import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import NewUser from './Components/NewUser';
import TestPage from './Components/TestPage';
import AboutPaige from './Components/About Me/AboutPaige';
import MyJourney from './Components/Journey/JourneyPage';
import Training from './Components/Journey/Training';

function App() {


  return (

    <Router>

      <nav id="navbar">
        <Link id="nav" to='/'>Home</Link>
        <Link id="nav" to='/AboutMe'>About Me</Link>
        <Link id="nav" to='/MyJourney'>My Journey</Link>
        <Link id="nav" to='/TestPage'>Test</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewUser' element={<NewUser />} />
        <Route path='/TestPage' element={<TestPage />} />
        <Route path='/AboutMe' element={<AboutPaige />} />
        <Route path='/MyJourney' element={<MyJourney />} />
        <Route path='/Training' element={<Training />} />


      </Routes>
    </Router>

  );
}

export default App;
