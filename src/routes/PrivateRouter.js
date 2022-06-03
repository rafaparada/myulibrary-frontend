import {Route,Redirect} from 'react-router-dom';

const PrivateRouter = ({isAuthenticated,component:Component,...rest})=>{
    return (
        <Route {...rest} component = {(props)=>((isAuthenticated) ? <Component {...props}/>:<Redirect to="login" />)} />
    );
}

export default PrivateRouter;