"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { logUser } from "@/lib/userSlice";

const page = () => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [value, setvalue] = useState({});

    let handleChange = (e) => {
        setvalue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    async function handleSubmit() {
        // event.preventDefault();
        setIsLoading(true);
        setError(null); // Clear previous errors when a new request starts

        try {
            const formData = {
                email: value.email,
                password: value.password,
            };
            const data = await axios.post(
                "http://localhost:8000/api/v1/auth/login",
                formData
            );
            if (!data.data.error) {
                console.log(data.data);
                localStorage.setItem("user", JSON.stringify(data.data));
                dispatch(logUser(data.data));
                push("/");
            }
            if (data.data.error) {
                setError(data.data.error);
            }

            // ...
        } catch (error) {
            // Capture the error message to display to the user
            setError(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <section className="bg-[#F9FCFF]">
            <div className="max-w-6xl mx-auto ">
                <div className=" dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
                    <div className="bg-white lg:w-6/12 md:7/12 w-8/12 shadow-3xl rounded-xl">
                        <div className="bg-gray-800 shadow shadow-gray-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="#FFF"
                            >
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                        </div>
                        <div className=" mb-4 p-12 md:p-24">
                            {error && (
                                <div style={{ color: "red" }}>{error}</div>
                            )}
                            <div className="flex items-center text-lg mb-6 md:mb-8">
                                <svg
                                    className="absolute ml-3"
                                    width="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                                </svg>
                                <input
                                    type="text"
                                    name="email"
                                    className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center text-lg mb-6 md:mb-8">
                                <svg
                                    className="absolute ml-3"
                                    viewBox="0 0 24 24"
                                    width="24"
                                >
                                    <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
                                </svg>
                                <input
                                    type="password"
                                    name="password"
                                    className="bg-gray-200 rounded pl-12 py-2 md:py-4 focus:outline-none w-full"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex items-center justify-between"></div>
                            <button
                                disabled={isLoading}
                                onClick={handleSubmit}
                                className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full rounded"
                            >
                                {isLoading ? "Loading..." : "Login"}
                            </button>
                            <div className="flex justify-between mt-4">
                                <div className="text-sm">
                                    <Link
                                        href="#"
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>
                                <div className="text-sm">
                                    <Link
                                        href="/registration"
                                        className="font-medium text-blue-600 hover:text-blue-500"
                                    >
                                        create an account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;
