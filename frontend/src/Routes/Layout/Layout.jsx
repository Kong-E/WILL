import { Outlet } from "react-router-dom";
import { Nav } from "../../components/Nav";
import { Root } from "./styled";
import { Footer } from "../../components/Footer/Footer";

export const Layout = () => {
  return (
    <Root>
      <Nav />
      <Outlet />
      <Footer />
    </Root>
  );
};
