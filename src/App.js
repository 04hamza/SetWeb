import logo from './logo.svg';
import './App.css';
import Carre from './project/pageindex';
import Info from './project2/info';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Compteur from './project3/productlist';
import ProductCard from './project3/productcard';
import Home from './SetWeb/Home';
import Navbar from './SetWeb/navbar';
import Category from './SetWeb/Category';
import MenClothing from './SetWeb/menClothing';
import Card from './SetWeb/Card';
import Shop from './SetWeb/Shop';
import AboutUs from './SetWeb/aboutus';
import ContactUs from './SetWeb/Contactus';
import Add from './SetWeb/AboutUs/Aded';
import ToBuy from './SetWeb/Tobuy';
import Footer from './SetWeb/Footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/page/Home' element={<Home/>}/>
      <Route path='/page/Shop' element={<Shop/>}/>
      <Route path="/category/:category" element={<MenClothing/>}/>
      <Route path='/category/:category/:id' element={<Card/>}/>
      <Route path='/page/About Us' element={<AboutUs/>}/>
      <Route path='/page/Contact' element={<ContactUs/>}/>
      <Route path='/category/:category/:id/added' element={<Add/>}/>
      <Route path='/category/:category/:id/toBuy' element={<ToBuy/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
{/* <Route path='/' element={<Formulaire/>}></Route> */}
{/* <Route path='/info/:Name/:Prenom' element={<Info/>}></Route> */}
{/* <Route path="/" element={<Compteur/>}></Route> */}
