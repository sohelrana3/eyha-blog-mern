import banner from "../../public/asset/images/banner.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
const Banner = () => {
    return (
        <section className="bg-backbg">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 px-2 gap-2">
                <div>
                    <h1 className="text-primary font-bold text-5xl mb-6">
                        Read the most interesting articles
                    </h1>
                    <p className="text-primary font-normal text-xl mb-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                    <div className=" relative mb-5">
                        <input
                            className="w-full py-4 px-12 placeholder:text-gray-500 placeholder:font-bold rounded-md shadow-2xl "
                            type="text"
                            placeholder="Search article"
                        />
                        <AiOutlineSearch className="absolute top-5 left-6 text-gray-500 font-bold" />
                        <Link
                            className="block text-center rounded-md my-2 md:my-0 py-2 md:absolute top-2 right-2 bg-regalblue text-white md:py-2 md:px-5 lg:rounded-md"
                            href=""
                        >
                            Search
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center gap-4">
                        <h2 className="text-[#5A7184] font-bold">
                            Popular Tags :
                        </h2>

                        <ul className="flex justify-between gap-4">
                            <li className="bg-blue-100 py-2 px-2 rounded-md text-regalblue">
                                <Link href="">Design</Link>
                            </li>
                            <li className="bg-blue-100 py-2 px-2 rounded-md text-regalblue">
                                <Link href="">User Experience</Link>
                            </li>
                            <li className="bg-blue-100 py-2 px-2 rounded-md text-regalblue">
                                <Link href="">User Interfaces</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="hidden md:block">
                    <Image src={banner} alt="banner" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
