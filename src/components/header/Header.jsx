import { Link } from "react-router-dom"
import styles from './Header.module.css'
import { useContext, useState } from "react"
import { ClientContext } from "../../context/clientContext"

function Header(){

    const currentUser = useContext(ClientContext).currentUser

    return(
        <>
            <ul className={styles['header-container']}>
                <Link to={'/'}><li><img src="/logo-placeholder.jpg" className={styles['image']} /></li></Link>
                <div className={styles['no-logo-container']}>
                    <Link to={'/add-product'}><li>Add Product</li></Link>
                    {currentUser ? 
                    <Link to={'/profile'}><li><img src="/profile-placeholder.jpg" className={styles['image']} /></li></Link>
                    :    
                    <>
                        <Link to={'/signin'}><li>Sign in</li></Link>
                        <Link to={'/signup'}><li>Sign up</li></Link>
                    </>}
                </div>
            </ul>
        </>
    )
}

export default Header