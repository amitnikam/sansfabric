import React from "react"
import {Link} from "gatsby"
import styles from './404.module.css'

export default function Home() {
    return (
        <div className={styles.notfoundid}>
            <div className={styles.notfound}>
                <div className={styles.notfund404}>
                    <h1>:(</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or
                    is temporarily unavailable.</p>
                <Link to="/" className={styles.notfoundlink}>home page</Link>
            </div>
        </div>
    )
}
