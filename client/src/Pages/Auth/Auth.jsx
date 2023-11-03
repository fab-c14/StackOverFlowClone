import React, { useState } from "react";
import icon from "../../assets/icon.png";
function Auth() {
  // use state variable
  const [isSignup, setIsSignup] = useState(false);
  return (
    <section className='auth-section'>
      <div className='auth-container'>
        {!isSignup && (
          <img
            src={icon}
            alt='stackoverflow'
            className='login-logo'
            width={"30%%"}
          />
        )}
        <form>
          <label htmlFor='email'>
            <h4> Email </h4>
            <input type='email' name='name' id='email' />
          </label>
          <label htmlFor='password'>
            <div>
              <h4> Password </h4>
              <h4>Forget Password</h4>
            </div>
            <input type='password' name='password' id='password' />
          </label>
          <button type='submit' className='auth-btn'>
            {isSignup ? "Signup" : "Login"}
          </button>
        </form>
        <p>
          {isSignup ? "already have an account?" : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>
            {isSignup ? "Login" : "Signup"}
          </button>
        </p>
      </div>
    </section>
  );
}

export default Auth;
