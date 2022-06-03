import { Switch,Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import MainNavBar from "../pages/MainNavBar";
/*import HomePage from "../pages/HomePage";
import InOfficeMainPage from "../pages/inofficepage/InOfficeMainPage";
import MainNavBar from "../pages/MainNavBar";
import MyAssignedCorrespondenceMainPage from "../pages/myassignedcorrespondencepage/MyAssignedCorrespondenceMainPage";
import RecibirCorrespondencia  from "../pages/RecibirCorrespondencia";
import ApproveCorrespondeceMainPage from "../pages/approvecorrespondence/ApproveCorrespondeceMainPage";
import MessagesMainPage from "../pages/messages/MessagesMainPage";
import ReportsMainPage from "../pages/Reports/ReportsMainPage";
import AsignMessagesMainPage from "../pages/asignmessages/AsignMessagesMainPage";
import UsuariosMainPage from "../pages/usuarios/UsuariosMainPage";
import ConsultasMainPage from "../pages/consultas/ConsultasMainPage";*/
const DashboardRoutes = () =>{
    return(
        <>
            {<MainNavBar />}
            <div>
                { <Switch>
                    <Route exact path='/home' component={HomePage} />
                   {/* <Route exact path='/inoffice' component={InOfficeMainPage} />
                    <Route exact path="/recibir" component={RecibirCorrespondencia} />
                    <Route exact path="/misasignaciones" component={MyAssignedCorrespondenceMainPage} />
                    <Route exact path="/aprovarcorrespondencia" component={ApproveCorrespondeceMainPage} />
                    <Route exact path="/misrecados" component={MessagesMainPage}/>
                    <Route exact path="/reportes" component={ReportsMainPage} />
                    <Route exact path="/asignarmensajes" component = {AsignMessagesMainPage} />
                    <Route exact path="/usuarios" component = {UsuariosMainPage} />
                    <Route exact path="/consultas" component = {ConsultasMainPage} /> */}
                </Switch> }
            </div>
        </>
    );
}

export default DashboardRoutes;