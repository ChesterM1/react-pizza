import { useEffect, useRef } from "react";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import FetchError from "../Components/FetchError/FetchError";
import Pizza from "../Components/Pizza/Pizza";
import Skeleton from "../Components/Skeleton/Skeleton";
import Sort from "../Components/Sort/Sort";
import PizzaTitle from "../Components/PizzaTitle/PizzaTitle";
import Paginate from "../Components/Paginate/Paginate";
import { sortList } from "../Components/Sort/Sort";
import { setFilter } from "../redux/slice/sortSlice";
import { chengePages, selectFilters } from "../redux/slice/sortSlice";
import { fetchPizza, selectPizzas } from "../redux/slice/pizzaSlice";
import {useAppDispatch} from '../redux/store/store';



export type pizzasType = {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
    category?: number;
    rating?: number;
    types : number[];
    sizes: number[];
}



const Home: React.FC = () => {
    const { categoryId, sortValue, pages, searchValue } = useSelector(selectFilters);
    const { status, pizzas } = useSelector(selectPizzas);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const firstLoad = useRef(false);
    const isMounted = useRef(false);

    const getResourse = () => {
        const category = categoryId > 0 ? `category=${categoryId}` : "";

        if (categoryId > 0) {
            dispatch(chengePages(0));
        }
        dispatch(
            fetchPizza({
                category,
                pages,
                searchValue,
                sortValue,
            })
        );
    };
                                //qs.parse(window.location.search.substring(1))
    useEffect(() => {
        if (window.location.search) {
            const params : any = qs.parse(window.location.search.substring(1)) ;

            const sortValue  = sortList.find(
                (item) => item.sortName === params.sortValue
            ) ;
            
                dispatch(
                    setFilter({
                        ...params,
                        sortValue,
                    })
                );
            firstLoad.current = true;
        }
    }, []);

    useEffect(() => {
        if (!firstLoad.current) {
            getResourse();
        }
        firstLoad.current = false;
        // eslint-disable-next-line
    }, [categoryId, sortValue, searchValue, pages]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                pages,
                categoryId,
                sortValue: sortValue.sortName,
            });
            navigate(`?${queryString}`);
        }

        isMounted.current = true;
    }, [categoryId, sortValue, searchValue, pages]);

    const items =
        status === "loading"
            ? [...new Array(4)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((props : pizzasType) => <Pizza {...props} key={props.id} />);

    return (
        <>
            {/* <!-- SORT --> */}

            <Sort />
            {/* <!-- PIZZA-TITLE --> */}

            <PizzaTitle />
            {items.length ? (
                <div className="pizza__wrapper">{items}</div>
            ) : (
                <FetchError />
            )}

            <Paginate/>
        </>
    );
};

export default Home;
