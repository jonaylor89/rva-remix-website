
import {
    AiFillTwitterCircle,
    AiFillInstagram,
} from "react-icons/ai";

import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            {/* TODO  add on-hover interactions */}
            <div className="flex flex-row justify-center items-center">
                <div className="px-3 py-3 hover:scale-110">
                    <a href="https://twitter.com/tappednetwork">
                        <AiFillTwitterCircle fontSize={32} color="#1DA1F2 " />
                    </a>
                </div>
                <div className="px-3 py-3 hover:scale-110">
                    <a href="https://instagram.com/tappednetwork">
                        <AiFillInstagram fontSize={32} color="#DD2A7B" />
                    </a>
                </div>
                <div className="px-3 py-3 hover:scale-110">
                    <a href="https://tiktok.com/@tappednetwork">
                        <FaTiktok fontSize={28} />
                    </a>
                </div>
            </div>
            <div className="flex justify-center">
                Contact the team at:
                <a className="font-bold px-3 text-blue-500 hover:scale-110 ease-in" href="mailto:rvaremix@gmail.com">
                    rvaremix@gmail.com
                </a>
            </div>
            <div className="flex justify-center text-sm font-light my-5">
                Copyright RVA Remix Competition LLC {new Date().getFullYear()}
            </div>
        </footer>
    );
}

export default Footer;
