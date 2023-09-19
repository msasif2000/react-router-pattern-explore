import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, email, address, phone} = user;
    const userStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h3>Details about user:  {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>City: {address.city}</p>
            <p>Street: {address.street}</p>
            <p>Zipcode: {address.zipcode}</p>

        </div>
    );
};

export default UserDetails;
