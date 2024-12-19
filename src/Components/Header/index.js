import { Link } from "react-router-dom";
import { Style } from "./style";

export default function Header () {
    return (
        <Style>
            <div className="header-container">
                <div className="header flex space-between align-center">
                    <div className="left flex gap-20 align-center">
                        <div className="logo">
                            <Link to="/"><img src="assets/images/lightLogo.svg" /></Link>
                        </div>
                        <div className="menu">
                            <ul className="flex space-between gap-20">
                                <li><Link to="/">Series</Link></li>
                                <li><Link to="/">Movies</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <div className="actions">
                            <ul className="flex space-between">
                                <li className="search"><Link><i class="fa-solid fa-magnifying-glass"></i></Link></li>
                                <li className="notification"><Link><i class="fa-solid fa-bell"></i></Link></li>
                                <li className="account"><Link><i class="fa-solid fa-user"></i></Link></li>
                                <li className="change-theme"><Link><i class="fa-solid fa-sun"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
} 