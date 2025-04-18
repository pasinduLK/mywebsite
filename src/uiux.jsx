import React from "react";
import { useNavigate } from "react-router-dom";

const UIUX = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>UI/UX Designing</h1>
      <p>Welcome to the UI/UX Designing page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UIUX;
