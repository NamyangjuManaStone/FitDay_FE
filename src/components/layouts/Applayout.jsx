import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from '../common/Header';
import Footer from '../common/Footer';
import { tokenCookie } from '../../utils/cookie';

const AppLayout = ({ children }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!tokenCookie.getCookie() && !user) navigate('/');
  }, [navigate, user]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
