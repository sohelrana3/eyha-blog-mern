"use client";
import Breadcam from "@/components/Breadcam";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import CommentContainer from "@/components/CommentContainer";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const page = ({ params }) => {
    let userData = useAppSelector((state) => state.logUser.loginUser);
    let [data, setdata] = useState({});
    let [msg, setmsg] = useState([]);
    let [value, setvalue] = useState("");

    // handleSend button
    let handleSend = async () => {
        let data = await axios.post(
            "http://localhost:8000/api/v1/comment/create",
            {
                user: userData._id,
                desc: value,
                post: params.id,
            }
        );
        console.log(data.data);
    };

    useEffect(() => {
        // all post data
        async function getdata() {
            let data = await axios.post(
                "http://localhost:8000/api/v1/auth/idpost",
                {
                    id: params.id,
                }
            );
            setdata(data.data);
        }
        // all comment data

        async function allcomment() {
            let comment = await axios.get(
                "http://localhost:8000/api/v1/comment/allcomment"
            );
            console.log(comment.data);
            setmsg(comment.data);
        }

        allcomment();
        getdata();
    }, []);

    return (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
                <Breadcam />
                <Image src={data.photo} alt="ss " width={500} height={100} />
                <div className="mt-4 flex gap-2">{data.categories}</div>
                <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                    {data?.title}
                </h1>
                <div className="w-full">
                    <p>{data?.description}</p>
                    {/* {!isLoading && !isError && (
                        <Editor content={data?.body} editable={false} />
                    )} */}
                </div>
                {/* <CommentsContainer
                    comments={data?.comments}
                    className="mt-10"
                    logginedUserId={userState?.userInfo?._id}
                    postSlug={slug}
                /> */}

                <div className="mt-4">
                    <h2 className="font-semibold text-2xl">All Comments 0</h2>
                    <div className="py-4 relative">
                        <textarea
                            rows="4"
                            cols="50"
                            className="w-full min-h-40 py-7 px-6 border-2 border-[#76AEFF]"
                            placeholder="Leave your comment here..."
                            onChange={(e) => setvalue(e.target.value)}
                        ></textarea>
                        <button
                            onClick={handleSend}
                            className="absolute bottom-9 right-10 py-3 px-9 bg-[#1565D8] rounded text-wrap"
                        >
                            Send
                        </button>
                    </div>
                </div>

                {msg.map(
                    (item) =>
                        item.post == data._id && (
                            <CommentContainer key={item._id} item={item} />
                        )
                )}
            </article>
            <div>
                {/* <SuggestedPosts
                    header="Latest Article"
                    posts={postsData?.data}
                    tags={data?.tags}
                    className="mt-8 lg:mt-0 lg:max-w-xs"
                /> */}
                <h2>Latest Article</h2>
                <div className="mt-7">
                    <h2 className="font-roboto font-medium text-dark-hard mb-4 md:text-xl">
                        Share on:
                    </h2>
                    SocialShareButtons
                    {/* <SocialShareButtons
                        url={encodeURI(window.location.href)}
                        title={encodeURIComponent(data?.title)}
                    /> */}
                </div>
            </div>
        </section>
    );
};

export default page;
