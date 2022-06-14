import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./sort.scss";
import arrow from "../../img/arrow.svg";
import {setCategory, setSortValue} from '../../redux/slice/sortSlice';

const Sort = () => {
    const {categoryId, categoryItem, sortValue} = useSelector(state => state.filters);

    const dispatch = useDispatch();
    const [openSort, setOpenSort] = useState(false);


    const sortList =  [
        {sortName: 'rating', name: 'популярности'},
        {sortName: 'price', name: 'цене'},
        {sortName: 'title', name: 'по алфавиту'}
    ];
    

    
    const viewSort = ()=>{
        setOpenSort(!openSort);
    };

    const getSortValue = (i)=>{
       dispatch(setSortValue(i));
        viewSort();
    };

    const chooseCategories = (i) => {
        // onClickCatygory(i);
        dispatch(setCategory(i))
    };

    return (
        <section className="sort">
            <div className="sort__wrapper">
                <div className="sort-pizza">
                    <ul className="sort-pizza__list">
                        {categoryItem.map((item, i) => {
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

                <div className="sort-price">
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
                            {sortList.map((item, i)=>{
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
