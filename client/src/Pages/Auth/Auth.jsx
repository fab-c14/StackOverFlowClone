import React, { useState } from "react";
import icon from "../../assets/icon.png";
function Auth() {
  // use state variable
  const [isSignup, setIsSignup] = useState(false);
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
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
            <div>
              <h4> Password </h4>
              {!isSignup && <h4>Forget Password</h4>}
            </div>
            <input type='password' name='password' id='password' />

            {isSignup && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                hic atque possimus.
              </p>
            )}
          </label>
          <button type='submit' className='auth-btn'>
            {isSignup ? "Signup" : "Login"}
          </button>
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
