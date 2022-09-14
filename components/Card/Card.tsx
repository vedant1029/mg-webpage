import styles from './index.module.css'
import {useState} from 'react';

interface InProps {
    index: Number;
    videoSource : string;
}

const Card = (props: InProps) => {
    let [clicked,setClicked] = useState(false);

    const handleMouseDown = () =>{
        setClicked(true);
    }

    const handleMouseUp = () => {
        setClicked(false);
    }

    return (
        <div className={styles.container}>
            <div className='space-between'>
                <span className={styles.configTitle}>{'Car Configuration ' + props.index }</span>
                <span className={styles.configStatus}>Edited 7 hours ago</span>
            </div>
            <div className={styles.videoOverlay}>
                <video controls>
                    <source src={props.videoSource} />
                    <p>Your browser does not support HTML5 video. Here is a <a href={props.videoSource}>link to the video</a> instead.</p>
                </video>
            </div>
            <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={styles.downloadButton + ' cursor-pointer'}>
                {clicked ?<img src='/images/downloadButtonOnclick.svg' /> : <img src='/images/downloadButtonDefault.svg' />}
            </div>
        </div>
    )
}

export default Card;