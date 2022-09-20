// import { Navbar } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
{/* <h1>Hello this is testing page</h1> */}
      {/* <Navbar />
      <Topbar /> */}
      <Dashboard />
    </div>
  );
}

export default App;
