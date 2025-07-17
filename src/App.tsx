import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Home, Reservas, Tours } from "./pages";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/reservas" element={<Reservas />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
