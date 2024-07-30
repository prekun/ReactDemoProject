import React from 'react';

const Comment = (props) => {
  const { userId, data } = props;
  return (
    <div>
        {/* <i>from Comment {props.LastName}</i> */}
      <span>{data} from id : {userId}</span>
    </div>
  )
};
export default Comment;
