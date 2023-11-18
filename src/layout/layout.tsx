import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Tic Tac Toe</h1>
          <NavLink to="/auth">Register Players </NavLink>
        </nav>
      </header>
      <br />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
