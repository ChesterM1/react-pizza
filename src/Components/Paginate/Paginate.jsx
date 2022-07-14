
import ReactPaginate from 'react-paginate';
import {  useDispatch, useSelector } from 'react-redux';
import './paginate.scss';

import { chengePages } from '../../redux/slice/sortSlice';

const Paginate = ({pizzasLength})=>{


    const dispatch = useDispatch();
    const {categoryId, pages} = useSelector(store => store.filters)

    return(
        <div className='paginate'>
            <ReactPaginate
            className='paginate-block'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=>dispatch(chengePages(e.selected))}
        pageRangeDisplayed={8}
        pageCount={categoryId === 0 ? 3 : 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={pages - 1}
        />
        </div>
    );
}

export default Paginate;