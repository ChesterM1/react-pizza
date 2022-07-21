import "./sort.scss";
import arrow from "../../img/arrow.svg";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCategory, setSortValue, selectFilters} from '../../redux/slice/sortSlice';
import { SortValueType } from "../../redux/slice/pizzaSlice";




export const sortList : sortListItem[] =  [
    {sortName: SortValueType.SORT_RATING , name: 'популярности'},
    {sortName: SortValueType.SORT_PRICE, name: 'цене'},
    {sortName: SortValueType.SORT_TITLE, name: 'по алфавиту'}
];

type sortListItem = {
    sortName : SortValueType;
    name : string;
}

type EventMouseType = MouseEvent & {
    path : Node[];
}

const Sort: React.FC = () => {
    const {categoryId, categoryItem, sortValue} = useSelector(selectFilters);
    const dispatch = useDispatch();
    const [openSort, setOpenSort] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);
 
    const viewSort = ()=>{
        setOpenSort(!openSort);
    };

    const getSortValue = (value: sortListItem)=>{
       dispatch(setSortValue(value));
        viewSort();
    };

    const chooseCategories = (i : number) => {
        dispatch(setCategory(i))
    };

    

    useEffect(()=>{
        const closeSort = (e: MouseEvent)=>{
            const _e = e as EventMouseType;

            if(sortRef.current && !_e.path.includes(sortRef.current)){
                setOpenSort(false);
            }
        }

        document.body.addEventListener('click',closeSort);

        return()=> document.body.removeEventListener('click', closeSort);
    },[])


    return (
        <section className="sort">
            <div className="sort__wrapper">
                <div className="sort-pizza">
                    <ul className="sort-pizza__list">
                        {categoryItem.map((item : string, i: number) => {
                            return (
                                <li
                                    className={categoryId === i ? "active" : ""}
                                    onClick={() => chooseCategories(i)}
                                    key={i}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="sort-pizza__blur"></div>
                </div>

                <div 
                    ref={sortRef}
                    className="sort-price">
                    <div className="sort-price__block">
                        <img
                            src={arrow}
                            alt="arrow"
                            className="sort-price__arrow"
                        />
                        <span className="sort-price__text">Сортировка по:</span>
                    </div>
                    <div className="sort-price__drop">
                        <div className="sort-price__item"
                         onClick={viewSort}
                         >{sortValue.name}</div>

                        <ul className={openSort ? 'active' : '' }>
                            {sortList.map((item : sortListItem, i: number)=>{
                                return(
                                    <li className={sortValue.name === item.name ? 'active': ''}
                                    onClick={()=> getSortValue(item)}
                                    key={i}>
                                        {item.name}
                                        </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sort;
