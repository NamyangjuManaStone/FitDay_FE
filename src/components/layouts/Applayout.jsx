import Header from '../common/Header';
import Footer from '../common/Footer';

const AppLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default AppLayout;
