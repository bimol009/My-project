import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Main = () => {
    const { darkTheme } = useContext(AuthContext);
    return (
      <div className='mb-5'>
          <div className={`${darkTheme ? "white-theme" : "dark-theme"}`}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;