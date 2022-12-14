import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

//from config
import { updateApiConfig } from './api/base';
import { Home } from './containers/Home/Home';
import { Login } from './containers/Login/Login';
import { Register } from './containers/Register/Register';
import { Dashboard } from './containers/Dashboard/Dashboard';
import { Logout } from './containers/Logout/Logout';
import { PageNotFound } from './containers//PageNotFound/PageNotFound';
import { Layout } from './containers/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
