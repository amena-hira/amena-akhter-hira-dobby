import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import ImageForm from './ImageForm';
import ImageGallery from './ImageGallery';
import { AuthContext } from '../../context/AuthProvider';

const Home = () => {
    const [images, setImages] = useState([]);
    const {token} = useContext(AuthContext);
    useEffect(() => {
        fetch(`https://server-side-gold.vercel.app/image?token=${token}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setImages(data);
            })
    }, [token])
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