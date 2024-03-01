import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { AuthContext } from "../providers/AuthProvider"
import ConexionWS from "../config/ConexionWS"

const Callback = () => {
    const called = useRef(false)
    const { checkLoginState, loggedIn } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            if (loggedIn === false) {
                try {
                    if (called.current) return // prevent rerender caused by StrictMode
                    called.current = true
                    const { data } = await ConexionWS.get(`/usuarios/auth/token${window.location.search}`)
                    console.log('response: ', data)

                    localStorage.setItem(`user_ini_token`, JSON.stringify(data.token) ?? '') 
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