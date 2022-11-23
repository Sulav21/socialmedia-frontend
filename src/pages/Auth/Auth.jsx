import React from "react";
import "./auth.css";
import logo from "../../img/logo.png";
export const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={logo} alt="" />
        <div className="webName">
          <h1>Let's Connect!</h1>
          <h6>Connect with the loved ones</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login />
    </div>
  );
};
function Login(){
    return(
        <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
          </div>
          <div>
            <span style={{fontSize:'12px'}}>Don't have an account? SignUp </span>
          
  
          <button className="button-all infoButton">Login</button>
          </div>
        </form>
      </div>
    )
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
        <div>
          <span style={{fontSize:'12px'}}>Already have an account? Login Here</span>
        </div>

        <button className="button-all infoButton">Sign Up</button>
      </form>
    </div>
  );
}
