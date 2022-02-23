import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaderboard from './pages/Leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Questions from './pages/Questions';
import Register from './pages/Register';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='leaderboard' element={<Leaderboard/>}/>
          <Route path='questions' element={<Questions/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
