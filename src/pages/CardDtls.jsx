import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { saveDonatedData } from "../utility/localStorage";
import { useEffect } from "react";

// Define the CardDtls component, which displays details of a card
const CardDtls = () => {
    // Load data using the useLoaderData hook
    const datas = useLoaderData();

    // Get the 'id' parameter from the route
    const { id } = useParams();

    // Parse 'id' to an integer
    const idEnt = parseInt(id);

    // Find the card data with the matching 'id'
    const data = datas.find(data => data.id === idEnt);

    // Destructure properties from the card data
    const { title, picture, description, color_text_button, price } = data;

    // Event handler for the donate button click
    const donateHandleClick = () => {
        // Save the donated card 'id' to local storage
        saveDonatedData(idEnt);
        // Show a success toast message
        toast("You have successfully donated!");
    };

    // Use the useEffect hook to set the document title when the component mounts
    useEffect(() => {
        document.title = `${title}`;
    }, []);

    return (
        <div className="mx-5 md:mx-20">
            <div className="md:h-[600px] relative">
                {/* Display the card image */}
                <img style={{ backgroundSize: 'cover', objectFit: 'cover' }} className="w-full md:h-[600px] rounded-lg" src={picture} />
                <div style={{ background: 'rgba(11, 11, 11, 0.50)' }} className="absolute bottom-0 text-white w-full p-4 rounded-b-lg">
                    {/* Display the donate button */}
                    <button style={{ background: color_text_button }} className="py-2 px-4 text-white font-semibold rounded-sm" onClick={donateHandleClick}>Donate ${price}</button>
                    {/* Toast container for displaying messages */}
                    <ToastContainer />
                </div>
            </div>
            {/* Display card title */}
            <h2 className="font-bold mt-5 text-black text-[30px] py-4">{title}</h2>
            {/* Display card description */}
            <p className="text-[#0B0B0B] text-[16px] mb-10">{description}</p>
        </div>
    );
};

export default CardDtls;
