import {NavLink} from 'react-router-dom';
const MenuLibrarianRole = () =>{
    return (
        <div>
            <NavLink exact to='books' className="myLink ms-3" key='addbooks'>ADD BOOKS</NavLink>
            <NavLink exact to='books' className="myLink ms-3" key='adduser'>ADD USERS</NavLink>
        </div>
    );
}

export default MenuLibrarianRole;