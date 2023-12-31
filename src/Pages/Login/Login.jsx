import { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";


const Login = () => {
  const [notMatch, setNotMatch] = useState('')
  const { existingUserSignIn, createGoogleAuth, Swal } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value



    existingUserSignIn(email, password)
      .then(res => {
        Swal.fire({
          text: 'login done',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        navigate('/')
        console.log(res.user)
      })

      .catch(() => {
        setNotMatch('invallid password')
      })
  }
  console.log(notMatch);
  const handleGoogleSignIn = () => {
    createGoogleAuth()
      .then(res => {
        Swal.fire({
          text: 'login done',
          icon: 'success',
          confirmButtonText: 'ok'
        })
        console.log(res.user)
      })
      .catch(err => {
        console.log(err.message)})
  }


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">login Please</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
         <p>{notMatch}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-12 mb-12">Login with <Link onClick={handleGoogleSignIn} className="text-3xl text-blue-600">Google</Link></p>
          <p className="ml-10 mb-12">create an account ? <Link to='/register' className="text-2xl text-blue-600">Create Account</Link></p>

        </div>
      </div>
    </div>
  );
};

export default Login;