import Header from "./Header";
import { useState } from "react";
const Login = () =>{
  const [IsSignInForm,setIsSignInForm] = useState(true);
  const toggleSignInForm = () =>{
    setIsSignInForm(!IsSignInForm);
  }
  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"></img>
      </div>
      <form className="absolute bg-black p-12 w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 className="font-bold text-3xl py-3">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-3 w-full bg-gray-700"></input>
        {!IsSignInForm &&  <input type="text" placeholder="Full Name" className="p-4 my-3 w-full bg-gray-700"></input> }
        <input type="password" placeholder="Password" className="p-4 my-3 w-full bg-gray-700"></input>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{IsSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{IsSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login;