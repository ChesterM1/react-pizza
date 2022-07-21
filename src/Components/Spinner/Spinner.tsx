import './spinner.scss';
// import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner : React.FC = ()=>{

    return(
        <div className='spinner'>
            <img src={spinner} alt="spinner pizza" />
        </div>
    )
}

export default Spinner;