import React from 'react';

const Special = ({ring}) => {
   return (
      <div>
         <h2>Special</h2>
         {ring && <p>{ring}</p>}
      </div>
   );
};

export default Special;