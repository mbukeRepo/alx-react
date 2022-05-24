import React from 'react';
import logo from './logo.jpg';
import {StyleSheet, css} from 'aphrodite';
export default function Header () {
  return (
      <header className={css(styles.AppHeader)}>
        <div className={css(styles.logoContainer)}>
          <img src={logo} alt="" style={{width:'100%'}} />
        </div>
        <div>
        <h1>School dashboard</h1>
        </div>
      </header>
  );
}


const styles = StyleSheet.create({
  AppHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottom: 'rgba(226, 30, 30, 0.767) 6px solid',
      margin: 0,
      color: 'rgba(226, 30, 30, 0.767)',
      padding: '2rem',
  },
  logoContainer: {
    width: '150px',
    height: '150px'
  }
});

