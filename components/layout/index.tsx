import { ReactNode } from "react";
import Header from "../header";
import Footer from "../footer";
import { Wrapper } from "../../styles/utils.styled";
import { Main } from "./layout.styled";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <>
    <Header />
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
    <Footer />
  </>
);

export default Layout;
