import React from 'react';
import Sidenav from '../layout/sidenav/Sidenav';
import Main from '../layout/main/Main';
import styles from '../Home/home.module.css'

export default function Home({ user }) {
  return (
    <div>
      <div className={styles.mainContainer}>
      <Sidenav />
      <Main/>
       
      </div>


    </div>
  );
}
