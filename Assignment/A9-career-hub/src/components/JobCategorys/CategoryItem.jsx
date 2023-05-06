import React from 'react';
import './JobCategorys.css';

const CategoryItem = ({ job }) => {
   const {category_logo, category_name, jobs_available} = job
   return (
      <div className='jobCategory-item'>
         <figure>
            <img className='object-contain w-10 h-10' src={category_logo} />
         </figure>
         <h1>{category_name}</h1>
         <p>{jobs_available.length}+ Jobs Available</p>
      </div>
   );
};

export default CategoryItem;