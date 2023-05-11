import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import ImageForm from './ImageForm';
import ImageGallery from './ImageGallery';

const Home = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/image')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImages(data);
            })
    }, [])
    return (
        <>
            <div className='bg-sky-300'>
                <Navbar setImages={setImages}></Navbar>
            </div>
            <div className='max-w-7xl mx-auto my-10 px-2 grid justify-items-center grid-cols-1 lg:grid-cols-2 gap-2'>
                <ImageForm setImages={setImages}></ImageForm>
                <ImageGallery images={images}></ImageGallery>
            </div>

        </>
    );
};

export default Home;