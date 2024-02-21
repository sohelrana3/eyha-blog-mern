"use client";
import Breadcam from "@/components/Breadcam";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const page = ({ params }) => {
    let [data, setdata] = useState([]);
    console.log(params.id);

    useEffect(() => {
        async function getdata() {
            let data = await axios.post(
                "http://localhost:8000/api/v1/auth/idpost",
                {
                    id: params.id,
                }
            );
            setdata(data.data);
            console.log(data.data);
        }
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
                comments
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
