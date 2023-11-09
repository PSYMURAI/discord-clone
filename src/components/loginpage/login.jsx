import React from 'react';
import qrcode from '../assets/qr-code.png';
import "./login.sass";





const Login = () => {



  return (
    <>
      <div className="main">
        <div className="login-form-main-box">
          <div className="form-main-container">
            <div className="text-container">
              <div className="main-title">Welcome back !</div>
              <div className="secondary-title">
                We're so excited to see you again!
              </div>
            </div>
            <form action="#">
              <div className="input-text email">
                <div className="error">
                  <label htmlFor="email">Email or phone number</label>
                  <span> - Invalid email or password</span>
                </div>

                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  autoComplete="off"
                />
                <br />
              </div>
              <div className="input-text password">
                <div className="error">
                  <label htmlFor="password">Password</label>
                  <span> - Invalid email or password</span>
                </div>
                <input type="password" placeholder="password" />
                <div className="forget-password"><a href="#">Forgot your password?</a>
                </div>
                <button>Log in </button>
                <div className="register-nav-button">
                  <span>Need an account?</span>
                  <button className='register'>Register</button>
                </div>
              </div>
             
             
            </form>
          </div>
          <div className="qr-main-container">
            
            <div className="qr-container">
              <div className="qr-code">
           <img src={qrcode} alt="" />
                </div>
            </div>
            <div className="qr-title-box">
            Log in with QR Code
            </div>
            <div className="qr-secondary-title">
            Scan this with the <strong>Discord mobile app</strong> to log in instantly.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
