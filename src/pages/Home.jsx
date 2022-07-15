import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { chengePages } from "../redux/slice/sortSlice";
import { fetchPizza } from "../redux/slice/pizzaSlice";

const Home = () => {
    const { categoryId, sortValue, pages, searchValue } = useSelector(
        (state) => state.filters
    );
    const { status, pizzas } = useSelector((state) => state.pizzas);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sortValue = sortList.find(
                (item) => item.sortName === params.sortValue
            );

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
            : pizzas.map((props) => <Pizza {...props} key={props.id} />);

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

            <Paginate pizzasLength={pizzas.length} />
        </>
    );
};

export default Home;
