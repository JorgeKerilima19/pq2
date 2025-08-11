import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, BlogList, Home, Reservas, Tours, Blog } from "./pages";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;
