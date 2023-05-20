import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import photo1 from '../../../asetss/gallary/photo1.jpg';
import photo2 from '../../../asetss/gallary/photo2.jpg';
import photo3 from '../../../asetss/gallary/photo3.jpg';
import photo4 from '../../../asetss/gallary/photo4.jpg';
import photo5 from '../../../asetss/gallary/photo5.jpg';
import photo6 from '../../../asetss/gallary/photo6.jpg';
import photo7 from '../../../asetss/gallary/photo7.jpg';
import photo8 from '../../../asetss/gallary/photo8.jpg';
import Header from '../Sheard/Header/Header';
import Footer from '../Sheard/Footer/Footer';
import useTitle from '../../../hooks/useTitle';


const Gallary = () => {
    useTitle("Gallary")
    return (
        <div>
            <Header></Header>
            <h1 className='text-3xl font-bold text-center my-14  mt-20'>Tour Gallary</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10'>
                <PhotoProvider>
                    <PhotoView src={photo1}>
                        <img className='h-80 w-100 relative' src={photo1} alt="" />
                        
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={photo2}>
                        <img className='h-80 w-100' src={photo2} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={photo3}>
                        <img className='h-80 w-100' src={photo3} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={photo4}>
                        <img className='h-80 w-100' src={photo4} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={photo5}>
                        <img className='h-80 w-100' src={photo5} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <PhotoProvider>
                    <PhotoView src={photo6}>
                        <img className='h-80 w-100' src={photo6} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <PhotoProvider>
                    <PhotoView src={photo7}>
                        <img className='h-80 w-100' src={photo7} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <PhotoProvider>
                    <PhotoView src={photo8}>
                        <img className='h-80 w-100' src={photo8} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </div>
         
        </div>
    );
};

export default Gallary;