import React from 'react';               //Function Component
const Post = (props) =>{
    // const { myId, content } = props;
    const myId = props.myId;
    const content = props.children;

    return(
        <div>
            <h3> part {myId}</h3>
            <p>{content}</p>
        </div>
    )
}
export default Post;