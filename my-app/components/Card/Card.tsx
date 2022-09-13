import styles from './index.module.css'

interface InProps {

}

const Card = (props: InProps) => {
    return (
        <div className={styles.container}>
            <div className='space-between'>
                <span className={styles.configTitle}>Car Configuration 1</span>
                <span className={styles.configStatus}>Edited 7 hours ago</span>
            </div>
            <div className={styles.videoOverlay}>
                <video controls
                    preload="auto">
                    <source src="https://vimeo.com/475068701" />
                    <p>Your browser does not support HTML5 video. Here is a <a href="https://vimeo.com/475068701">link to the video</a> instead.</p>
                </video>
            </div>

            <button className={styles.downloadButton}><span><img src='' /></span>Download Brochure</button>
        </div>
    )
}

export default Card;