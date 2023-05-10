import React from 'react';

const ImageGallery = ({images}) => {
    
    return (
        <div>
            <h2 className='text-center text-xl text-semibold pb-4'>Image Gallery</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    images?.map((image, index) => (
                        <div className='card shadow-lg rounded'>
                            <img key={index} className='h-28 w-full' src={`data:image/jpg;base64,${image.imageFile}`} alt='' />
                            <h2 className='text-center'>{image.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ImageGallery;