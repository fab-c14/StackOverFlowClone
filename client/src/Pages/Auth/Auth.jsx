import React, { useState } from "react";
import icon from '../../assets/sta'
function Auth() {
  // use state variable
  const [isSignup, setIsSignup] = useState(false);
  return (
    <section className='auth-section'>
      <div className='auth-container'>
        {!isSignup && (
          <img src={icon} alt='stackoverflow' className='login-logo' />
        )}
      </div>
    </section>
  );
}

export default Auth;
