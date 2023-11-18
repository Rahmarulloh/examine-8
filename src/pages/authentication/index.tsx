import { NavLink } from "react-router-dom";

export default function Auth() {
  return (
    <div>
      <main className="auth-container">
        <NavLink className="auth-btn" to="/player1">
          Register 1st Player
        </NavLink>
        <br />
        <NavLink className="auth-btn" to="/player2">
          Register 2nd Player
        </NavLink>
      </main>
    </div>
  );
}
