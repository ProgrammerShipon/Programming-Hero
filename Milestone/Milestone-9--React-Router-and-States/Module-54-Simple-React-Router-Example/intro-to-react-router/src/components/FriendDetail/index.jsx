import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {

   const friend = useLoaderData()
   useEffect(() => {
      console.log('its friend file --> ', friend)
   }, [])

   
   
   // const { name, phone, email, website } = friend;
   return ( 
      <div>
         <h1> This is a Friend Details </h1>
         {/* <div>
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
            <p>Phone: {phone} </p>
            <p>Website: {website} </p>
         </div> */}
      </div>
   );
};

export default FriendDetail;