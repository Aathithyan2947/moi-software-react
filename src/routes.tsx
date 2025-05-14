import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import FunctionsListingPage from './pages/FunctionsListingPage';
import CreateFunctionPage from './pages/CreateFunctionPage';
import FuntionDetailPage from './pages/FuntionDetailPage';
import PayerPage from './pages/PayerPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <FunctionsListingPage />,
      },
      {
        path: '/create_function',
        element: <CreateFunctionPage />,
      },
      {
        path: '/function_detail',
        element: <FuntionDetailPage />,
      },
      {
        path: '/payers',
        element: <PayerPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
