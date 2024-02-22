import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { MdEdit, MdDelete } from "react-icons/md";
const CommentContainer = () => {
    return (
        <>
            <div className="py-4 relative">
                <textarea
                    rows="4"
                    cols="50"
                    className="w-full min-h-40 py-7 px-6 border-2 border-[#76AEFF]"
                    placeholder="Leave your comment here..."
                ></textarea>
                <button className="absolute bottom-9 right-10 py-3 px-9 bg-[#1565D8] rounded text-wrap">
                    Send
                </button>
            </div>

            <div>
                <h2>All Comments (3)</h2>

                {/* map start */}

                <div className="bg-[#F2F4F5] p-5 rounded mt-4">
                    <div className="flex gap-4 ">
                        <div>
                            <Image
                                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="icon"
                                width={60}
                                height={50}
                                className="rounded-full"
                            />
                        </div>
                        <div>
                            <h2>Mohammad Rezaii</h2>
                            <p>15 December 2020, 11:40 AM</p>
                        </div>
                    </div>

                    <div className="pl-20 mt-3">
                        <p className="text-[#77808B]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Egestas purus viverra accumsan
                            in nisl nisi.
                        </p>

                        <div className="mt-4 flex gap-20">
                            <button className="flex gap-4 items-center">
                                <AiFillMessage />
                                Reply
                            </button>
                            <button className="flex gap-4 items-center">
                                <MdEdit />
                                Edit
                            </button>
                            <button className="flex gap-4 items-center">
                                <MdDelete />
                                Delete
                            </button>
                        </div>
                    </div>
                </div>

                {/* map end */}
            </div>
        </>
    );
};

export default CommentContainer;
