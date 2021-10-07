import React from 'react'

import UserSignInPage from '../../component/UserSignInPage';
import styles from "./Login.module.scss";




const Login = () => {
  return (
    <div className={styles.login}>
      <h1>JobHunt</h1>
      <UserSignInPage />
      
    </div>
  )
}

export default Login
