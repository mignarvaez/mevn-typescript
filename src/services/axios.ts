//Se importa axios para hacer las peticiones al backend y la interfaz axiosinstance para crear una instancia propia de axios
import axios,{AxiosInstance} from 'axios';

//Se crea la configuración por defecto
const axiosInstance: AxiosInstance = axios.create({

    //La url del backend
    baseURL: 'http://localhost:3000/api',
    //Se indica que los datos a enviar serán JSON
    headers:{
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;