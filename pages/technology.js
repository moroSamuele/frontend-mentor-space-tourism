import Layout from "../components/Layout"
import { useState } from "react";
import Image from "next/image";
import Data from '../data/data.json';


const Destination = () => {
    const [tech, setTech] = useState(0);
    const technology = Data.technology;

    return (
        <Layout bgType="destinations">
            <div className="w-full h-[calc(100%-136px)] flex justify-center items-end">
                <div className="w-full h-full pl-[165px]">
                    <div className="float-left w-full h-full grid grid-cols-1">
                        <div className="flex flex-col text-white float-left h-full pt-[76px] relative">
                            <div className="flex flex-col justify-start">
                                <div class="flex text-white space-x-[20px] uppercase text-[28px] leading-[44px] tracking-[4.72px]">
                                    <h5 className="opacity-[0.25] font-[700]">03</h5>
                                    <h5>Space launch 101</h5>
                                </div>
                            </div>
                            <div className="flex items-start justify-between">
                                <div className="flex pt-[137px]">
                                    <div className="flex flex-col space-y-[32px] mr-[80px]">
                                        {
                                            technology.map((data, index) => {
                                                return (
                                                    <h4 className={`${ index === tech ? "bg-white text-spaceBlue" : "border-[1px] border-white/[0.25] hover:border-white text-white" } pl-[5px] pt-[3px] text-[32px] leading-[37px] tracking-[2px] cursor-pointer w-[80px] h-[80px] rounded-full flex justify-center items-center`} onClick={() => setTech(index)}>{index + 1}</h4>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="flex flex-col">
                                        {
                                            technology.map((data, index) => {
                                                return (
                                                    index === tech &&
                                                        <>
                                                            <h4 className="navText text-[16px] leading-[19px] tracking-[2.7px] uppercase text-milkyMoon">The terminology...</h4>
                                                            <h3 className="text-[56px] leading-[64px] uppercase mt-[15px] mb-[27px]">{data.name}</h3>
                                                            <p className="max-w-[444px] text-[18px] leading-[32px] text-milkyMoon">{data.description}</p>
                                                        </>
                                                    
                                                )
                                            })  
                                        }
                                    </div>
                                </div>
                                <div className="flex w-[515px] h-auto pt-[26px]">
                                    {
                                        technology.map((data, index) => {
                                            return (
                                                index === tech &&
                                                    <img
                                                        src={data.images.portrait}
                                                    />
                                            )
                                        })  
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Destination;