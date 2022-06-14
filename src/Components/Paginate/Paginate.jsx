
import ReactPaginate from 'react-paginate';
import './paginate.scss';

const Paginate = ({setPages})=>{

    return(
        <div className='paginate'>
            <ReactPaginate
            className='paginate-block'
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e)=>setPages(e.selected+1)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
        />
        </div>
    );
}

export default Paginate;