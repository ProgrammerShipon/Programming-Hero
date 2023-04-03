import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
   const { id, title, userId } = post

   const navigate = useNavigate()

   const handleNavigate = () => navigate(`/posts/${id}`)

   return (
      <div className='Posts'>
         <p>userId: {userId} </p>
         <h2> {title} </h2>
         <button><Link to={`/posts/${id}`}> Show Details </Link></button>
         <button onClick={handleNavigate}> Navigate System </button>
      </div>
   );
};

export default Post;