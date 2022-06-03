import { HiLibrary } from 'react-icons/hi';
import React,{ useContext,memo } from "react";
import { Navbar } from "react-bootstrap"
import MyULibraryContext from "../provider/MyULibraryProvider";
import '../styles/estilos.css';
import useLoginHook from "../hooks/useLoginHook";
import MenuStudentRole from './roles/MenuStudentRole';
import MenuLibrarianRole from './roles/MenuLibrarianRole';
const MainNavBar = () => {
    const {loggedUser:{user,role}} = useContext(MyULibraryContext);
    const {logOut} = useLoginHook();
    return (
        <div>
            <Navbar className="mainnavbar" fixed="top">
                <Navbar.Brand className="myFlex">
                    <HiLibrary className='logolibrary ms-2'/>
                    
                        {(role === "student") ? <MenuStudentRole/> : <MenuLibrarianRole/>}
                  
                </Navbar.Brand>
                <div className="text-white text-end me-4" style={{width:'100%'}}>
                    <span className="text-uppercase">{user} ({role})</span>
                    &nbsp;&nbsp;
                    <span onClick={()=>logOut()} className="hand">LOGOUT</span>
                </div>
            </Navbar>
        </div>
    )
}

export default memo(MainNavBar);
