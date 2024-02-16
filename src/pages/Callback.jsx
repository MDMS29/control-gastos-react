import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"

import axios from "axios"
import { AuthContext } from "../providers/AuthProvider"

const Callback = () => {
    const serverUrl = import.meta.env.VITE_BACKEND_URL;
    const called = useRef(false)
    const { checkLoginState, loggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            if (loggedIn === false) {
                try {
                    if (called.current) return // prevent rerender caused by StrictMode
                    called.current = true
                    const { data } = await axios.get(`${serverUrl}/usuarios/auth/token${window.location.search}`)
                    console.log('response: ', data)
                    checkLoginState()
                    navigate('/')
                } catch (err) {
                    console.error(err)
                    navigate('/')
                }
            } else if (loggedIn === true) {
                navigate('/')
            }
        })()
    }, [checkLoginState, loggedIn, navigate])
    return <></>
}

export default Callback