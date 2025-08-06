import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
