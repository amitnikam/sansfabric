import React from 'react'
import styles from './banner.module.css'
import loc from '../images/banner.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <img src={loc} className={styles.bannerimg} alt="banner" />
            <div className={styles.bannertext}>SANS Fabric is ISO 9001: 2015 certified
                Indian company. We are manufacturers and exporters of all types of fabrics both
                Greige and finished, and specialise in Parachute Fabrics. We also provide custom
                made Specialty Textiles as per our client’s requirements and needs, serving the
                various industrial fabrics product and their technical applications.</div>
        </div>
    )
}
