"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcam = () => {
    const paths = usePathname();
    const pathNames = paths.split("/").filter((path) => path);
    return (
        <div className="mb-5 flex gap-3">
            <p className="flex items-center gap-x-2 font-normal font-dm text-[#767676]">
                <Link href="/">Home </Link>
            </p>
            {pathNames.map((item, index) => {
                let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                return (
                    <p className="flex items-center gap-x-2 font-normal font-dm text-[#767676]">
                        <Link href={href}>/ {item}</Link>
                    </p>
                );
            })}
        </div>
    );
};

export default Breadcam;
