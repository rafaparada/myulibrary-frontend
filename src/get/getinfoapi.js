
//const api_address_base = 'http://192.168.1.3:8000/api';
const api_address_base = 'http://localhost:8000/api';

const getUsuarios = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/users',options);
        const {users} = await request.json();
        return users;
    }catch(error){
        console.log('Sucedió un error');
    }
}
const getUsuariosByDepto = async(token,iddepartamento)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/usersbydeptos/'+iddepartamento,options);
        const {users} = await request.json();
        return users;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getUsuariosRecibenCorrespondencia = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/usersrecibencorrespondencia',options);
        const {users} = await request.json();
        return users;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getCyrDepartments = async(token) =>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request         = await fetch(api_address_base+'/cyrdepartments',options);
        const {cyrDeparments} = await request.json();
        return cyrDeparments;
    }catch(error){
        console.log(error);
    }
}

const getDocumentsType = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request         = await fetch(api_address_base+'/documentstype',options);
        const {documentstype} = await request.json();
        return documentstype;
    }catch(error){
        console.log(error);
    }
}

const getInsuranceCompanies = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request              = await fetch(api_address_base+'/insurancecompanies',options);
        const {insuranceCompanies} = await request.json();
        return insuranceCompanies;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceByUser = async(idusuario,token) =>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request          = await fetch(api_address_base+'/correspondence/'+idusuario,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceById = async(idcorrespondencia,token) =>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request          = await fetch(api_address_base+'/correspondenceid/'+idcorrespondencia,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceByDepto = async(iddeparment,token) =>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request          = await fetch(api_address_base+'/correspondencedepto/'+iddeparment,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceByStatus = async(token,idusuario)=>{
    const estado = 3;
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request          = await fetch(api_address_base+'/correspondence/status/'+idusuario+'/'+estado,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceToApproval = async(token,idusuario,iddepartamento)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request          = await fetch(api_address_base+'/correspondencetoapproval/'+iddepartamento+'/'+idusuario,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenceToApprovalCobros = async(token,idusuario,iddepartamento)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request          = await fetch(api_address_base+'/correspondencetoapprovalcobros/'+iddepartamento+'/'+idusuario,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log(error);
    }
}

const getMensajeros = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/mensajeros',options);
        const {mensajeros} = await request.json();
        return mensajeros;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getCorrespondenceInRoute = async(token,idmensajero,iddepartamento,idusuario,estado)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/correspondenceinroute/'+idmensajero+'/'+iddepartamento+'/'+idusuario+'/'+estado,options);
        const {correspondenceinroute} = await request.json();
        return correspondenceinroute;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getRecados = async(token,idusuario)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request   = await fetch(api_address_base+'/recados/'+idusuario,options);
        const {recados} = await request.json();
        return recados;
    }catch(error){
        console.log('Sucedió un error');
    }
}
const getAsignarRecados = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request   = await fetch(api_address_base+'/recados',options);
        const {recados} = await request.json();
        return recados;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getCorrespondenciaPendiente = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request   = await fetch(api_address_base+'/reportecorrespondenciapendiente',options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getCorrespondenciaRecibida = async(token,fecha,ampm)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request          = await fetch(api_address_base+'/correspondenciarecibida/'+fecha+'/'+ampm,options);
        const {correspondence} = await request.json();
        return correspondence;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getUsersToReportPendingWork = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/userstoreport',options);
        const {users} = await request.json();
        return users;
    }catch(error){
        console.log('Sucedió un error');
    }
}
const getTrabajoPendienteByUser = async(token,idusuario)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/trabajopendienteporuser/'+idusuario,options);
        const {correspondencia} = await request.json();
        return correspondencia;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getUsuariosAdmin = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/usuariosadmin',options);
        const {users} = await request.json();
        return users;
    }catch(error){
        console.log('Sucedió un error');
    }
}
const getOpciones = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/opciones',options);
        const {opciones} = await request.json();
        return opciones;
    }catch(error){
        console.log('Sucedió un error');
    }
}
const getRoles = async(token)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/roles',options);
        const {roles} = await request.json();
        return roles;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getAccesos = async(token,idrol)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request = await fetch(api_address_base+'/accesos/'+idrol,options);
        const {accesos} = await request.json();
        return accesos;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getCorrespondenciaPendienteAprovacionCG = async(token,idusuario,iddepartamento)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request           = await fetch(api_address_base+'/correspondenciapendienteaprobacioncg/'+iddepartamento+'/'+idusuario,options);
        const {correspondencia} = await request.json();
        return correspondencia;
    }catch(error){
        console.log(error);
    }
}

const getCorrespondenciaFinalizarPorMi = async(token,idusuario)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}};
    try{
        const request           = await fetch(api_address_base+'/correspondenciafinalizarpormi/'+idusuario,options);
        const {correspondenceinroute} = await request.json();
        return correspondenceinroute;
    }catch(error){
        console.log(error);
    }
}

const getRecadosHistorial = async(token,filtro,tipofiltro,idusuario)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request   = await fetch(api_address_base+'/recados/'+filtro+'/'+tipofiltro+'/'+idusuario,options);
        const {recados} = await request.json();
        return recados;
    }catch(error){
        console.log('Sucedió un error');
    }
}

const getConsultaGeneral = async(token,stringSearch,activePage)=>{
    const options = {method:'GET',headers:{'Authorization':'Bearer '+token}}
    try{
        const request   = await fetch(api_address_base+'/consultageneral/'+stringSearch+'/'+activePage,options);
        const {resultado} = await request.json();
        return resultado;
    }catch(error){
        console.log('Sucedió un error');
    }
}



export {
    getUsuarios,
    getCyrDepartments,
    getInsuranceCompanies,
    getCorrespondenceByUser,
    getDocumentsType,
    getCorrespondenceById,
    getCorrespondenceByDepto,
    getCorrespondenceByStatus,
    getCorrespondenceToApproval,
    getCorrespondenceToApprovalCobros,
    getMensajeros,
    getCorrespondenceInRoute,
    getUsuariosByDepto,
    getUsuariosRecibenCorrespondencia,
    api_address_base,
    getRecados,
    getAsignarRecados,
    getCorrespondenciaPendiente,
    getCorrespondenciaRecibida,
    getUsersToReportPendingWork,
    getTrabajoPendienteByUser,
    getUsuariosAdmin,
    getOpciones,
    getRoles,
    getAccesos,
    getCorrespondenciaPendienteAprovacionCG,
    getCorrespondenciaFinalizarPorMi,
    getRecadosHistorial,
    getConsultaGeneral
};