import React from 'react';

const Link = ({route}) => {
   return (
      <li className='px-4 hover:bg-purple-600 duration-500'>
         <a href={route.path} > {route.name} </a>
      </li>
   );
};

export default Link;