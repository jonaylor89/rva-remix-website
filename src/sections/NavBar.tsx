
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBarItem = (props: {label: string, tag: string}) => {
    return (
        <div className="p-2 text-md font-bold">
            <a href={props.tag}>
                {props.label}
            </a>
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
            <div className={open ? "hidden px-4 lg:block" : "block px-4 lg:block"}>
                <NavBarItem label="HOME" tag="#home" />
                <NavBarItem label="PRIZES" tag="#prizes" />
                <NavBarItem label="SCHEDULE" tag='#schedule' />
                <NavBarItem label="MORE" tag='#more' />
            </div>
        </nav>
    );
}

export default NavBar;