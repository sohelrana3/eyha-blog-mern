import Link from "next/link";
import logo from "../../public/asset/images/logo-white.png";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0D2436] pt-32 pb-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 ">
                <div className="md:row-span-2 lg:row-span-1 order-last md:order-first">
                    <Image src={logo} alt="logo" />
                    <p className="text-[#5A7184] text-sm py-7">
                        Build a modern and creative website with moonfo
                    </p>
                    <div className="flex gap-4">
                        <div className="py-3 px-3 bg-[#FC5A5A] rounded-full"></div>
                        <div className="py-3 px-3 bg-[#FC5A5A] rounded-full"></div>
                        <div className="py-3 px-3 bg-[#FC5A5A] rounded-full"></div>
                        <div className="py-3 px-3 bg-[#FC5A5A] rounded-full"></div>
                        <div className="py-3 px-3 bg-[#FC5A5A] rounded-full"></div>
                    </div>
                </div>
                <div>
                    <h2 className="text-[#5A7184] text-lg font-bold pb-6">
                        Product
                    </h2>
                    <ul className="flex flex-col gap-4">
                        <li className="text-[#959EAD]">
                            <Link href="#">Landingpage</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Features</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Documentation</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Referral Program</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[#5A7184] text-lg font-bold pb-6">
                        Services
                    </h2>
                    <ul className="flex flex-col gap-4">
                        <li className="text-[#959EAD]">
                            <Link href="#">Documentation</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Design</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Themes</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Illustrations</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">UI Kit</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[#5A7184] text-lg font-bold pb-6">
                        Company
                    </h2>
                    <ul className="flex flex-col gap-4">
                        <li className="text-[#959EAD]">
                            <Link href="#">About</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Terms</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Privacy Policy</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-[#5A7184] text-lg font-bold pb-6">
                        More
                    </h2>
                    <ul className="flex flex-col gap-4">
                        <li className="text-[#959EAD]">
                            <Link href="#">Documentation</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">License</Link>
                        </li>
                        <li className="text-[#959EAD]">
                            <Link href="#">Changelog</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="hidden max-w-6xl mx-auto md:flex flex-col pt-20 items-center text-white">
                <div className="bg-[#1576D8] py-4 px-4 rounded-full text-white mb-6">
                    <FaHeart />
                </div>
                <p>Copyright © 2024. Moonfo with love.</p>
            </div>
        </footer>
    );
};

export default Footer;
