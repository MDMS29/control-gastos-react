import React from 'react'
import "../assets/sign-in.css"

const SignIn = () => {
    const handleLogin = async () => {
        try {
            // Gets authentication url from backend server
            const { data: { url } } = await axios.get(`${serverUrl}/auth/url`);
            // Navigate to consent screen
            window.location.assign(url);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <h3>Login to Dashboard</h3>
            <button className="btn-sign-in" onClick={handleLogin} >Login</button>
        </>
    )

}

export default SignIn