import {useRef,useEffect} from 'react';
import LoginNavBar from './LoginNavBar';
import useLoginHook from '../hooks/useLoginHook';
import { ErrorAlert } from '../utilcomponents/Alerts';
import Loading from '../utilcomponents/Loading';
import '../styles/loginscreenstyle.css';
const LoginScreen = () => {
    const {handleInputs,loginData,handleSubmit,loginFail,isLoading} = useLoginHook();
    const myInputFocus = useRef();
    useEffect(() => {
        let mounted = true;
        if(mounted){
            myInputFocus.current.focus();
        }
        return () => mounted = false;
    }, [])
    return (
        <div>
            {isLoading && <Loading/>}
            <LoginNavBar />
            <div className="container">
                <div className="row text-center box">
                    {loginFail && <ErrorAlert mensajeReq="Usuario o contraseña Incorrectos" />}
                    <div className="col-2"></div>
                    <div className="col-8 text-center">
                        <div className="row miBox text-center rounded shadow-lg">
                            <div className="col-6 text-center fondologin rounded-start">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h3 className="text-white">MY U LIBRARY</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 text-center">
                                <form onSubmit={(e)=>handleSubmit(e)}>
                                    <h3 className="mb-5">ACCEDER</h3>
                                    <div className="form-floating mb-3">
                                        <input name="user" value={loginData.user} onChange={handleInputs} type="text" ref={myInputFocus} className="form-control" id="textUser" />
                                        <label htmlFor="textUser">Usuario</label>
                                    </div>
                                    <div className="form-floating">
                                        <input name="password" value={loginData.password} onChange={handleInputs} onKeyUp={(e)=>{e.keyPress==="Enter" && this.submit()}}type="password" className="form-control" id="textPassword"/>
                                        <label htmlFor="textPassword">Contraseña</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btm-lg mt-4">Acceder</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
