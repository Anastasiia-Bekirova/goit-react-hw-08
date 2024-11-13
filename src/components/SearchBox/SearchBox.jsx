import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

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