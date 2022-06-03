import '../styles/estilos.css';
const SuccessAlert = ({mensajeReq}) => {
    return (
        <div className="alert alert-success alert-dismissible fixed-top center-block text-center myAlert">
            <i className="fas fa-check-circle"></i> <span style={{fontSize:'18px'}}>{mensajeReq}</span>
        </div>
    )
}

const ErrorAlert = ({mensajeReq}) => {
    return (
        <div className="alert alert-danger alert-dismissible fixed-top center-block text-center myAlert">
            <h4>{mensajeReq}</h4>
        </div>
    )
}

const MyAlert = ({alert}) => {
    const {type,msg} = alert;
    let typeAlert = '';
    if(type === "s") typeAlert = "success"; 
    if(type === "w") typeAlert = "warning"; 
    if(type === "e") typeAlert = "danger"; 
    return (
        <div className={`alert alert-${typeAlert} alert-dismissible fixed-top center-block text-center myAlert`}>
            <h4>{msg}</h4>
        </div>
    )
}

export {SuccessAlert,ErrorAlert,MyAlert}
