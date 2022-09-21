import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path='' element={<Dashboard/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
       </Routes>
      
    </div>
  );
}

export default App;
