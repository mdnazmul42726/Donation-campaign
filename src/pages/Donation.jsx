import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonatedData } from "../utility/localStorage";
import DisplayDntData from "./DisplayDntData";

const Donation = () => {
    const cards = useLoaderData()
    const [dnted, setDnted] = useState([]);
    const [displayDnted, setDisplayDnted] = useState(4);

    useEffect(() => {
        const storedDonateIds = getDonatedData()

        if (cards.length > 0) {
            // const donated = cards.filter(donate => storedDonateIds.includes(donate.id));
            const donated = [];
            for (const id of storedDonateIds) {
                const donate = cards.find(dnt => dnt.id === id);
                if (donate) {
                    donated.push(donate);
                }
            }
            setDnted(donated)
            document.title = 'Donated'
        }
    }, [])

    return (
        <div className={displayDnted === dnted.length && "mb-20"}>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2 md:mx-20 md:mt-20 gap-4">
                {
                    dnted.slice(0, displayDnted).map(dnt => <DisplayDntData key={dnt.id} dnt={dnt} />)
                }
            </div>
            <div className={displayDnted === dnted.length ? "hidden" : ""}>
                <div className="flex justify-center my-10">
                    <button className="py-2 px-5 rounded text-[#fff] border border-[#009444] bg-[#009444] hover:border hover:text-[#000] transition hover:bg-transparent" onClick={() => setDisplayDnted(dnted.length)}>See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;