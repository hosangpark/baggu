/* eslint-disable */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Standard from './pages/Standard';
import Main from './pages/Main';
import Cart from './pages/Cart'
import Standard_detail from './pages/Detail'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main />} />      
        <Route path='/standard' element={<Standard />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/standard/detail' element={<Standard_detail />} />
      </Routes>
      <Footer/>
    </div> 
  );
}

export default App;