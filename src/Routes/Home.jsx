import { useEffect, useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card"; // Asegúrate de tener un componente Card para renderizar cada dentista.

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    // Llamada a la API para obtener los dentistas
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DENTISTS", payload: data }));
  }, [dispatch]);

  // Determinar la clase del tema (light o dark)
  const themeClass = state.theme === "light" ? "light-theme" : "dark-theme";

  return (
    <main className={themeClass}>
      <h1>Home</h1>
      <div className="card-grid">
        {/* Renderizar las tarjetas de dentistas */}
        {state.dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
