import Header from "./Header";
import Footer from "./Footer";
import {ReactElement, ReactNode} from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children } : LayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
