import { Link } from "react-router-dom";

// Define the DisplayDntData component, which displays information about a donated card
const DisplayDntData = ({ dnt }) => {
    // Destructure properties from the 'dnt' prop or provide default values if 'dnt' is undefined
    const { id, title, picture, color_text_button, color_cat_bg, color_card_bg, category, color_btn_bg } = dnt || {};

    return (
        <div className="flex" style={{ background: color_card_bg }}>
            {/* Display the card's image */}
            <figure><img className="w-40" src={picture} alt="Movie" /></figure>
            <div className="card-body p-4">
                {/* Display the category label with background color */}
                <div className="lg:w-[30%] rounded text-center" style={{ background: color_cat_bg }}>
                    {/* Display the category text with specified text color */}
                    <p style={{ color: color_text_button }}>{category}</p>
                </div>
                {/* Display the card title with specified text color */}
                <h2 className="card-title" style={{ color: color_text_button }}>{title}</h2>
                {/* Display a button to view details with a specified background color */}
                <div className="py-1 px-1 lg:w-32 text-center rounded text-[#fff]" style={{ background: color_btn_bg }}>
                    {/* Link to the card's details page */}
                    <Link to={`/card/${id}`}>
                        <button>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayDntData;
