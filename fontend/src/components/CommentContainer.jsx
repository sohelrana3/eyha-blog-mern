import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
import user from "../../public/asset/images/user.png";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const CommentContainer = ({ item }) => {
    let userData = useAppSelector((state) => state.logUser.loginUser);

    return (
        <>
            {/* map start */}

            <div className="bg-[#F2F4F5] p-5 rounded mt-4">
                <div className="flex gap-4 ">
                    <div>
                        <Image
                            src={user}
                            alt="icon"
                            width={60}
                            height={50}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h2 className="capitalize">{item.user.username}</h2>
                        <p>15 December 2020, 11:40 AM</p>
                    </div>
                </div>

                <div className="pl-20 mt-3">
                    <p className="text-[#77808B]">{item.desc}</p>

                    <div className="mt-4 flex gap-20">
                        <button className="flex gap-4 items-center">
                            <AiFillMessage />
                            Reply
                        </button>
                        {userData._id == item.user._id && (
                            <>
                                <button className="flex gap-4 items-center">
                                    <MdEdit />
                                    Edit
                                </button>
                                <button className="flex gap-4 items-center">
                                    <MdDelete />
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* map end */}
        </>
    );
};

export default CommentContainer;
