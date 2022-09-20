import styles from './index.module.css';
import { useState } from 'react';

import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { AiFillPlayCircle } from "react-icons/ai";

import { ConfigDataType } from "../../constants/DataTypes";
import {imgSource} from "../../constants/imageMappings"

interface InProps {
    index: Number,
    configData: ConfigDataType;
}

const Card = (props: InProps) => {
    let [clicked, setClicked] = useState(false);
    let [showModelThumbnail, setShowModelThumbnail] = useState(true);
    let [startPlaying, setStartPlaying] = useState(false);

    function getLogo(variant:string){
        switch (variant) {
            case 'MG Astor':
                return imgSource.astor;
            case 'MG Gloster':
                return imgSource.gloster;
            case 'MG Hector':
                return imgSource.hector;
            case 'MG zsev':
                return imgSource.zsev;  
            case 'MG Hector Plus':
                return imgSource.hectorPlus;
            default:  
          }
    }
    // const variant:string = props.configData.data.name;
    const variant:string = 'MG Hector';
    const variantLogo = getLogo(variant);
    
    const getLastEdited = (timestamp:number) => {
        let timeDiff = new Date().getTime() - new Date(timestamp).getTime();
        timeDiff = timeDiff/1000; //seconds
        return Math.floor(timeDiff/3600);
    }
    const lastEditedTime = getLastEdited(props.configData.timestamp);

    const videoUrl = 'https://assets.metadome.ai/MG-autodome/media/videos/' + props.configData.config + '.mp4';

    const handleMouseDown = () => {
        setClicked(true);
    }

    const handleMouseUp = () => {
        setClicked(false);
    }

    const handleClickPreview = () => {
        setShowModelThumbnail(false);
        setStartPlaying(true);
    }

    return (
        <div className={styles.container}>
            <div className='space-between'>
                <span className={styles.configTitle}>{'Car Configuration ' + props.index}</span>
                <span className={styles.configStatus}>{`Edited ${lastEditedTime} hours ago`}</span>
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
                    onClickPreview={handleClickPreview}
                    playing={startPlaying}
                />
                {showModelThumbnail &&
                    (<span >
                        <img className={styles.modelThumbnailBg} src='/images/variantBg.svg' /> 
                        <img style={{bottom:(variant=='MG Hector')?'0':'0.9rem'}} className={styles.modelThumbnail} src={'/images/' + variantLogo} />
                    </span>)
                }
            </div>
            <div onMouseLeave={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={styles.downloadButton + ' cursor-pointer'}>
                <a href='/images/avatar.svg' download='avatar'>
                    {clicked ? <img draggable={false} src='/images/downloadButtonOnclick.svg' /> : <img draggable={false} src='/images/downloadButtonDefault.svg' />}
                </a>
            </div>
        </div>
    )
}

export default Card;