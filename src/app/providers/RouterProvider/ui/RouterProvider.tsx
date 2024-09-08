import {
    createBrowserRouter, RouterProvider,
} from "react-router-dom";

import {HomePage} from "../../../../pages/HomePage";
import {LoginPage} from "../../../../pages/LoginPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "login",
        element: <LoginPage />,
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter;
