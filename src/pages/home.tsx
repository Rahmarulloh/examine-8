import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <p>This is the home page</p>
      <NavLink className="auth-btn" to="/auth">Register Players</NavLink>
    </div>
  );
}
