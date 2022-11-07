import Layout from "../components/Layout"
import { useState } from "react";
import Menu from '../data/menu.json';

import Image from "next/image";
import Data from '../data/data.json';


const Destination = () => {
    const menu = Menu.menu;
    const [dest, setDest] = useState(0);
    const destinations = Data.destination;

    return (
        <Layout bgType="destinations">
            <div className="w-full h-[calc(100%-136px)] flex justify-center items-end">
                <div className="w-full pb-[50px] px-[165px]">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col text-white max-w-[444px]">
                            <div class="flex text-white space-x-[20px] uppercase text-[28px] leading-[44px] tracking-[4.72px] mb-[70px]">
                                <h5 className="opacity-[0.25] font-[700]">01</h5>
                                <h5>{menu[1].title}</h5>
                            </div>
                            {
                                destinations.map((destination, index) => {
                                    return (
                                        index === dest &&
                                            <Image
                                                src={destination.images.webp}
                                                width="445"
                                                height="445"
                                            />
                                    )
                                })  
                            }
                        </div>
                        <div className="flex flex-col">
                            <div className="flex space-x-[35px]">
                                {
                                    destinations.map((destination, index) => {
                                        return (
                                            <span className={`${ index === dest ? "border-b-white" : "border-b-transparent" } navText uppercase text-white pb-[12px] border-b-[3px] tracking-[2.7px] hover:border-b-white/[0.5] cursor-pointer`} onClick={() => setDest(index)}>
                                                {destination.name}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                            {
                                destinations.map((destination, index) => {
                                    return (
                                        index === dest &&
                                            <div className="flex flex-col">
                                                <h2 className="text-[100px] leading-[115px] text-white uppercase mt-[37px]">
                                                    {destination.name}
                                                </h2>
                                                <p className="text-[18px] text-milkyMoon leading-[32px] pt-[14px] pb-[54px]">
                                                    {destination.description}
                                                </p>
                                                <div className="grid grid-cols-2 border-t-[1px] border-t-[#383B4B] pt-[28px]">
                                                    <div className="flex flex-col">
                                                        <p className="subHeading2 uppercase text-milkyMoon text-[14px] tracking-[2.3625px] pb-[12px]">
                                                            Avg. distance
                                                        </p>
                                                        <p className="subHeading1 uppercase text-white text-[28px] leading-[32px]">
                                                            {destination.distance}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <p className="subHeading2 uppercase text-milkyMoon text-[14px] tracking-[2.3625px] pb-[12px]">
                                                            Est. travel time
                                                        </p>
                                                        <p className="subHeading1 uppercase text-white text-[28px] leading-[32px]">
                                                            {destination.travel}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })  
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Destination;