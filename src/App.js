import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './Content';
import Courses from './Courses';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />}>
            <Route path=':name' element={<Content />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
