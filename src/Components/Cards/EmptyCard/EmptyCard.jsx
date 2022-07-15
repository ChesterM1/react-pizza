import './emptyCard.scss';
import emptyImg from '../../../img/empty_basket.png';
import {Link} from 'react-router-dom';


const EmptyCard = ()=>{

    return(
        <section className='empty'>
            <div className="empty__wrapper">
                <h1 className="empty__title">Корзина пустая 😕</h1>
                <p className="empty__text">Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={emptyImg} alt="empty card" />
                <Link to='/'>
                    <button>Вернутся назад</button>
                </Link>
            </div>
        </section>
    )
}

export default EmptyCard;