import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        content
        <Outlet></Outlet>
      </main>
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
