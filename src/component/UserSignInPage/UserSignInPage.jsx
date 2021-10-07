import React from 'react'
import { Link } from "react-router-dom";

import styles from "./UserSignInPage.module.scss";


const UserSignInPage = () => {
  return (
    
      <form className={styles.userSignIn}>

        <input type="text" placeholder="enter user name" value ="" />
        <input type="text" placeholder="enter password" value ="" />
        <button>login</button>

        <p>not registered? click {<Link to="/newUserSignup">here</Link>} to login.</p>

      </form>
      
    
  )
}

export default UserSignInPage
