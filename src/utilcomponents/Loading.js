import { useEffect } from 'react';
import '../styles/estilos.css';
const Loading = () =>{
    useEffect(()=>{
        return ()=>{}
    },[]);
    return(
        <div className="d-flex text-center align-items-center myLoading">
            <div className="spinner-border text-primary tamano" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>
    );
}

export default Loading;