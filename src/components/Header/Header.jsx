import { NavLink } from 'react-router-dom';
import './Header.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
               
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;