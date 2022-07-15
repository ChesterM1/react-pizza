import EmptyCard from "../Components/Cards/EmptyCard/EmptyCard";
import CompleteCard from "../Components/Cards/CompleteCard/CompleteCard";
import { useSelector } from "react-redux";

const CardsPage = ()=>{

    const cardItems = useSelector(state => state.cardPizza.pizzaMini);

        const render = cardItems.length ? <CompleteCard/> : <EmptyCard/> ;
    return(
        <>
        {render}
        </>
        
    );
}

export default CardsPage;