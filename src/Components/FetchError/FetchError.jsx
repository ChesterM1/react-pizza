import '../NotFound/notFound.scss'

const FetchError = ()=>{


    return(
        <div className='notFound'>
        <span className='notFound__smile'>😕</span>
        <br />
        <h1 className='notFound__title'>Ошибка загрузки пиццы</h1>
        <div className='notFound__descr'>перезагрузите страницу, или вернитесь попозже</div>
        </div>
    )
}

export default FetchError;