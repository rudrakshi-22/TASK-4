import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('https://email-sending-and-verification.onrender.com/user/signup', {
        userEmail: email 
      });
      console.log('OTP Sent:', response.data);
      
    } catch (error) {
      console.error('Error sending OTP:', error);
      
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post('https://email-sending-and-verification.onrender.com/emailverify/signup', {
        userEmail: email, 
        otp: otpCode 
      });
      console.log('OTP Verified:', response.data);
      
    } catch (error) {
      console.error('Error verifying OTP:', error);
      
    }
  };

  return (
    <div className="login-container">
      <h1 className='logintext'>LogIn</h1>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={handleEmailChange}
        className="input-field"
      />
      <button onClick={handleSendOTP} className="send-otp-btn">
        Send OTP
      </button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otpCode}
        onChange={(e) => setOtpCode(e.target.value)}
        className="input-field"
      />
      <button onClick={handleVerifyOTP} className="verify-otp-btn">
        Verify OTP
      </button>
      <Link to="register">Register</Link>
    </div>
  );
};

export default LoginPage;