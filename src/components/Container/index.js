import styles from './index.module.css'

export function Container({children}) {
    return <div className={styles.container}>
        <div className={styles.content}>
            {children}
        </div>
    </div>
}