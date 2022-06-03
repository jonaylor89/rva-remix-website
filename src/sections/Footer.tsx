
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
                <div className="px-3 py-3">
                    <AiFillTwitterCircle fontSize={32} />
                </div>
                <div className="px-3 py-3">
                    <AiFillInstagram fontSize={32} />
                </div>
                <div className="px-3 py-3">
                    <FaTiktok fontSize={28} />
                </div>
            </div>
            <div className="flex justify-center text-sm font-light mb-5">
                Copyright RVA Remix Competition LLC 2022
            </div>
        </footer>
    );
}

export default Footer;