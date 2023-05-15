import { createBrowserRouter, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/Index";

const Router = createBrowserRouter([
    {
        path: '*',
        element: <Navigate to='/home' replace />
    }, {
        path: '/home',
        element: <MainPage />
    },
]);

export default Router;