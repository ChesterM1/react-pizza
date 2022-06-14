import card_black from '../../img/card_black.svg';
import trash_icon from '../../img/trash_icon.svg';

import PizzaCardsMini from '../PizzaCardsMini/PIzzaCardsMini';


import './cards.scss';

const Cards = ()=>{

    return(
        <section className='cards'>
            <div className="cards__wrapper">
                <div className="cards-header">
                    
                        <div className='cards-header__item' >
                            <img src={card_black} alt="cards" className="cards-header__img" />
                            <span className="cards-header__text">Корзина</span>
                        </div>

                        <div className="cards-header__item header-clean">
                            <img src={trash_icon} alt="trash icon" className="cards-header__icon" />
                            <span className="cards-header__clean">Очистить корзину</span>
                        </div>
                    
                </div>

                    {/* PIZZA CARD MINI */}

                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>
                    <PizzaCardsMini/>




                    <div className="cards-total">
                        <div className="cards-total__pizza">Всего пицц: <span>3 шт.</span></div>
                        <div className="cards-total__price">Сумма заказа: <span>900 ₴</span></div>
                    </div>

                    <div className="cards-btn">
                        
                            <button className="cards-btn__back cards-btn__button"> 
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span>Вернуться назад</span>
                            </button>
                            <button className="cards-btn__pay cards-btn__button">Оплатить сейчас</button>
                    </div>
                
            </div>

        </section>
    );
}

export default Cards;