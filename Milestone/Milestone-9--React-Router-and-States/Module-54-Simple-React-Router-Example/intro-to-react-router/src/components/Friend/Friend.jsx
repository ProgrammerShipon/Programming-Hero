import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
   console.log('Fri -> ', friend)
   const {email, name, id, phone} = friend
   return (
      <div className='friend'>
         <h3>Name: {name} </h3>
         <p>Email: {email} </p>
         <p>Phone: {phone} </p>
         <button><Link to={`/friend/${id}`} > Show more </Link> </button>
      </div>
   );
};

export default Friend;