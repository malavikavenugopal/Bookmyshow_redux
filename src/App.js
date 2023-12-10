import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieView from "./pages/MovieView";
import Theater from "./pages/Theater";
import {Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Success from './pages/Success';


function App() {
 

  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home/>} /> 
      <Route path={'/movieview/:id'} element={< MovieView/>} /> 
      <Route path={'/theater/:id'} element={<Theater/>} /> 
      <Route path={'/cart/:id'} element={<Cart/>} /> 
      <Route path={'/success'} element={<Success/>} /> 
    </Routes>
   <Footer/> 
    </div>
  );
}

export default App;
