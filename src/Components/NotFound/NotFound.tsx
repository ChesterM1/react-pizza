import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound: React.FC = ()=>{

    return(
        <div className='notFound'>
        <span className='notFound__smile'>😕</span>
        <br />
        <h1 className='notFound__title'>Страница не найдена</h1>
        <div className='notFound__descr'>к сожалению по этой ссылке ничего не обнаружено</div>
        <Link to={'/'}>
        <button className='notFound__btn'>На Главную</button>

        </Link>

        </div>
    );
}

export default NotFound;