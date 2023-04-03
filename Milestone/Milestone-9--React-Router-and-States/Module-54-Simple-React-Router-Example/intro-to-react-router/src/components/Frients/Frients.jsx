import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Frients = () => {
   const friends = useLoaderData()
   console.log(friends)
   return (
      <div>
         <h2> These are my Friends: {friends.length} </h2>
         {
            friends.map(friend => <Friend key={friend.id} friend={friend} />)
         }
      </div>
   );
};

export default Frients;