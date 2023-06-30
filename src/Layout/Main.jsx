import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import ParticlesBackground from '../Particles/particlesBackground';

const Main = () => {
    const { darkTheme } = useContext(AuthContext);
    return (
      <div className='mb-5'>
        <ParticlesBackground></ParticlesBackground>
          <div className={`${darkTheme ? "white-theme" : "dark-theme"}`}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
      </div>
    );
};

export default Main;