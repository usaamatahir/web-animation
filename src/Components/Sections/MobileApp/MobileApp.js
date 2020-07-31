import React  from 'react';
import 'aos/dist/aos.css';
import styles from './MobileApp.module.css';

const MobileApp = () => {
    return (
        <div className={styles.vision}>
            <h1>android and ios app developer</h1>
            <div data-aos="slide-left" className={styles.svgImage}>
                <img src={require('./android.svg')} alt="SVG logo" />
            </div>
            <div data-aos="slide-right" className={styles.square}>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.content}>
                    <h2>mobile app developer</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default MobileApp;