import heroImage from '../../assets/vibrating-headphone.png'
import styles from '../Hero/Hero.module.css'
const Hero=()=>{
    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroText}>
        <div>
                <h1>100 Thousand Songs, ad-free</h1>
        </div>
        <div>
                <h1>Over thousands podcast episodes</h1>
        </div>
            </div>
        <div>
            <img src={heroImage} alt="" />
        </div>
        </div>
    )
}

export default Hero;