import { useEffect, useState } from "react";
import DonationCards from "../../Component/DonationCards";


const Donation = () => {

    const [donated, setDonated] = useState([]);
    const [noData, setNoData] = useState();
    const [isSee, setIsSee] = useState(false);

    useEffect(() => {
        const donatedCards = JSON.parse(localStorage.getItem('Cards'));
        if (donatedCards) {

            setDonated(donatedCards);
        } else {
            setNoData('No data to show');
        }
    }, [])


    return (
        <div>
            <div className="container mx-auto px-6 lg:px-14 mt-5 mb-5">


                {
                    noData ?
                        <p className="text-2xl font-semibold flex justify-center items-center h-[80vh]"> {noData}</p> :
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
                        {
                            isSee?donated.map(card => <DonationCards key={card.id} card={card}></DonationCards>):
                            donated.slice(0,4).map(card => <DonationCards key={card.id} card={card}></DonationCards>)
                        }
                    </div>

                }
                {
                
                    donated.length>4 && 
                    <div className="flex justify-center items-center">
                    <button onClick={()=>setIsSee(true)} className={`btn ${isSee&& 'hidden'} bg-[#009444] text-white`}>See all</button>
                   </div>
                }
                



            </div>
        </div>
    );
};

export default Donation;