import "./pizzaCardsMini.scss";
import { useDispatch } from "react-redux";
import {
    dltPizzasItem,
    plusPizzaItem,
    minusPizzaItem,
} from "../../../redux/slice/cardPizza";

export type PizzaMiniProp =  {
    param: string;
    count: number;
    imageUrl: string;
    price: number;
    sizes: number;
    types: string;
    title: string;

}

const PizzaCardsMini: React.FC<PizzaMiniProp>  = ({
    param,
    count,
    imageUrl,
    price,
    sizes,
    types,
    title,
}) => {
    const dispatch = useDispatch();

    const dltItem = () => {
        if (window.confirm("Действительно хотите удалить эту пиццу?")) {
            dispatch(dltPizzasItem({ param, price, count }));
        }
    };

    return (
        <div className="cards-pizza">
            <div className="cards-pizza__block">
                <div className="cards-pizza__item">
                    <img
                        src={imageUrl}
                        alt="pizza mini"
                        className="cards-pizza__img"
                    />
                    <div className="cards-pizza__type">
                        <div className="cards-pizza__name">{title}</div>
                        <span className="cards-pizza__options">{types}</span>
                        <span className="cards-pizza__options">,</span>
                        <span className="cards-pizza__options">
                            {" "}
                            {sizes} см.
                        </span>
                    </div>
                </div>

                <div className="cards-pizza__amount">
                    <button
                        onClick={() => dispatch(minusPizzaItem(param))}
                        className={
                            count > 1
                                ? "cards-pizza__amount-btn active"
                                : "cards-pizza__amount-btn"
                        }
                    >
                        <div className="minus">-</div>
                    </button>
                    <span className="cards-pizza__amount-num">{count}</span>
                    <button
                        onClick={() => dispatch(plusPizzaItem(param))}
                        className="cards-pizza__amount-btn active"
                    >
                        <div className="plus">+</div>
                    </button>
                </div>

                <div className="cards-pizza__price">{price * count} ₴</div>

                <div onClick={dltItem} className="cards-pizza__dlt">
                    <button className="cards-pizza__dlt-btn">
                        <svg
                            width="10"
                            height="9"
                            viewBox="0 0 10 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545524 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545524 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838648 7.36965 0.838648 8.04086 1.25258 8.45479C1.66651 8.86872 2.33771 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z"
                                fill="#D0D0D0"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaCardsMini;
