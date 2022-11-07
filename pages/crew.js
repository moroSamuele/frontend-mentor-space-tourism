import Layout from "../components/Layout"
import { useState } from "react";
import Image from "next/image";
import Data from '../data/data.json';


const Destination = () => {
    const [crew, setCrew] = useState(0);
    const crewData = Data.crew;

    return (
        <Layout bgType="destinations">
            <div className="w-full h-[calc(100%-136px)] flex justify-center items-end">
                <div className="w-full h-full px-[165px]">
                    <div className="float-left w-full h-full grid grid-cols-1">
                        <div className="flex flex-col text-white justify-between float-left h-full pt-[76px] relative">
                            <div className="flex flex-col justify-start">
                                <div class="flex text-white space-x-[20px] uppercase text-[28px] leading-[44px] tracking-[4.72px] pb-[100px]">
                                    <h5 className="opacity-[0.25] font-[700]">02</h5>
                                    <h5>Meet your crew</h5>
                                </div>
                                <div className="flex flex-col">
                                    {
                                        crewData.map((data, index) => {
                                            return (
                                                index === crew &&
                                                    <>
                                                        <h4 className="text-[32px] leading-[37px] uppercase text-white/[0.5]">{data.role}</h4>
                                                        <h3 className="text-[56px] leading-[64px] uppercase mt-[15px] mb-[27px]">{data.name}</h3>
                                                        <p className="max-w-[444px] text-[18px] leading-[32px] text-milkyMoon">{data.bio}</p>
                                                    </>
                                                
                                            )
                                        })  
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col justify-between pb-[94px]">
                                <div className="flex space-x-[24px]">
                                    {
                                        crewData.map((data, index) => {
                                            return (
                                                <div className={`${ index === crew ? "bg-white" : "bg-white/[0.17] hover:bg-white/[0.5]" } cursor-pointer w-[15px] h-[15px] rounded-full`} onClick={() => setCrew(index)}></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="flex flex-col justify-end h-full absolute right-0 bottom-0 z-0">
                                {
                                    crewData.map((data, index) => {
                                        return (
                                            index === crew &&
                                                <img
                                                    src={data.images.webp}
                                                />
                                        )
                                    })  
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Destination;