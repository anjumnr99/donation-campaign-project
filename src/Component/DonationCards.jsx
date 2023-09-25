

const DonationCards = ({ card }) => {
    const { id, image, title, category, categoryBackgroundColor, cardBackgroundColor, textColor, buttonBackgroundColor, description, price } = card || {};
    return (
        <div>
            <div className="card card-side h-60  bg-base-100 shadow-xl rounded-md">
                <figure className="w-[40%] h-full "><img className="h-full" src={image} alt="Movie" /></figure>
                <div style={{ backgroundColor: `${cardBackgroundColor}` }} className="card-body rounded-r-md w-[60%] flex-col flex-grow">
                    <h2 style={{ color: `${textColor}`, backgroundColor: `${categoryBackgroundColor}` }} className="w-fit py-1 px-4 mb-2   text-sm font-medium" >{category}</h2>
                    <h2 className="card-title">{title}</h2>
                    <h2 style={{ color: `${textColor}` }} className=" text-base font-semibold" >${price}</h2>
                    <div className="card-actions ">
                        <button style={{ backgroundColor: `${buttonBackgroundColor}` }} className="btn  text-white">View Details</button>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default DonationCards;