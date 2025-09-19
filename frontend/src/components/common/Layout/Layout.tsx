import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-start items-center">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
