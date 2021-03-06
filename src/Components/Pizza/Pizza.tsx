import "./pizza.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPizzaMini, CardPizzaType } from "../../redux/slice/cardPizza";
import {useAppSelector} from '../../redux/store/store';

const doughType = ["тонкое", "традиционное"];

export type PizzaProp = {
    title: string;
    price: number;
    imageUrl: string;
    types: number[];
    sizes: number[];
    id: string;
};

export type PizzaType = {
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    id: string;
    param?: string;
    count?: number;
};



const Pizza: React.FC<PizzaProp> = ({
    title,
    price,
    imageUrl,
    types,
    sizes,
    id,
}) => {
    const [sizesNum, setSizesNum] = useState(0);
    const [activeDough, setActiveDough] = useState(0);

    const dispatch = useDispatch();
    const pizzaCount =
        useAppSelector( state => state.cardPizza.pizzaMini.filter(
                (elem: CardPizzaType) => elem.id === id
            )
        ).reduce((acum: number, elem: CardPizzaType) => acum + elem.count, 0) ||
        null;

    const cardPizza = {
        title,
        price,
        imageUrl,
        sizes: sizes[sizesNum],
        types: types[0] === activeDough ? doughType[0] : doughType[1],
        id,
        param: activeDough
            ? id + doughType[0] + sizesNum
            : id + doughType[1] + sizesNum,
        count: 1,
    };

    const buyPizza = () => {
        dispatch(setPizzaMini(cardPizza));
    };

    return (
        <div className="pizza-block">
            <img src={imageUrl} alt="pizza" className="pizza-block__img" />
            <h3 className="pizza-block__title">{title}</h3>
            <div className="pizza-block__option">
                <div className="pizza-block__dough">
                    {types.map((dough, i) => {
                        return (
                            <div
                                onClick={() => setActiveDough(i)}
                                className={activeDough === i ? "active" : ""}
                                key={i}
                            >
                                {doughType[dough]}
                            </div>
                        );
                    })}
                </div>
                <div className="pizza-block__diameter">
                    {sizes.map((item, i) => {
                        return (
                            <div
                                className={i === sizesNum ? "active" : ""}
                                onClick={() => setSizesNum(i)}
                                key={i}
                            >
                                {item} см.
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="pizza-block__footer">
                <div className="pizza-block__footer-price">от {price} ₴</div>
                <button className="pizza-block__footer-btn" onClick={buyPizza}>
                    <svg
                        className="pizza-block__footer-btn_icon"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"
                        />
                    </svg>
                    <span className="pizza-block__footer-btn_text">
                        Добавить
                    </span>
                    {pizzaCount && (
                        <span className="pizza-block__footer-btn_total">
                            {pizzaCount}
                        </span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Pizza;
