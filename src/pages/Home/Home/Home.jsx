import React from 'react';
import Header from '../Sheard/Header/Header';
import Footer from '../Sheard/Footer/Footer';
import Bannare from '../Bannere/Bannare';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Bannare></Bannare>
            <Services></Services>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;