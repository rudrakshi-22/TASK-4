
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './RegistrationPage.css';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    UserName: '',
    UserPhonenumber: '',
    UserGender: '',
    UserBio: ''
  });

  const submitUserData = async () => {
    try {
      const response = await axios.post('https://email-sending-and-verification.onrender.com/User/Registration', userData);
      if (response.status == 200) {
        console.log('User Registered', response.data);
        navigate('/thankyou');
      }
    } catch(error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h1 className='textarea'>Registration</h1>
      <div className='registrationcontainer'>
        <div>
          <label className='registertag'>Name:</label>
          <input className="registertext2" type="text" value={userData.UserName} onChange={(e) => setUserData({...userData, UserName: e.target.value})} />
      
        </div>
        <div>
          <label className='registertag'>Phone Number:</label>
          <input className="registertext3" type="text" value={userData.UserPhonenumber} onChange={(e) => setUserData({...userData, UserPhonenumber: e.target.value})} /> 
        </div>
        <div>
          <label className='registertag'>Gender:</label> <br>
          </br>
          <input className="registertext1 " type="text" value={userData.UserGender} onChange={(e) => setUserData({...userData, UserGender: e.target.value})} /><br></br>
        </div>
        <div>
          <label className='registertag'>Bio:</label>
          < textarea  className="registertext4" value={userData.UserBio} onChange={(e) => setUserData({...userData, UserBio: e.target.value})} /> 
        </div>
       
        <button className="submitbtn" onClick={submitUserData}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
