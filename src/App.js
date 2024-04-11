import './App.css';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import NewUser from './Components/NewUser';
import TestPage from './Components/TestPage';

function App() {


  return (

    <Router>

      <nav>
        <Link to='/'>Home</Link>
        <Link to='/TestPage'>Test</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewUser' element={<NewUser />} />
        <Route path='/TestPage' element={<TestPage />} />

      </Routes>
    </Router>

  );
}

export default App;
