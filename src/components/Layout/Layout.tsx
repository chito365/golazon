import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { Helmet } from "react-helmet";

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SchFootball</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
