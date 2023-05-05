import React, { useEffect } from "react";
import Hero from './Hero.jpg';
import { useLoaderData } from "react-router-dom";
import Doctors from "./Doctors";
import Hero2 from "./Hero2";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const doctors = useLoaderData()

    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
      });
    }, []);
  return (
    <div>
      <div
        className="hero h-screen "
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
            The website offers a range of services to support the health and wellness needs of individuals, including telemedicine consultations, online prescription refills, and health products for sale.
            </p>
            <button className="btn btn-success btn-outline">Get Started</button>
          </div>
        </div>
      </div>

      <Hero2></Hero2>
      {/* <h2>total doctors: {doctors.length}</h2> */}
      <div className="max-w-7xl mx-auto ">
        <h1 data-aos="zoom-out-down" data-aos-duration="1000" data-aos-easing="ease-out" className="text-center text-4xl font-bold mt-16 mb-0">MEET OUR DOCTORS</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 container mx-auto">
            {
              doctors.map(doctor => <Doctors
              key={doctor._id}
              doctor ={doctor}
              ></Doctors>)
            }
        </div>
      </div>
      
    </div>
  );
};

export default Home;
