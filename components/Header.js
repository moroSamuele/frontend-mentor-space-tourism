import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Menu from "../data/menu.json";


const HeaderLink = (props) => {
    const router = useRouter();

    return (
        <Link href={props.link} className={`${ router.asPath === props.link ? "border-b-white" : "border-b-transparent hover:border-b-white/[0.5]" } text-white mainMenuLink h-full flex items-center uppercase tracking-[2.7px] leading-[19px] text-[1rem] space-x-[11px] transition-all border-b-[3px]`}>
            <span className="font-bold">{props.index}</span>
            <span>{props.name}</span>
        </Link>
    )
}


const Header = () => {
    const menuLinks = Menu.menu;

    return (
        <div className="h-[96px] w-[calc(100%-55px)] mt-[40px] ml-[55px] flex justify-between items-center float-left relative z-10">
            <div className="w-[470px] h-[1px] bg-white/[0.25] absolute left-[110px] z-10"></div>
            <Image
                src="/assets/shared/logo.svg"
                width="48"
                height="48"
                alt="Space Tourism Logo"
            />
            <div className="pr-[165px] pl-[123px] bg-white/[0.04] backdrop-blur-md h-full flex justify-center items-center space-x-[48px]">
                {
                    menuLinks.map((menu, index) => {
                        return (
                            <HeaderLink
                                index={String(index).padStart(2, '0')}
                                name={menu.name}
                                link={menu.link}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Header;