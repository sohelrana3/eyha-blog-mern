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
import Deshboard from "./pages/Deshboard";
import Comments from "./pages/Comments";
import AllPost from "./pages/AllPost";
import CreatePost from "./pages/CreatePost";

function App() {
    let loginData = useSelector((state) => state.logUser.loginUser);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/Registration" element={<Registration />} />
                <Route path="/" element={<Home />}>
                    <Route index element={<Deshboard />} />
                    <Route path="/comments" element={<Comments />} />
                    <Route path="/allPost" element={<AllPost />} />
                    <Route path="/createPost" element={<CreatePost />} />
                </Route>

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
