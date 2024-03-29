import React from 'react'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Meta from './Meta'
import Nav from './Nav'


const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Meta/>
            <Nav/>
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
