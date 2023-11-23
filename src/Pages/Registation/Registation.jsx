import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const Registation = () => {
  const [data , setData] = useState('')
    const {createEmailPass, Swal} = useContext(AuthContext)
   const navigate = useNavigate()
    const handleRegistration = (e) => {
        e.preventDefault()
       const email = e.target.email.value
       const password = e.target.password.value
       const name = e.target.name.value
       console.log(email, password, name);

// validation

      if(password.length < 6){
     return   setData('Password should be at least 6 characters')
        // console.log('pass to sortPassword should be at least 6 characters');
      }
     else if(!/([A-Z])([#?!@$%^&*-])/.test(password)){
     return setData('in password must have one uper case and special character')
     }
       createEmailPass(email,password)
        .then(res => {
          Swal.fire({
            text: 'login done',
            icon: 'success',
            confirmButtonText: 'ok'
          })
        navigate('/')
        console.log(res.user);
       })
       .catch(err => console.log(err.message))
    }
  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registation Please</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <p href="#" className="label-text-alt link link-hover text-red-500">* {data}</p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="ml-10 mb-12">Already have an account ? <Link to='/login' className="text-2xl text-blue-600">please Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Registation;