import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate for redirecting

const Logout = () => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Remove the login status from localStorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("steps");
    alert("You have successfully logged out!");
    
    // Redirect to the Homepage
    navigate("/"); // You can change the path if needed
  };

  useEffect(() => {
    handleLogout(); // Automatically log out when this component is mounted
  }, []);

  return (
    <div className="logout">
      <h1>Logging out...</h1>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  );
};

export default Logout;
