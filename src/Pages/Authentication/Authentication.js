import React, { useContext } from 'react';
import background from '../../images/background.avif';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const Authentication = () => {
    const navigate = useNavigate();
    const {token, setToken} = useContext(AuthContext);
    if (token) {
        navigate('/home');
    }
    const location = useLocation();

    const handleAuthentication = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = {
            email,
            password
        }
        if (location.pathname !== '/') {
            console.log("sign: ", user);
            fetch('https://server-side-gold.vercel.app/signup', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.status) {
                        if (data.result.acknowledged) {
                            form.reset();
                            toast.success("Successfully registered!! Please Login..")
                            navigate('/')
                        }
                        else{
                            toast.error('Please give the right information...');
                        }
                    }
                    else{
                        toast.error('This email exist! Please Login..', {
                            icon: '👏',
                          });
                    }

                })
        }
        else {
            console.log("login: ", user);
            fetch('https://server-side-gold.vercel.app/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        form.reset();
                        localStorage.setItem('token', data.token);
                        setToken(data.token);
                        navigate('/home')
                    }
                    else {
                        toast.error("Email/Password is incorrect!!");
                    }
                })
        }

    }

    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-5xl font-semibold">
                            {
                                location.pathname === '/' ?
                                    'Login'
                                    :
                                    'Sign Up'
                            }
                        </h1>
                        <form onSubmit={handleAuthentication}>
                            <div className="form-control md:w-96">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name='email' className="input input-bordered rounded-full shadow text-white bg-transparent" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name='password' className="input input-bordered rounded-full shadow text-white bg-transparent" />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-active rounded-full">{
                                    location.pathname === '/' ?
                                        'Login'
                                        :
                                        'Signup'
                                }</button>
                            </div>
                        </form>

                        {
                            location.pathname === '/' ?
                                <p className='pt-5'>Don't have an account? <Link to='/signup' className='btn-link text-black hover:text-white'>Signup</Link></p>
                                :
                                <p className='pt-5'>Have an account? <Link to='/' className='btn-link text-black hover:text-white'>Login</Link></p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Authentication;