import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import './header.scss';
import logo from '../../img/pizza_logo.png'
import basketSvg from '../../img/basket_icon.svg';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';
import {selectCardPizza} from '../../redux/slice/cardPizza';



const Header: React.FC = () =>{

    const {totalPizzaCount, totalPrice} = useSelector(selectCardPizza);
    const {pathname} = useLocation();


     return(
        <header className="header">
            <div className="header__wrapper">
                <Link to={'/'} className='header-link'>
                    <div className="header-logo">
                        <img src={logo} alt="pizza logo" className="header-logo__img"/>
                        <div className="header-logo__title">REACT PIZZA</div>
                        <div className="header-logo__subtitle">самая вкусная пицца во вселенной</div>
                    </div>
                </Link>
                
               {pathname !== '/cards' && 
               <>
                <Search/>

                    <Link to={'cards'} className="basket">
                        <div className="header-basket">
                            <span className="header-basket__price">{totalPrice} ₴</span>
                            <span className="header-basket__vertical">|</span>
                            <div>
                                <img src={basketSvg} alt="basket" className="header-basket__icon"/>
                                <span className="header-basket__total">{totalPizzaCount}</span>
                            </div>
                        </div>
                    </Link>
                </>
                }
            </div>
        </header>
     );
}

export default Header;