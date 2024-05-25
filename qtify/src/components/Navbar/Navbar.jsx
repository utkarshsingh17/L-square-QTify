import React from "react";
import {Link} from "react-router-dom"
import styles from "../Navbar/Navbar.module.css"
import Logo from '../Logo/Logo'
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
const Navbar=()=>{
    return(
        <nav className={styles.navbar}>
            <Link to="/">
            <Logo />
            </Link>
            <SearchBar
            
            />
            <Button>Give feedback</Button>

            
        </nav>
    )

}
export default Navbar;