import styles from "./index.module.css";
import type { NextPage } from "next";

interface InProps{
    imageSource : string;
}

const Avatar:NextPage<InProps> = ({imageSource}) => {
    return (
        <div className={styles.container}>
            <img src="/images/avatar.svg" alt="avatar photo"></img>
        </div>
    );
};

export default Avatar;
