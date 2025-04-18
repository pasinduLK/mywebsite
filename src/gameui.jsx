import React from "react";
import { useNavigate } from "react-router-dom";

const GameUI = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Game UI Designing</h1>
      <p>Welcome to the Game UI Designing page.</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default GameUI;
