import styles from '../styles/Header.module.css'

const Header: React.FC = () => {
    return (
        <div>
            <h1 className={styles.title}>
                <span>WebDevs</span> News
            </h1>
            <p className={styles.description}>Keep up to date with latest web dev news</p>
        </div>
    )
}

export default Header
