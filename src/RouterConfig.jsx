import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Diary = lazy(() => import('./pages/DiaryPage'));
const Report = lazy(() => import('./pages/ReportPage'));
const Weight = lazy(() => import('./pages/WeightPage'));
const Recipe = lazy(() => import('./pages/RecipePage'));
const Enter = lazy(() => import('./pages/EnterPage'));
const Login = lazy(() => import('./components/modal/LoginModal'));
const SignUp = lazy(() => import('./components/modal/SignUpModal'));

const RouterConfig = () => {
  const routes = useRoutes([
    { path: '/', element: <Diary /> },
    { path: '/report', element: <Report /> },
    { path: '/weight', element: <Weight /> },
    { path: '/recipe', element: <Recipe /> },
    { path: '/enter', element: <Enter /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
  ]);

  return routes;
};

export default RouterConfig;
