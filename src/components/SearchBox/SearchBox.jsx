import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css'


const SearchBox = () => {

  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  return (
      <div>
      <p className={styles.label}>Find contacts by name</p>
      <input className={styles.input} type="text" value={filter} onChange={(e) => {
        const action = changeFilter(e.target.value);
        dispatch(action);
      }} />
     
    </div>
  );
};




export default SearchBox;