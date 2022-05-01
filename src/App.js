import './App.css';
import Home from './Pages/Home/Home/Home'
import { Routes, Route } from "react-router-dom";
import Services from './Pages/Home/Services/Services';
import Experts from './Pages/Home/Experts/Experts';
import Header from './Pages/Home/Header/Header'
import Footer from './Pages/Home/Footer/Footer';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Login from './Pages/Home/Login/Login';
import Singin from './Pages/Home/Singin/Singin';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/expert' element={<Experts></Experts>}></Route>
        <Route path='/servicedetails/:servicedetailsId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/singin' element={<Singin></Singin>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
