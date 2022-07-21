import './paginate.scss';
import ReactPaginate from 'react-paginate';
import {  useDispatch, useSelector } from 'react-redux';
import { chengePages, selectFilters } from '../../redux/slice/sortSlice';

const Paginate: React.FC = ()=>{

    const dispatch = useDispatch();
    const {categoryId, pages} = useSelector(selectFilters)

    return(
        <div className='paginate'>
            <ReactPaginate
                className='paginate-block'
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e)=>dispatch(chengePages(e.selected))}
                pageRangeDisplayed={8}
                pageCount={categoryId  === 0 ? 3 : 1}
                previousLabel="<"
                forcePage={pages - 1}
            />
        </div>
    );
}

export default Paginate;