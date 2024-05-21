import React from "react";
import {Link} from "react-router-dom"
import styles from "../Navbar/Navbar.module.css"
import Logo from '../Logo/Logo'
import Button from "../Button/Button";
import Search from "../Search/Search";
const Navbar=()=>{
    return(
        <nav className={styles.navbar}>
            <Link to="/">
            <Logo />
            </Link>
            <Search
            placeholder="Search a song of your choice"
            />
            <Button>Give feedback</Button>

            
        </nav>
    )

}
export default Navbar;