import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
   const posts = useLoaderData()

   return (
      <div>
         <h1> This is a Posts: {posts.length} </h1>

         <div>
            {
               posts.map(post => <Post key={post.id} post={post} />)
            }
         </div>

      </div>
   );
};

export default Posts;