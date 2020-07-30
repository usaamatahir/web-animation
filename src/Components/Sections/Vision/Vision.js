import React, {useEffect} from 'react';
import AOS from 'aos';
import styles from './Vision.module.css';


const Vision = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className={styles.vision}>
            <h1>front end</h1>
            <div data-aos="slide-left" className={styles.svgImage}>
                <img src={require('./frontEnd.svg')} alt="SVG logo" />
            </div>
            <div data-aos="slide-right" className={styles.square}>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.content}>
                    <h2>react web developer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Vision;