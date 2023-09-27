import { useLoaderData } from "react-router-dom";
import HomeCard from "./HomeCard";
import { useState } from "react";

// Define the Home component
const Home = () => {
    // Load data using the useLoaderData hook
    const cardData = useLoaderData();

    // Initialize state for user input and displayed cards
    const [inputVal, setInputVal] = useState(null);
    const [displayCard, setDisplayCard] = useState(cardData);

    // Event handler to update inputVal state as the user types
    const getInputFiledText = (event) => {
        setInputVal(event.target.value);
    };

    // Event handler to filter and display cards based on user input
    const handleSearchBtn = () => {
        // Filter cardData based on the inputVal
        const filteredCard = cardData.filter(card => card.category === inputVal);
        // Update displayCard state with the filtered results
        setDisplayCard(filteredCard);
    }

    // Render the Home component's JSX
    return (
        <div className="-mt-10">
            {/* Banner section */}
            <div className=" opacity-40 hero min-h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/7nBBFX5/Rectangle-4287.png)' }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">I Grow By Helping People In Need</h1>
                        <div className="">
                            {/* Input field for user to type search query */}
                            <input type="text" placeholder="Type here" className="text-opacity-100 py-2 bg-transparent border px-3 rounded-l-md w-full max-w-xs text-white" onChange={getInputFiledText} />
                            {/* Search button to trigger filtering */}
                            <button className="py-2 px-3 bg-[#ff0000] rounded-r-md border" onClick={handleSearchBtn}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Banner section */}

            {/* Card section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-36 mb-20 mx-10">
                {/* Map through displayCard and render HomeCard components */}
                {
                    displayCard.map(data => <HomeCard key={data.id} data={data} />)
                }
            </div>
            {/* End of Card section */}
        </div>
    );
};

export default Home;
