import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export function ServicesCard({ img, name, services = [] }) {
    const navigate = useNavigate();

    return (
        <Card color="brown" shadow={true} className="pt-3">
            <Avatar
                src={img}
                alt={name}
                size="xxl"
                variant="rounded"
                className="h-60 w-8/12 border-b-4 border-r-4 border-l-4 rounded-b-xl border-b-blue-gray-200 mx-auto shadow-lg shadow-gray-500/25"
            />
            <Typography variant="h5" color="white" className="mt-6 mb-1 text-center">
                {name}
            </Typography>

            <div className="container p-2">
                <ul className="pl-8">
                    {services.map((service, index) => (
                        <li key={index} className="list-disc">
                            <Link to={service.path || "#"}>{service.name}</Link>
                            <ul className="pl-4">
                                {Array.isArray(service.underContent) &&
                                    service.underContent.map((content, subIndex) => (
                                        <li key={`${index}-${subIndex}`} className="list-disc">
                                            {content}
                                        </li>
                                    ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

ServicesCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string, // Make path optional
            underContent: PropTypes.arrayOf(PropTypes.string),
        })
    ).isRequired,
};

ServicesCard.displayName = "/src/widgets/layout/services-card.jsx";

export default ServicesCard;
