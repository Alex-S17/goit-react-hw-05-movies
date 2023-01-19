import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

export function AppBar() {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink className={css.navigationLink} to="/">Home</NavLink>
          <NavLink className={css.navigationLink} to="/movies">Movies</NavLink>
        </nav>
      </header>
    </>
  );
};