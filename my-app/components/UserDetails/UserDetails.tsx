import styles from './index.module.css'

interface InProps{
    userInfoCategory: string;
    userInfo: string;
}

const UserDetails = (props : InProps) => {
    return(
        <div className={styles.container}>
            <span className={styles.details}>{props.userInfoCategory}</span>
            <span className={styles.details}>{props.userInfo}</span>
        </div>
    )
}

export default UserDetails;