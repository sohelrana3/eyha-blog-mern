const page = () => {

    return (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
            <article className="flex-1">
                {/* <BreadCrumbs data={breadCrumbsData} /> */}
                /page/
                <img src="" alt="img" />
                <div className="mt-4 flex gap-2">

                  home about
                    {/* {data?.categories.map((category) => (
                        <Link
                            to={`/blog?category=${category.name}`}
                            className="text-primary text-sm font-roboto inline-block md:text-base"
                        >
                            {category.name}
                        </Link>
                    ))} */}
                </div>
                <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
                    {/* {data?.title} */}
                    hello title
                </h1>
                <div className="w-full">
                  errop
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
                SuggestedPosts
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
