import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import store from './app/store';
import LoadingSpinner from './components/common/LoadingSpinner';
import RouterConfig from './RouterConfig';
import ScrollToTop from './ScrollToTop';
import GlobalStyle from './styles/GlobalStyled';
import theme from './styles/theme';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner primary />}>
            <RouterConfig />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
