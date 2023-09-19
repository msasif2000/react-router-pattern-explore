import { PropTypes } from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
    }
    const handleShowDetail =() =>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post ID: {id}</h4>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post details</Link>
            <button onClick={handleShowDetail}>click to see details</button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;