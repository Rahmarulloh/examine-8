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

      <footer className="footer">
        <p className="footer-text">Copyright &copy; 2023</p>
        <p className="footer-text">All Rights Reserved</p>
        <p className="footer-text">Developed by: Uzgur</p>
        <p className="footer-text">Version: 1.0.0</p>
      </footer>
    </div>
  );
}
