import Card from "./Card";


const Cards = ({cards}) => {
    
    return (
        <div className="container mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-36">
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
            
        </div>
    );
};

export default Cards;