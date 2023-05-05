import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "./AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {

  const [error, setError] = useState('');

  const {createUser, updateUserProfile,verifyEmail} = useContext(AuthContext);

  const handleSubmit= event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
    .then(result=>{
      const user = result.user;
      form.reset();
      console.log(user);
      handleUpdateUserProfile(name);
      handleEmailVerification()
      toast.success('Please verify your email')
    })
    .catch(error=> {
      console.error(error)
      setError(error.message)
    });
  }

  const handleUpdateUserProfile = (name)=>{
    const profile={
      displayName: name
    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(error=> console.error(error));
  }

  const handleEmailVerification = () =>{
    verifyEmail()
    .then(()=>{})
    .catch(error=> console.error(error))
  }


  return (
    <Form onSubmit={handleSubmit}>
      <div className="hero min-h-screen bg-base-200 mt-16">
        <div className="">
          <div className="text-center lg:text-left mb-8 ml-8">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
      
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p className="text-red-500">{error}</p>
              <div>
                  <p>Already have an account? <Link className="text-blue-600" to='/login'>Login</Link></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Register;
