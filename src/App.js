/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Best from './pages/Best';
import Main from './pages/Main';
import About from './pages/About';
import History from './pages/History';
import Inform from './pages/Inform'
import Cart from './pages/Cart'


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <div className='header'>
        <div className='gnb_header'>
          <Nav className="gnb_header_icon1">
            <Nav.Link onClick={() => {navigate('/about')}}>서치</Nav.Link>
          </Nav>
          <h1 className='h1'>
          <Navbar.Brand onClick={() => {navigate('/')}}>BAGGU</Navbar.Brand>
          </h1>
          <Nav className="gnb_header_icon2">
            <Nav.Link onClick={() => {navigate('/best')}}>장바구니</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>프로필</Nav.Link>
          </Nav>
        </div>
        <div className='lnb_header'>
          <Nav className="me_auto">
            <Nav.Link onClick={() => {navigate('/about')}}>회사소개</Nav.Link>
            <Nav.Link onClick={() => {navigate('/best')}}>베스트</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart')}}>장바구니</Nav.Link>
          </Nav>
        </div>
      </div>
      
      {/* <Link to={'/'}>home</Link>
      <Link to={'/best'} target='_blank'>best</Link>  */}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='history' element={<History />} />
        <Route path='about' element={<About />}>
        <Route path='inform' element={<Inform />} />
      </Route>
        <Route path='/best' element={<Best />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div> 
  );
}

export default App;