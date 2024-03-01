import axios from 'axios'

const ConexionWS = axios.create({
    baseURL: `http://localhost:3001/control-gastos/api/v1` 
})

export default ConexionWS