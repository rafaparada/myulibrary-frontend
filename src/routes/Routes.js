import { useContext } from 'react'
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import LoginScreen from '../loginscreen/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import PrivateRouter from './PrivateRouter'
import PublicRoutes from './PublicRoutes'
import MyULibraryContext from '../provider/MyULibraryProvider'
const Routes = () => {
    const {loggedUser:{login}} = useContext(MyULibraryContext);
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isAuthenticated={login} exact path="/login" component={LoginScreen} />
                    <PrivateRouter isAuthenticated={login} path="/" component={DashboardRoutes} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes
