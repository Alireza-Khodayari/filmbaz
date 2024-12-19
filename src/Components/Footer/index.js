import { Link } from "react-router-dom";
import { Style } from "./style";
import Social from "./Social";

const data = [
    {
        icon: "fa-square-facebook",
        link: "#"
    },
    {
        icon: "fa-square-instagram",
        link: "#"
    },
    {
        icon: "fa-linkedin",
        link: "#"
    },
    {
        icon: "fa-square-youtube",
        link: "#"
    },
    {
        icon: "fa-telegram",
        link: "#"
    },
]

export default function Footer () {
    return (
        <Style className="footer">
            <div className="menu">
                <ul className="flex justify-center flex-wrap gap-40">
                    <li>
                        <Link>
                            <span>Get the Filmbaz app</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Help</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Site Index</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Filmbaz Pro</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Advertising</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Filmbaz Developer</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Jobs</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Privacy Policy</span>
                            <i class="fa-solid fa-angle-right"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <Social items={data} />
        </Style>
    )
} 