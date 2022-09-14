import styles from "./index.module.css";

interface InProps{
    imageSource : string;
}

const Avatar = (props: InProps) => {
    return (
        <div className={styles.container}>
            <img src="/images/avatar.svg" alt="avatar photo"></img>
        </div>
    );
};

export default Avatar;
