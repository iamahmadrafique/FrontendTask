import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { images } from "../../assets/Images.ts";
import Link from 'next/link';
import { Button } from "@mui/material";
import styles from './Header.module.css';
import { useRecoilState } from "recoil";
import Image from "next/image.js";



function Header() {
 
  return (
     <div className={styles.topbarRoot}>
        <div className={styles.topbarLeft}>
            <Image src={images.backBtn} alt='' className={styles.backBtn}/>
            <div className={styles.departmenHead}>
                <h3>Media management<Image alt='' src={images.editBtn} className={styles.editBtn}/></h3>
                <p>Draft campaign</p>
            </div>
        </div>
        <div className={styles.topbarLeft}>
            <div className={styles.userName}>
                <h3>Jane Cooper</h3>
                <p>Change profile</p>
            </div>
            <Image src={images.avatar} alt='' className={styles.avatar}/>
        </div>
     </div>
  );
}
export default Header;
