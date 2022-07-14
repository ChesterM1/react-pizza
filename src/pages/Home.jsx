import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from 'qs';
import axios from "axios";
import Pizza from '../Components/Pizza/Pizza';
import Skeleton from '../Components/Skeleton/Skeleton';
import Sort from "../Components/Sort/Sort";
import PizzaTitle from "../Components/PizzaTitle/PizzaTitle";
import Paginate from '../Components/Paginate/Paginate';
import {setFilter} from '../redux/slice/sortSlice';
import {sortList} from '../Components/Sort/Sort';
import {chengePages} from '../redux/slice/sortSlice';

const Home = ()=>{

    const [pizzas, setPizzas] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {categoryId, sortValue, pages, searchValue} = useSelector(state=> state.filters);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const firstLoad = useRef(false);
    const isMounted = useRef(false);

    const getResourse = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        if(categoryId > 0){
            dispatch(chengePages(0));
        }
        
        axios
        .get(`https://629fe7af461f8173e4f2841b.mockapi.io/pizzas/items?${category}&page=${pages}&limit=4&search=${searchValue}&sortby=${sortValue.sortName}`)
            .then(res=>{
                setPizzas(res.data);
                setLoaded(true);
            })
    };

    useEffect(()=>{
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1));

            const sortValue = sortList.find((item) => item.sortName === params.sortValue);
            
            dispatch(setFilter({
                ...params,
                sortValue
            }));

            firstLoad.current = true;
        }
    },[])

    useEffect(() => {
        if(!firstLoad.current){
            getResourse();
        }
        firstLoad.current = false;
        // eslint-disable-next-line
    }, [categoryId, sortValue, searchValue, pages]);

    useEffect(()=>{
       if(isMounted.current){
        const queryString = qs.stringify({
            pages,
            categoryId,
            sortValue : sortValue.sortName
        })
        navigate(`?${queryString}`);
       }

       isMounted.current = true;
    },[categoryId, sortValue, searchValue, pages])

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
        <Paginate pizzasLength={pizzas.length}/>
        </>
        
      
    );
}

export default Home;