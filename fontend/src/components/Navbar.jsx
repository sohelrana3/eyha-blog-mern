"use client";
import Image from "next/image";
import logo from "../../public/asset/images/logo.svg";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const navItem = [
    {
        id: 1,
        link: "Home",
        path: "/",
    },
    {
        id: 2,
        link: "Articles",
        path: "/articles",
    },
    {
        id: 3,
        link: "page",
        path: "",
        dropdown: [
            {
                id: 1,
                link: "page 1",
                path: "/page 1",
            },
            {
                id: 2,
                link: "page 2",
                path: "/page 2",
            },
        ],
    },
    {
        id: 4,
        link: "Pricing",
        path: "/Pricing",
    },
    {
        id: 4,
        link: "Faq",
        path: "/Faq",
    },
];

const Navbar = () => {
    let userData = useAppSelector((state) => state.logUser.loginUser);
    let [menu, setmenu] = useState(false);
    const handleChange = () => {
        setmenu(!menu);
    };
    const handleClose = () => {
        setmenu(false);
    };
    return (
        <header className="bg-[#F9FCFF]">
            <nav className="max-w-6xl mx-auto flex justify-between items-center bg-[#F9FCFF] px-2 py-8 ">
                <div>
                    <Link href="/">
                        <Image src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="flex gap-9 items-center">
                    <ul className="hidden lg:flex gap-9">
                        {navItem.map((item) => (
                            <li key={item.id} className="text-[#183B56]">
                                <Link href={item.path}>{item.link}</Link>
                            </li>
                        ))}
                    </ul>
                    {userData ? (
                        <Link href="/deshboard">
                            <button className=" hidden lg:flex border-2 border-[#1565D8] px-9 py-3 rounded-full text-[#1565D8]">
                                Deshboard
                            </button>
                        </Link>
                    ) : (
                        <Link href="/login">
                            <button className=" hidden lg:flex border-2 border-[#1565D8] px-9 py-3 rounded-full text-[#1565D8]">
                                Sing In
                            </button>
                        </Link>
                    )}

                    {/* mobile menu */}
                    <div className="lg:hidden">
                        {menu ? (
                            <AiOutlineClose onClick={handleChange} />
                        ) : (
                            <AiOutlineMenu onClick={handleChange} />
                        )}
                    </div>
                </div>
            </nav>

            {menu && (
                <div className="lg:hidden flex flex-col absolute text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 bg-[#F9FCFF]">
                    <ul>
                        {navItem.map((item) => (
                            <li className="py-2 text-[#183B56]">
                                <Link onClick={handleClose} href={item.path}>
                                    {item.link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="/login">
                        <button className=" lg:hidden border-2 border-[#1565D8] mx-2 py-4 rounded-full text-[#1565D8]">
                            Sing In
                        </button>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
