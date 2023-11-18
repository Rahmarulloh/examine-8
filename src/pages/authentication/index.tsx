import { NavLink, Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div>
      <main>
        <NavLink to="/player1">Register 1st Player</NavLink>
        <br />
        <NavLink to="/player2">Register 2nd Player</NavLink>
      </main>
    </div>
  );
}
