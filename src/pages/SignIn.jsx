import React from 'react'
import axios from 'axios'
import Tooltip from '../Components/Tooltip';
import { google_icon } from '../Components/Icons/Icons';

const SignIn = () => {
    const serverUrl = import.meta.env.VITE_BACKEND_URL;
    const handleLogin = async () => {
        try {
            // Gets authentication url from backend server
            const { data: { url } } = await axios.get(`${serverUrl}/usuarios/auth/url`);
            // Navigate to consent screen
            window.location.assign(url);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='flex justify-center'>
            <section className='max-w-96 px-3 border'>
                <Tooltip title="Inicia Sesion">Inicio con google</Tooltip>
                <h3>Login to Dashboard</h3>
                <button className="px-4 py-1 border-gray-400 bg-gray-200 cursor-pointer rounded flex items-center justify-around" onClick={handleLogin} >
                    {google_icon}
                    Inicia sesión con Google
                </button>
            </section>
        </div>
    )

}

export default SignIn