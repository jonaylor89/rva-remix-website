
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
                    <a href="https://twitter.com/rvaremix">
                        <AiFillTwitterCircle fontSize={32} />
                    </a>
                </div>
                <div className="px-3 py-3">
                    <a href="https://instagram.com/rvaremix">
                        <AiFillInstagram fontSize={32} />
                    </a>
                </div>
                <div className="px-3 py-3">
                    <a href="https://tiktok.com/@rvaremix">
                        <FaTiktok fontSize={28} />
                    </a>
                </div>
            </div>
            <div className="flex justify-center">
                Contact the team at 
                <a className="font-bold px-2 text-blue-500" href="mailto:rvaremix@gmail.com">
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