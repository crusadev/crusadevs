import { Link } from "react-router-dom"
import Logo from "../../assets/textLogo.svg"

const Navbar = () => {

    const links = [
        {
            display:"Home",
            path:"/"
        },
        {
            display:"Portofolio",
            path:"/portofolio"
        },
        {
            display:"Price Calculator",
            path:"/price-calculator"
        },
        {
            display:"Contact",
            path:"/contact"
        }
    ]

    return(
        <div className="w-full flex content-center items-center fixed z-10">
            <img src={Logo} className="w-[7%] p-6"/>
            {links.map((link,i) => (
                <Link
                className="text-white hover:underline p-6"
                to={link.path}
                key={i}>{link.display}</Link>
            ))}
        </div>
    )
}

export default Navbar