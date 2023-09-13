import { useRoutes } from "react-router-dom/dist";
import AuthLayout from "./layouts/Auth/AuthLayout";
import Home from "./layouts/Home";
import Landing from "./layouts/Landing/Landing";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import AdminLogin from "./views/Admin/Auth/AdminLogin";
import ErrorPage from "./components/ErrorBoundary/components/ErrorPage";
import ViewListing from "./views/ViewListing";
import Register from "./views/Register";
import Loogin from "./views/Loogin";
// import Register from "./components/AppBar/Register";

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: 'auth',
            element: <AuthLayout />,
            children: [
                { path: 'login', element: <Login /> },
                { path: 'register', element: <SignUp /> }
            ]
        },
        {
            path: '/home',
            element: <Home />,
        },
        {
            path: '/admin-login',
            element: <AdminLogin />
        },
        {
            path: '*',
            element: <ErrorPage />
        },
        {
            path: 'view-listning',
            element: <ViewListing />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <Loogin />
        }
    ]);
    return element;
}