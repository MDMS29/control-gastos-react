import React from 'react'
import { google_icon } from '../Components/Icons/Icons';
import ConexionWS from '../config/ConexionWS';

const SignIn = () => {
    const handleLogin = async () => {
        try {
            // Gets authentication url from backend server
            const { data: { url } } = await ConexionWS(`/usuarios/auth/url`);
            // Navigate to consent screen
            window.location.assign(url);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='flex'>
            <section className='flex-1 h-svh flex justify-center flex-col'>
                <form className='flex flex-col items-center w-full'>
                    <h3>Inicie Sesión</h3>
                    <button className="px-4 py-1 border-gray-400 bg-gray-200 cursor-pointer rounded-md flex items-center justify-around" onClick={handleLogin} >
                        {google_icon}
                        Ingresar con Google
                    </button>

                    <div className='flex flex-col w-full'>
                        <input type="email" name="correo" id="correo"/>
                        <input type="password" name="clave" id="clave"/>
                    </div>
                    <button className='bg-blue-600 text-white w-1/3 hover:bg-blue-800 transition-colors uppercase font-semibold'>Ingresar</button>
                </form>
            </section>

            <section className='flex-1 h-svh'>
                {/* <img src="" title='Login image' alt='Image Login'/> */}
            </section>
        </div>
    )

}

export default SignIn