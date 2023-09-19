import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title} = post;
    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <div style={postStyle}>
            <h4>Post ID: {id}</h4>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post details</Link>

        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;