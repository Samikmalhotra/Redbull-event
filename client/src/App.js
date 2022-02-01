import logo from './logo.svg';
import './App.css';
import Landing from './pages/Landing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Leaderboard from './pages/Leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='leaderboard' element={<Leaderboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
