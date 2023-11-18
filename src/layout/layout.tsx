import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className="nav-logo">
            <h1>Tic Tac Toe</h1>
          </NavLink>
          <NavLink to="/auth" className="nav-auth-btn">
            Register Players{" "}
          </NavLink>
        </nav>
      </header>
      <br />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
