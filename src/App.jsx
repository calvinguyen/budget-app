import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard, { dashBoardAction, dashBoardLoader } from './views/Dashboard';
import Error from './views/Error';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashBoardLoader,
        action: dashBoardAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
