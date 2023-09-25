import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCardDetails from "./ShowCardDetails";


const Details = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const [cardDetails,setCardDetails] = useState([]);

    useEffect(()=>{
        const findCard = cards.find(item => item.id === parseInt(id));
        setCardDetails(findCard)
    },[id,cards]);

    console.log(cardDetails);
    
    
    return (
        <div>
            <ShowCardDetails cardDetails={cardDetails}></ShowCardDetails>
        </div>
    );
};

export default Details;