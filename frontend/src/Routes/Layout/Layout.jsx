import { Outlet } from 'react-router-dom';
import { Nav } from '../../components/Nav/Nav';
import { Main, Root } from './styled';
import { Footer } from '../../components/Footer/Footer';

export const Layout = () => {
  return (
    <Root>
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Root>
  );
};
