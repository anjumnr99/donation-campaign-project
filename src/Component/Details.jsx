import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ShowCardDetails from "./ShowCardDetails";
import Error from "../Pages/Error/Error";


const Details = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const [cardDetails,setCardDetails] = useState([]);

    const [isError, setIsError]=useState([]);

    useEffect(()=>{
        const findCard = cards.find(item => item.id === parseInt(id));
        if(findCard){
            setCardDetails(findCard)
        }else{
            setIsError(findCard)
        }
        
    },[id,cards]);

    console.log(cardDetails);
    
    
    return (
        <div>
            {isError?<ShowCardDetails cardDetails={cardDetails}></ShowCardDetails>:<Error></Error>}
        </div>
    );
};

export default Details;