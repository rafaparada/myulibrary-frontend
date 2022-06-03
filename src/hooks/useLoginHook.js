import {useState,useContext} from 'react';
import { useHistory } from 'react-router-dom';
import MyULibraryContext from '../provider/MyULibraryProvider';
import { api_address_base } from '../get/getinfoapi';
const useLoginHook = () =>{
    const [loginData,setLoginData] = useState({user:'',password:''});
    const [loginFail,setLoginFail] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const {setLoggedUser,setAccesos} = useContext(MyULibraryContext);
    const history = useHistory();
    const handleInputs = e =>{
        const loginInfo = {...loginData};
        loginInfo[e.target.name] = e.target.value;
        setLoginData(loginInfo);
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(loginData.user.length <=3 || loginData.password <=5){
            setLoginFail(true);
            return;
        }
        const options = {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(loginData)};
        try{
            setIsLoading(true);
            const sendRequest = await fetch(api_address_base+'/users/login',options);
            const respuesta   = await sendRequest.json();
            if(respuesta.login){
                const user = {...respuesta.userInfo[0],token:respuesta.token,login:true};
                setLoggedUser({...user});
                localStorage.setItem('user',JSON.stringify(user));
                setAccesos([...respuesta.userInfo.accesos]);
                localStorage.setItem('accesos',JSON.stringify(respuesta.userInfo.accesos));
                history.replace('/home');
            }else{
                setLoginFail(true);
                setTimeout(()=>{
                    setLoginFail(false);
                },2000);
            }
            setIsLoading(false);
        }catch(error){

        }
    }

    const logOut = () =>{
        setLoggedUser(user=>{
            return {...user,login:false};
        });
        localStorage.removeItem('user');
        //localStorage.removeItem('accesos');
        history.replace('/login');
    }

    return {loginData,handleInputs,handleSubmit,loginFail,isLoading,logOut};
}


export default useLoginHook;