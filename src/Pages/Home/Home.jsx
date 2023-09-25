import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Cards from "../../Component/Cards";
import { useEffect, useState } from "react";


const Home = () => {
    const cards = useLoaderData();
    const [category, setCategory] = useState('');
    const [allCategoryItems, setAllCategoryItems] = useState([]);

    console.log(cards);

    const handleSearchBtn = () => {
        const inputField = document.getElementById('input-field');
        const inputFieldValue = inputField.value;

        setCategory(inputFieldValue);


        inputField.value = '';

    };

    useEffect(() => {
        if (category) {
            
            const findCategory = cards.filter(item => item.category.toUpperCase() === category.toUpperCase());
            setAllCategoryItems(findCategory);
            
        }


    }, [category, cards]);



    console.log(allCategoryItems);

    return (
        <div >
            <Banner handleSearchBtn={handleSearchBtn}></Banner>
            {
                category ? <Cards cards={allCategoryItems}  ></Cards>
                    : <Cards cards={cards}  ></Cards>
            }

        </div>
    );
};

export default Home;