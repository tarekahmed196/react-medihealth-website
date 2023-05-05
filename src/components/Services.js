import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Doctors from "./Doctors";

const Services = () => {
  const doctors1 = useLoaderData();
  // const [categories, setCategories]= useState([]);

  // useEffect(()=>{
  //     fetch('https://medihealth-website.onrender.com/doctor-categories')
  //     .then(res=> res.json())
  //     .then(data=>setCategories(data))
  // }, [])

  return (
    <div className="my-28 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center">All Services Here</h1>

      {/* <h1>hellow</h1>
      <h1>Services component: {categories.length}</h1>
      {
        categories.map(category=> <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>)
      } */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 container mx-auto">
        {doctors1.map((doctor) => (
          <Doctors key={doctor._id} doctor={doctor}></Doctors>
        ))}
      </div>
    </div>
  );
};

export default Services;
