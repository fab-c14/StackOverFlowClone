import React, { useState } from "react";
import icon from "../../assets/icon.png";
import AboutAuth from "./AboutAuth";
import "./Auth.css";
function Auth() {
  // use state variable
  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  return (
    <section className='auth-section'>
      {isSignup && <AboutAuth />}
      <div className='auth-container-2'>
        {!isSignup && (
          <img
            src={icon}
            alt='stackoverflow'
            className='login-logo'
            width={"30%"}
          />
        )}
        <form>
          {isSignup && (
            <label htmlFor='name'>
              <h4>Display Name</h4>
              <input type='text' id='name' name='name' />
            </label>
          )}

          <label htmlFor='email'>
            <h4> Email </h4>
            <input type='email' name='name' id='email' />
          </label>
          <label htmlFor='password'>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4> Password </h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forget Password
                </p>
              )}
            </div>
            <input type='password' name='password' id='password' />

            {isSignup && (
              <p tyle={{ fontSize: "13px" }}>
                password must be at least eight
                <br /> character, including at least 1 letter and 1 <br />
                number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' name='check' id='check' />
              <p tyle={{ fontSize: "13px" }}>
                Opt-in to receive <br /> prodcut updates, user research
                invitations,
                <br /> company announcements, and digests.
              </p>
            </label>
          )}
          <button type='submit' className='auth-btn'>
            {isSignup ? "Signup" : "Login"}
          </button>

          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "sing up", you agree to our
              <span style={{ color: "#007ac6" }}>
                terms of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}>privacy policy</span>
              and
              <span style={{ color: "#007ac6" }}> cookie policy</span>
            </p>
          )}
        </form>

        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}
          <button
            type='button'
            className='handle-switch-btn'
            onClick={handleSwitch}
          >
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
