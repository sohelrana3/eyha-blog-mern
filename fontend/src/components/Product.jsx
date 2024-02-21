import Image from "next/image";
import Link from "next/link";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";

import user from "../../public/asset/images/user.png";
async function getdata() {
    const res = await fetch("http://localhost:8000/api/v1/auth/getpost");
    return res.json();
}
const Product = async ({params }) => {
    const data = await getdata();
    console.log(data);

    return (
        <section className="max-w-6xl mx-auto lg:-mt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 ">
                {/* map start */}
                {data.reverse().map((item) => (
                    <div className="shadow-2xl rounded-md">
                        <Image
                            src={item.photo}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                            className="rounded-t-md w-ful h-72 pb-6"
                        />
                        <div className="px-8">
                            <Link href={`/blog/${item._id}`}>
                                <h2 className="text-[#183B56] font-bold text-lg capitalize mb-4">
                                    {item.title}
                                </h2>
                            </Link>
                            <p className="text-[#183B56] font-normal text-sm mb-7">
                                {item.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <Image
                                        src={user}
                                        width={50}
                                        height={50}
                                        alt="Pic"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg text-[#183B56]">
                                            sohel
                                        </h3>
                                        <p className="flex items-center gap-1 text-[#5A7184] text-sm">
                                            <MdOutlineVerified className="text-[#36B37E]" />
                                            Verified writer
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#5A7184] text-sm">02 may</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* map end */}
            </div>
            <div className="flex justify-center mt-10">
                <Link
                    href=""
                    className="flex justify-center items-center gap-4 py-2 px-5 border border-regalblue hover:bg-primary hover:text-white hover:border-primary"
                >
                    More articles <AiOutlineArrowRight />
                </Link>
            </div>
        </section>
    );
};

export default Product;
