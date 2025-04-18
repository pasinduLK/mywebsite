import React from "react";
import { useNavigate } from "react-router-dom";

const Modeling = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>3D Modeling</h1>
      <p>Welcome to the 3D Modeling page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Modeling;
