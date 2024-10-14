import React from 'react';
import InputField from '../compnents/InputField';
import AuthButton from '../compnents/AuthButton';

const Auth = () => {
  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form>
          <InputField label='Username' type='text' id='username' />
          <InputField label='password' type='password' id='password' />

          <div className='input-remember'>
            <input type='checkbox' id='remember-me' />
            <label for='remember-me'>Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE  */}
          <AuthButton text='Sign In' />
          {/* SHOULD BE THE BUTTON BELOW  */}
          {/* <button className="sign-in-button">Sign In</button>  */}
        </form>
      </section>
    </main>
  );
};

export default Auth;
