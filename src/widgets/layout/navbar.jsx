import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
    Typography,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";

export function Navbar({
                           brandName = "CREATIVE ASSOCIATES SOLUTIONS PRIVATE LIMITED",
                           routes,
                       }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) setOpenNav(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {routes.map(({name, path, icon, href, target}) => (
                <Typography
                    key={name}
                    as="li"
                    variant="small"
                    color="inherit"
                    className="capitalize"
                >
                    {href ? (
                        <a
                            href={href}
                            target={target}
                            className="flex items-center gap-1 p-1 font-bold"
                        >
                            {icon && React.createElement(icon, {className: "w-[18px] h-[18px] opacity-75 mr-1"})}
                            {name}
                        </a>
                    ) : (
                        <Link
                            to={path}
                            target={target}
                            className="flex items-center gap-1 p-1 font-extrabold text-xl"
                        >
                            {icon && React.createElement(icon, {className: "w-[18px] h-[18px] opacity-75 mr-1"})}
                            {name}
                        </Link>
                    )}
                </Typography>
            ))}
        </ul>
    );

    return (
        <nav className="p-3">
            <div className="flex justify-between items-center text-white">
                <Link to="/" className="flex items-center gap-2">
                    <img src="/img/Creative-Associates-Solution-Pvt-Ltd.png" alt="logo" className="h-36 w-auto bg-blue-50"/>
                    <Typography className="cursor-pointer font-extrabold text-xl tracking-widest">
                        {brandName}
                    </Typography>
                </Link>
                <div className="hidden lg:block">{navList}</div>
                <IconButton
                    variant="text"
                    size="sm"
                    color="white"
                    className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon strokeWidth={2} className="h-6 w-6"/>
                    ) : (
                        <Bars3Icon strokeWidth={2} className="h-6 w-6"/>
                    )}
                </IconButton>
            </div>
            {/* Mobile Nav */}
            <Collapse
                className="bg-white px-4 pt-2 pb-4 text-blue-gray-900 lg:hidden"
                open={openNav}
            >
                <div className="container mx-auto">
                    {navList}
                </div>
            </Collapse>
        </nav>
    );
}

Navbar.propTypes = {
    brandName: PropTypes.string,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string,
            icon: PropTypes.elementType,
            href: PropTypes.string,
            target: PropTypes.string,
        })
    ).isRequired, // Prop type for the logo
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
