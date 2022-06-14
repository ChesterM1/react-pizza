import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Pizza from '../Components/Pizza/Pizza';
import Skeleton from '../Components/Skeleton/Skeleton';
import Sort from "../Components/Sort/Sort";
import PizzaTitle from "../Components/PizzaTitle/PizzaTitle";
import Paginate from '../Components/Paginate/Paginate';

const Home = ()=>{

    const [pizzas, setPizzas] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [pages, setPages] = useState(1)
    const {categoryId, sortValue} = useSelector(state=> state.filters);
    const searchValue = useSelector(state => state.search.searchValue);

    const getResourse = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        axios
        .get(`https://629fe7af461f8173e4f2841b.mockapi.io/pizzas/items?page=${pages}&limit=4&${category}&search=${searchValue}&sortby=${sortValue.sortName}`)
            .then(res=>{
                setPizzas(res.data);
                setLoaded(true);
            })
    };

    useEffect(() => {
        getResourse();
        // eslint-disable-next-line
    }, [categoryId, sortValue, searchValue, pages]);

    const items = loaded
        ? pizzas.map((props) => {
              return <Pizza {...props} key={props.id} />;
          })
        : [...new Array(4)].map((_, i) => <Skeleton key={i} />);
          console.log(pizzas);


    return(
        <>

        {/* <!-- SORT --> */}

        <Sort/>
        {/* <!-- PIZZA-TITLE --> */}

        <PizzaTitle />
        
        <div className="pizza__wrapper">
        {items}
        </div>
        <Paginate setPages={setPages}/>
        </>
        
      
    );
}

export default Home;