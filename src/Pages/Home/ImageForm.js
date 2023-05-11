import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const ImageForm = ({ setImages }) => {
    const {token} = useContext(AuthContext);
    const [nameValue, setNameValue] = useState(false);
    const [imagesValue, setImagesValue] = useState(false);
    const handleUploadImage = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        console.log(name, image);
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('token', token);
        fetch('http://localhost:5000/image', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    fetch(`http://localhost:5000/image?token=${token}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log("data",data);
                        setImages(data);
                    })
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="card max-w-sm lg:max-w-lg shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleUploadImage}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' onChange={() => setNameValue(true)} placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <div className="flex items-center space-x-6">
                            <div className="shrink-0">
                                <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="user" />
                            </div>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input type="file" name='image' onChange={() => setImagesValue(true)} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        {
                            nameValue && imagesValue ?
                                <button className="btn bg-sky-300 border-none hover:bg-sky-900">Submit</button>
                                :
                                <button className="px-8 py-3 text-white bg-sky-300 rounded focus:outline-none" disabled>Submit</button>
                        }
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ImageForm;