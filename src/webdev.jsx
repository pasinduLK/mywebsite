import React from "react";
import { useNavigate } from "react-router-dom";

const WebDev = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Web Development</h1>
      <p>Welcome to the Web Development page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default WebDev;
