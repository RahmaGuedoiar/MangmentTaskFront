
import './App.css';
import {Route,Routes}from 'react-router-dom'
import Navtodo from './components/Navtodo';
import Home from './components/Home';
import Login from './components/Login';

import Profile from './components/Profile';
import Registre from './components/Registre';

function App() {
  return (
    <div className="App">
      <Navtodo></Navtodo>
      <Routes>
        <Route path='/' element={<><Home/></>}>Home</Route>
        <Route path='/login' element={<><Login></Login></>}>login</Route>
        <Route path='/register' element={<><Registre/></>}>register</Route>
        <Route path='/profile' element={<><Profile/></>}>profile</Route>
       
      </Routes>
    </div>
  );
}

export default App;
