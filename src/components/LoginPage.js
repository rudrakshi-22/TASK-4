import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';


 
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendOTP = async () => {
    try {
      const response = await axios.post('https://email-sending-and-verification.onrender.com/user/signup', {
        userEmail: email 
      });
      alert(response.data["msg"]);
      
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
      if (response.data == "Email verified successfully!") {
        console.log('OTP Verified:', response.data);
        navigate('/register');
      }
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

    </div>
  );
};

export default LoginPage;