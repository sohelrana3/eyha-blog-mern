import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
// import pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    let loginData = useSelector((state) => state.logUser.loginUser);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path={loginData ? "/" : "/Home"} element={<Home />} />
                <Route
                    path={loginData ? "/Registration" : "/"}
                    element={<Registration />}
                />
                <Route path="/login" element={<Login />} />
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
