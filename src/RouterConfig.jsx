import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useRoutes } from 'react-router-dom';

import { checkMeAction } from './features/user/user.actions';
import { tokenCookie } from './utils/cookie';

const Diary = lazy(() => import('./pages/DiaryPage'));
const Report = lazy(() => import('./pages/ReportPage'));
const Weight = lazy(() => import('./pages/WeightPage'));
const Recipe = lazy(() => import('./pages/RecipePage'));
const Enter = lazy(() => import('./pages/EnterPage'));

const RouterConfig = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (tokenCookie.getCookie()) {
      dispatch(checkMeAction());
    }
  }, [dispatch]);

  const routes = useRoutes([
    { path: '/', element: <Navigate to="/login" /> },
    { path: '/login', element: <Enter /> },
    { path: '/diary', element: <Diary /> },
    { path: '/report', element: <Report /> },
    { path: '/weight', element: <Weight /> },
    { path: '/recipe', element: <Recipe /> },
  ]);

  return routes;
};

export default RouterConfig;
