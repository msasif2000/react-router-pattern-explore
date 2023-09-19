
import {PropTypes} from 'prop-types';
import { Link } from 'react-router-dom';
const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            {email && <p>Email: {email}</p>}
            {phone && <p>Phone: {phone}</p>}
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
};

export default User;