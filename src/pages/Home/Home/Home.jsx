import React from 'react';
import Header from '../Sheard/Header/Header';
import Footer from '../Sheard/Footer/Footer';
import Bannare from '../Bannere/Bannare';
import Services from '../../Services/Services';
import About from '../About/About';
import Video from '../Video/Video';
import Gallary from '../Gallary/Gallary';
import useTitle from '../../../hooks/useTitle';
import ClientsReview from '../ClientsReview/ClientsReview';

const Home = () => {
    useTitle("Home")
    return (
        <div className=''>
            <Header></Header>
            <Bannare></Bannare>
            <Services></Services>
            <About></About>
            <Video></Video>
            <Gallary></Gallary>
            <ClientsReview></ClientsReview>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;