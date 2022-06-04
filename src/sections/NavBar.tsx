
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBarItem = (props: { label: string, tag: string }) => {
    return (
        <div className="p-2 text-md font-bold lg:text-xl lg:px-5 hover:font-extrabold hover:scale-110">
            <button onClick={() => document.getElementById(props.tag).scrollIntoView()}>
                {props.label}
            </button>
        </div>
    )
}

const NavBar = () => {
    const [open, isOpen] = useState(true);

    return (
        <nav className="lg:flex lg:justify-end lg:shadow-lg">
            <div className="flex justify-end items-center px-4 py-4">
                <div className="lg:hidden pt-2">
                    {open ? (
                        <AiOutlineMenu fontSize={28} onClick={() => isOpen(!open)} />
                    ) : (
                        <AiOutlineClose fontSize={28} onClick={() => isOpen(!open)} />
                    )}
                </div>
            </div>
            <div className={open ? "hidden px-4 lg:flex lg:flex-row lg:pt-5" : "block px-4 lg:flex lg:flex-row"}>
                <NavBarItem label="HOME" tag="home" />
                <NavBarItem label="PRIZES" tag="prizes" />
                <NavBarItem label="SCHEDULE" tag='schedule' />
                <NavBarItem label="MORE" tag='hosts' />
            </div>
        </nav>
    );
}

export default NavBar;