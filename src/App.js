import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from './components/about';
import Todo from './components/toDo';
import Home from './components/home';
import Admin from './components/admin';
import Cart from './components/cart';

import GlobalStoreProvider from './context/globalStoreProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/home" exact element={<Home />} />
            <Route path="/admin" exact element={<Admin />} />
            <Route path="/catalog" exact element={<Catalog />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Todo" exact element={<Todo />} />
            <Route path='/Cart' exact element={<Cart />} />
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalStoreProvider>  
    </div>
    
  );
};

export default App;
