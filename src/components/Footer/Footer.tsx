import React from 'react';
import styles from './Footer.module.css';
import { images } from '@/assets/Images';
import Image from 'next/image';

const Footer = () => {
    return(
        <div className={styles.footerRoot}>
            <div className={styles.backBtn}>
               <p className='font-poppins'> Back</p>
            </div>
            <div className={styles.nextBtn}>
                <Image src={images?.nextBtn}  className={styles?.nextBtnImg}/>
                <Image src={images?.nextBtnMbl}  className={styles?.nextBtnImgMbl}/>
            </div>
        </div>
    )
}
export default Footer;