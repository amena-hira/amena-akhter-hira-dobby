import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(()=>{
        fetch('https://server-side-gold.vercel.app/authUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        })
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    },[])
    const logout = () => {
        localStorage.clear();
        setToken('');
    }
    const authInfo = {
        user,
        token,
        setToken,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;