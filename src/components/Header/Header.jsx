import { Link } from 'react-router-dom';
import './Header.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;