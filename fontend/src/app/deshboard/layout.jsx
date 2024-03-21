"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DeshboardLayout({ children }) {
    const pathname = usePathname();
    

    return (
        <div className="max-w-6xl mx-auto flex min-h-96">
            <div className="w-2/12 bg-white">
                {/* <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                    className="w-32 rounded-full"
                    alt="Avatar"
                /> */}

                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <li>
                        <Link
                            href="/deshboard"
                            className={
                                pathname == "/deshboard"
                                    ? "block py-2 px-3 text-white bg-[#0D2436] rounded dark:bg-blue-600"
                                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            }
                            aria-current="page"
                        >
                            Deshboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/deshboard/services"
                            className={
                                pathname == "/deshboard/services"
                                    ? "block py-2 px-3 text-white bg-[#0D2436] rounded dark:bg-blue-600"
                                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            }
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <button>logout</button>
            </div>
            <div className="w-full m-4"> {children}</div>
        </div>
    );
}
