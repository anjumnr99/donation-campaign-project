import swal from "sweetalert";


const ShowCardDetails = ({ cardDetails }) => {
    const { id, image, title, description, price, buttonBackgroundColor } = cardDetails || {};


    const handleDonateBtn = () => {
        const allDonatedCards = [];
        const getItem = JSON.parse(localStorage.getItem('Cards'));
        if (!getItem) {
            allDonatedCards.push(cardDetails);
            localStorage.setItem('Cards', JSON.stringify(allDonatedCards));
        } else {
            const isExists = getItem.find(item => item.id === id);
            if (isExists) {
                swal("Sorry", "You hove already donated", "error");
            } else {
                allDonatedCards.push(...getItem, cardDetails);
                localStorage.setItem('Cards', JSON.stringify(allDonatedCards));
            }

        }
    }

    return (
        <div className="container mx-auto px-6 lg:px-14 mt-12 mb-36  ">
            <div className="hero min-h-[80vh]  rounded-lg mb-12">
                <figure className="relative rounded-lg w-full h-[90vh]">
                    <img className="absolute block w-full h-full rounded-lg" src={image} alt="" />

                    <div className="absolute overlay rounded-b-lg bg-[#0B0B0B80] bottom-0 w-full h-24 "></div>
                    <button onClick={handleDonateBtn} style={{ backgroundColor: `${buttonBackgroundColor}` }} className="absolute block btn border-none text-white bottom-6 left-9 ">Donate ${price}</button>
                </figure>
            </div>
            <div className=" text-4xl text-[#0B0B0B] font-bold mb-6">{title}</div>
            <p className="text-[#0b0b0bb3] ">{description}</p>
        </div>
    );
};

export default ShowCardDetails;