import {NavLink} from 'react-router-dom';
const MenuStudentRole = () =>{
    return (
        <div>
            <NavLink exact to='books' className="myLink ms-3" key='books'>BOOKS</NavLink>
            <NavLink exact to='books' className="myLink ms-3" key='reservedbooks'>MY RESERVED BOOKS</NavLink>
        </div>
    );
}

export default MenuStudentRole;