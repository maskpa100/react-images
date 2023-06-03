import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginContainer from './pages/Login/LoginContainer';
import SearchContainer from './pages/Search/SearchContainer';
import Registration from './pages/Registration/Registration';
import My_images from './pages/My_images/My_images';
import {Routes, Route} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

library.add(faAngleDown, faMagnifyingGlass, faCheck);

function App(props) {
  const [cookies, setCookie] = useCookies(['jwt']);
  const cookieValue = cookies['jwt'];
  useEffect(() => {
    props.getAuth(cookieValue)
  }, []);

  if (props.authPage.isAuth === null) {
    return <p>Loading...</p>;
  }

  return (

      <div className="main">
        <Header/>
        <div>{props.authPage.email}</div>
        <Routes>
          <Route path='/search' element={<SearchContainer/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/login' element={<LoginContainer/>}/>
          <Route path='/my_images' element={<My_images/>}/>
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;

