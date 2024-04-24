import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Account from './Components/Account';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Checkout from './Components/Checkout';
import About from './Components/About';
import Cart from './Components/Cart';
import Homepage from './Components/Homepage';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Wishlist from './Components/Wishlist';
import MainNav from './Components/MainNav';
import Timer from './Components/Timer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainNav />
      <Routes>
        <Route path='/' element={<Homepage />} ></Route>
        <Route path='/Contact' element={<Contact />} ></Route>
        <Route path='/About' element={<About />} ></Route>
        <Route path='/Signup' element={<Signup />} ></Route>
        <Route path='/Login' element={<Login />} ></Route>
        <Route path='/Wishlist' element={<Wishlist />} ></Route>
        <Route path='/Cart' element={<Cart />} ></Route>
        <Route path='/Account' element={<Account />} ></Route>
        <Route path='/Checkout' element={<Checkout />} ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
