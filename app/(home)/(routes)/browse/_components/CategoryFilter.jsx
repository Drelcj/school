"use client"
import React, { useState } from 'react'

function CategoryFilter() {
    const [activeIndex,setActiveIndex]=useState(0)
    const filterOptions=[
        {
            id:1,
            name:'All',
            value: 'all'
        },
        {
            id:2,
            name: 'Basic Cookery Course',
            value: 'beginer'
        },
        {
            id:3,
            name: 'intermidiate culinary Course',
            value: 'intermediate'
        },
        {
            id:4,
            name: 'Professional Diploma In Culinary Arts',
            value: 'proficient'
        },
        {
            id:5,
            name: 'Professional Diploma In Pastry & Cake Crafting ',
            value: 'advanced'
        },
        {
            id:6,
            name: 'Professional Diploma In Culinary Arts[Combined]',
            value: 'expert'
        },
        {
            id:7,
            name: 'Chefs Pick',
            value: 'Master Classes'
        },
        {
            id:8,
            name: 'Intercontinental & Cuisines',
            value: 'guru'
        },
    ]
    return (
        <div className='flex gap-5'>
          {filterOptions.map((item, index) => (
            <button
              key={index} // Use unique ID for keys
              onClick={() => setActiveIndex(index)}

              className={`border p-2 px-4 text-[12px] rounded-md hover:border-orange-500 font-semibold 
              hover:bg-gray-50
              ${
                activeIndex === index ? 'border-orange-500 bg-orange-50 text-orange-600' : ''
              }`}
              
            >
              <h2>{item.name}</h2>
            </button>
          ))}
        </div>
      );
}

export default CategoryFilter