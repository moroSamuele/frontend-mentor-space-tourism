import Layout from "../components/Layout"


const Home = () => {
    return (
        <Layout bgType="home">
            <div className="w-full h-[calc(100%-136px)] flex justify-center items-end">
                <div className="w-full pb-[131px] px-[165px]">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col text-white max-w-[444px]">
                            <h5 className="uppercase text-[28px] leading-[44px] tracking-[4.72px] text-milkyMoon">So, you want to travel to</h5>
                            <h1 className="text-[150px] leading-[170px] uppercase">Space</h1>
                            <p className="text-[18px] text-milkyMoon leading-[32px]">
                                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                            </p>
                        </div>
                        <div className="bg-white w-[274px] h-[274px] rounded-full justify-self-end self-end flex justify-center items-center cursor-pointer transition-all duration-[0.4s] hover:shadow-3xl">
                            <h4 className="text-[32px] leading-[37px] tracking-[2px] uppercase">Explore</h4>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;
