import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllDoctors = () => {
  const doctor = useLoaderData();
  return (
    <div className="mt-32 max-w-md mx-auto ">
      <h1 className="text-center text-5xl">Doctor's Details</h1>

      <div className="mt-6 pl-8">
        <div className="card mr-0 w-96 glass">
          <figure>
            <img className="h-52 w-full" src={doctor.image_url} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{doctor.title}</h2>
            {
              <p>
                {doctor.details}
                <Link className="btn btn-warning btn-outline" to={"/"}>
                  Go to Home
                </Link>
              </p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
