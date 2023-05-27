import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import SearchContainer from './pages/Search/SearchContainer';
import Registration from './pages/Registration/Registration';
import My_images from './pages/My_images/My_images';
import {Routes, Route} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDown, faMagnifyingGlass, faCheck);

function App() {
  return (

      <div className="main">
        <Header/>
        <Routes>
          <Route path='/search' element={<SearchContainer/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/my_images' element={<My_images/>}/>
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;

