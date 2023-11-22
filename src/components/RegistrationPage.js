
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [userData, setUserData] = useState({
    UserName: '',
    UserPhonenumber: '',
    UserGender: '',
    UserBio: ''
  });

  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://email-sending-and-verification.onrender.com/User/Registration'); 
       
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Registration</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={userData.UserName} readOnly />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={userData.UserPhonenumber} readOnly />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" value={userData.UserGender} readOnly />
        </div>
        <div>
          <label>Bio:</label>
          <textarea value={userData.UserBio} readOnly />
        </div>
       
        <button type="submit">Register</button>
      </form>
      <Link to="/">Login</Link> 
      <Link to="/thankyou">Thank You</Link> 
    </div>
  );
};

export default RegistrationPage;
