import React from 'react';
import Navbar from './Navbar';
import ImageForm from './ImageForm';
import ImageGallery from './ImageGallery';

const Home = () => {
    return (
        <>
            <div className='bg-sky-300'>
                <Navbar></Navbar>
            </div>
            <div className='max-w-7xl mx-auto my-10 px-2 grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-2'>
                <ImageForm></ImageForm>
                <ImageGallery></ImageGallery>
            </div>

        </>
    );
};

export default Home;