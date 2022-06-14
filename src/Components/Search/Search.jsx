import { useRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import './search.scss';

import {setSearchValue} from '../../redux/slice/searchSlice';

const Search = ()=>{

    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const inputRef = useRef();

    // eslint-disable-next-line
    const  updateSearch = useCallback(
      debounce((str)=>{
        dispatch(setSearchValue(str))
      }, 500),
    []);

    const updateInputValue = (value)=>{
      setInputValue(value);
      updateSearch(value);
    }
    

    const clearInput = ()=>{
        setInputValue('');
        dispatch(setSearchValue(''));
        inputRef.current.focus();
    }

    return(
        <div className='search'>
            <svg
        className='search-icon'
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#c2c2c2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#c2c2c2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
            <input
              ref={inputRef}
              className='search-input'
              type="text"
              placeholder='Поиск пиццы ...'
              onChange={(e)=>updateInputValue(e.target.value)}
              value={inputValue}/>
              
           {inputValue &&  <svg
          onClick={clearInput}
          className='search-clean'
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill='#c2c2c2' d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>}
        </div>
    );
}

export default Search;