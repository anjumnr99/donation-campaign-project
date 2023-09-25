import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, image, title, category, categoryBackgroundColor, cardBackgroundColor, textColor, buttonBackgroundColor, description, price } = card || {};
    return (
        <div>
            <Link to={`/${id}`}>
                <div style={{ backgroundColor: `${cardBackgroundColor}` }} className="card  h-72  shadow-xl flex-col flex-shrink-1 ">
                    <figure className=" h-[70%]"><img className="w-full h-full" src={image} alt="Shoes" /></figure>
                    <div className="h-[30%] rounded-b-2xl pt-3 pl-3 pb-4">
                        <div className="h-full">
                            <h2 style={{ color: `${textColor}`, backgroundColor: `${categoryBackgroundColor}` }} className="w-fit py-1 px-4 mb-2 rounded-md text-sm font-medium" >{category}</h2>
                            <p style={{ color: `${textColor}` }} className=" text-base font-bold">{title}</p>

                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;