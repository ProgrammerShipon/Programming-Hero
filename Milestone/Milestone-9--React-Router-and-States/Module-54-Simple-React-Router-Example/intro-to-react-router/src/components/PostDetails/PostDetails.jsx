import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
   const post = useLoaderData()
   const {id, body, title, userId} = post;

   const navigate = useNavigate()

   const goBack = () => { navigate(-1) }

   return (
      <div>
         <p>PostId : {id} </p>
         <p> UserId: {userId}</p>
         <h2>{title}</h2>
         <p>{body}</p>

         <button onClick={goBack}>Go Back</button>
      </div> 
   );
};

export default PostDetails;