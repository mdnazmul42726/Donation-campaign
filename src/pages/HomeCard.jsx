import { useEffect } from "react";
import { Link } from "react-router-dom";

// Define the HomeCard component, which displays a card with data
const HomeCard = ({ data }) => {
    // Destructure data object or provide default values if data is undefined
    const { id, title, picture, color_text_button, color_cat_bg, color_card_bg, category } = data || {};

    // Use the useEffect hook to set the document title to 'Home' when the component mounts
    useEffect(() => {
        document.title = 'Home';
    }, []);

    // Render the card with a link to the individual card detail page
    return (
        <div>
            {/* Link to the individual card detail page based on the card's id */}
            <Link to={`/card/${id}`}>
                {/* Card container with background color */}
                <div className="rounded-md bg-base-100 h-72" style={{ background: color_card_bg }}>
                    {/* Card image */}
                    <figure><img className="w-full" src={picture} alt={title} /></figure>
                    <div className="px-3 mt-3">
                        {/* Category label with background color */}
                        <div className="w-[30%] rounded text-center" style={{ background: color_cat_bg }}>
                            {/* Category text with specified text color */}
                            <p className="" style={{ color: color_text_button }}>{category}</p>
                        </div>
                        {/* Card title with specified text color */}
                        <h2 className="card-title" style={{ color: color_text_button }}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCard;
