import { useSelector } from 'react-redux';
import './pizzaTitle.scss';

const PizzaTitle = ()=>{

    const {categoryId, categoryItem} = useSelector(state => state.filters);
    
    return(
        <section className="pizza-title">
        <h2 className="pizza-title__text">{categoryItem[categoryId]} пиццы</h2>
    </section>
    );
}

export default PizzaTitle;