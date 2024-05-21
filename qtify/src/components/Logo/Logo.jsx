import logo from '../../assets/logo.png'
import styles from '../Logo/Logo.module.css'
const Logo=()=>{
    return (
        <img src={logo} alt="qtify-logo" className={styles.logo} />

    )
}
export default Logo;