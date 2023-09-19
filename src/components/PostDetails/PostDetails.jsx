import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
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
            <p>{body}</p>

        </div>
    );
};

export default PostDetails;