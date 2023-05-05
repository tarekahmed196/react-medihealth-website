import React from "react";
import { Link } from "react-router-dom";

const Doctors = ({ doctor }) => {
    console.log(doctor
        );
    
  return (
    <div className="mt-16 transform hover:scale-105 transition duration-300">
     
    
      <div className="card w-full glass">
        <figure>
          <img className="h-52 w-full"
            src={doctor.image_url} alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{doctor.author.name}</h2>
          {
            doctor.details.length >100 ?
              <p>{doctor.details.slice(0,100) + '...'} 
                  <Link className="btn btn-success btn-outline" to={`/doctors/${doctor._id}`}>Read More</Link>
              </p>
              :
              <p>{doctor.details}</p>

          }
          
        </div>
      </div>
    </div>
  );
};

export default Doctors;
