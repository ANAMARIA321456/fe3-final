import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();

const initialState = {
  theme: "light",
  dentists: [],
  favorites: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Validación de prop-types
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
