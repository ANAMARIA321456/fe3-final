import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

// Importa tus rutas
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";

// Importa el GlobalProvider
import { GlobalProvider } from "./Components/utils/global.context";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        {/* Navbar siempre visible */}
        <Navbar />

        {/* Contenido principal definido por las rutas */}
        <main style={{ padding: "1rem 0" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </main>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
