import styles from './index.module.css';
import { useState } from 'react';

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import {AiFillPlayCircle} from "react-icons/ai";

interface InProps {
    index: Number;
    videoSource: string;
}

const Card = (props: InProps) => {
    let [clicked, setClicked] = useState(false);

    const handleMouseDown = () => {
        setClicked(true);
    }

    const handleMouseUp = () => {
        setClicked(false);
    }

    return (
        <div className={styles.container}>
            <div className='space-between'>
                <span className={styles.configTitle}>{'Car Configuration ' + props.index}</span>
                <span className={styles.configStatus}>Edited 7 hours ago</span>
            </div>
            <div className={styles.playerWrapper}>
                <ReactPlayer
                    className={styles.reactPlayer}
                    url='/videos/sample.mp4'
                    controls={true}
                    width='52rem'
                    height='30rem'
                    light='/images/thumbnail.svg'
                    playIcon={<AiFillPlayCircle className={styles.playIcon}></AiFillPlayCircle>}
                />
            </div>
            <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={styles.downloadButton + ' cursor-pointer'}>
                {clicked ? <img src='/images/downloadButtonOnclick.svg' /> : <img src='/images/downloadButtonDefault.svg' />}
            </div>
        </div>
    )
}

export default Card;