import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

// Define the Statistics component
const Statistics = () => {
    // Initialize state for the 'donation' count
    const [donation, setDonation] = useState(0);

    // Use the useEffect hook to load and update the 'donation' state from local storage
    useEffect(() => {
        // Retrieve 'donated' data from local storage and parse it as JSON
        const storedItem = JSON.parse(localStorage.getItem('donated'));

        // If 'storedItem' is not null (i.e., there's data in local storage), update 'donation' state with the length of 'storedItem'
        if (storedItem !== null) {
            setDonation(storedItem.length);
        }

        // Log a message to indicate that the effect has run
        console.log("donated");
    }, []);

    // Define data for the pie chart, representing 'My Donation' and 'Total Donation'
    const data = [
        { label: 'My Donation', value: donation, color: '#00C49F' },
        { label: 'Total Donation', value: 12 - donation, color: 'red' },
    ];

    // Define styling options for the pie chart
    const sizing = {
        margin: { right: 10 },
        width: 500,
        height: 500,
    };

    // Render the Statistics component with a centered pie chart
    return (
        <div className="flex justify-center">
            {/* Render the PieChart component with specified data and styling */}
            <PieChart
                series={[
                    {
                        outerRadius: 150,
                        data,
                        // Define arc label to display the percentage
                        arcLabel: (params) => `${((params.value / 12) * 100).toFixed(1)}%`,
                    },
                ]}
                // Define legend settings
                legend={{
                    direction: "row",
                    position: {
                        vertical: "middle",
                        horizontal: "middle",
                    },
                }}
                sx={{
                    "--ChartsLegend-rootOffsetX": "0px",
                    "--ChartsLegend-rootOffsetY": "200px",
                    "--ChartsLegend-itemWidth": "130px",
                }}
                {...sizing}
            />
        </div>
    );
};

export default Statistics;
