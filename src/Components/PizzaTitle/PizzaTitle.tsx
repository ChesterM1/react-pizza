import './pizzaTitle.scss';
import { useSelector } from 'react-redux';
import {selectFilters} from '../../redux/slice/sortSlice'

const PizzaTitle: React.FC = ()=>{

    const {categoryId, categoryItem} = useSelector(selectFilters);
    
    return(
        <section className="pizza-title">
        <h2 className="pizza-title__text">{categoryItem[categoryId]} пиццы</h2>
    </section>
    );
}

export default PizzaTitle;