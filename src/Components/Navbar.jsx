import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME", payload: newTheme });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favorites</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
