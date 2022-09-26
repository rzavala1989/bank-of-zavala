import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

//from config
import { updateApiConfig } from './api/base';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Dashboard } from './components/Dashboard';
import { Logout } from './components/Logout';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/logout' element={<Logout />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
