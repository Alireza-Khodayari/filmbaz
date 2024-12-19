import { Link } from "react-router-dom"
import { Style } from "./style"

export default function Social ({items}) {
    function renderFarm () {
        return items.map(({icon, link}, index)=>{
            return (
                <li key={index}>
                    <Link to={link}>
                        <i className={`fa-brands ${icon}`}></i>
                    </Link>
                </li>
            )
        })
    }

    return (
        <Style>
            <ul className="flex justify-center">{renderFarm()}</ul>
        </Style>
    )
}