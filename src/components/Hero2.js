import React, { useEffect } from 'react';
import Hero2Image from './hero2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero2 = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          easing: 'ease',
        });
      }, []);

    return (
        <div>
            <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:flex-wrap md:-mx-4">
          <div data-aos="zoom-out-left" className="md:w-1/2 md:px-4 ">
            <h2 className="text-5xl font-extrabold text-gray-900">
              Welcome to <span className='text-orange-500'>MediHealth</span>
            </h2>
            <p className="mt-4 text-gray-500">
              MediHealth is an online health platform that connects patients with
              healthcare providers. Our mission is to improve access to quality
              healthcare for everyone, regardless of location or income.
            </p>
            <p className="mt-4 text-gray-500">
              With MediHealth, you can easily book appointments with doctors,
              dentists, therapists, and other healthcare providers, all from the
              comfort of your own home. Our platform is secure, reliable, and
              easy to use, so you can focus on getting the care you need.
            </p>
          </div>
          <div data-aos="zoom-in-up" className="md:w-1/2 md:px-4 mt-8 md:mt-0">
            <img
              src={Hero2Image}
              alt="About MediHealth"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Hero2;