import React from 'react'
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Link to='/' className={styles.link}>
                    <h3 className={styles.htag}>
                        Home
                    </h3> 
                </Link>
            </div>
        </header>
    )
}