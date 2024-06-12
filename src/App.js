import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dlt from './components/Dlt';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>} />
    <Route path='/search' element={<Search/>} />
    <Route path='/dlt' element={<Dlt/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
