import styles from '../Search/Search.module.css';
import searchIcon from '../../assets/search-icon.png'
const Search=({placeholder})=>{
    console.log(placeholder)
    return (
        <div style={{position:'relative'}}>
            <form className={styles.wrapper}action="">
                <div>
                    <input type="text"
                            className={styles.search}
                            placeholder={placeholder}
                    />
                </div>
                <div >
                    <button className={styles.searchButton}><img src={searchIcon} alt="" /></button>
                </div>
            </form>
        </div>
    )
}
export default Search;