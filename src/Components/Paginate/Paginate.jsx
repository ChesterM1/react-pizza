
import ReactPaginate from 'react-paginate';
import {  useDispatch } from 'react-redux';
import './paginate.scss';

import { chengePages } from '../../redux/slice/sortSlice';

const Paginate = ({pizzasLength})=>{


    const dispatch = useDispatch();

    return(
        <div className='paginate'>
            <ReactPaginate
            className='paginate-block'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=>dispatch(chengePages(e.selected+1))}
        pageRangeDisplayed={8}
        pageCount={pizzasLength < 4 ? 1 : 3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        />
        </div>
    );
}

export default Paginate;