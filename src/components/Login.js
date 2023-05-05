import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "./AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";



const Login = () => {

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const location = useLocation(); //getting location to back after login
  const from = location.state?.from?.pathname || '/';

  const {signIn}= useContext(AuthContext);

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn =()=>{
    providerLogin(googleProvider)
    .then(result=> {
      const user = result.user;
      console.log(user);
      if(user.emailVerified){
        navigate(from, {replace: true});
      }
      else{
        toast.error('Your email is not verified')
      }
      
      
    })
    .catch(error=> {
      console.error(error)
      
    })
  }

  const handleSubmit= event =>{
    console.log(event);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then((result)=>{
      const user = result.user;
      console.log(user);
      form.reset();
      
      setError('');
      if(user.emailVerified){
        navigate(from, {replace: true});
      }
      else{
        toast.error('Your email is not verified')
      }
      
      
    })
    .catch(error=> {
      console.log(error)
    setError(error.message)
  });
  }

  return (
    
  <Form onSubmit={handleSubmit}>
    <div className="hero min-h-screen bg-base-200 mt-2">
      <div className="">
        <div className="text-center lg:text-left mb-8 ml-16">
          <h1 className="text-5xl font-bold">Login now!</h1>
    
        </div>
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
    
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <p className="text-red-500">{error}</p>
            <div>
              <p>Create new account <Link className="text-blue-600" to='/register'>Register</Link></p>
            </div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline"><FcGoogle className="me-1"></FcGoogle>  Google Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
    
  );
};

export default Login;
