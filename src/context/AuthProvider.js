import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const handleAuthUser = () => {
        fetch('http://localhost:5000/authUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }
    const logout = () =>{
        localStorage.clear();
    }
    const authInfo = {
        user,
        handleAuthUser,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;