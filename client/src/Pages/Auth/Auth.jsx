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
                password must be at least eight
                <br /> character, including at least 1 letter and 1 <br />
                number.
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor='check'>
              <input type='checkbox' id='check' />
              <p id='check'>
                opt-in to receive ocasional <br />
              </p>
            </label>
          )}
          <button type='submit' className='auth-btn'>
            {isSignup ? "Signup" : "Login"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              by clicking sign up you agree to our
              <span style={{ color: "#007a6" }}>
                terms of <br />
                service
              </span>
              and
              <span> style={{ color: "#007a6" }}privacy policy</span>
              <span style={{ color: "#007a6" }}>cookie policy</span>
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
