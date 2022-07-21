import EmptyCard from "../Components/Cards/EmptyCard/EmptyCard";
import CompleteCard from "../Components/Cards/CompleteCard/CompleteCard";
import { useSelector } from "react-redux";
import {selectCardPizza} from '../redux/slice/cardPizza';

const CardsPage = ()=>{

    const {pizzaMini} = useSelector(selectCardPizza);

        const render = pizzaMini.length ? <CompleteCard/> : <EmptyCard/> ;
    return(
        <>
        {render}
        </>
        
    );
}

export default CardsPage;