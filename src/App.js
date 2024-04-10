import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import NewUser from './Components/NewUser';

function App() {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewUser' element={<NewUser />} />
      </Routes>
    </Router>

  );
}

export default App;
