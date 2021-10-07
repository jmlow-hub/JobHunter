import React from 'react';

import styles from "./NewUserSignUp.module.scss";

const NewUserSignUp = () => {
  return (
    <div className={styles.newUserSignUp}>
       
      <h3>Enter email and password to sign-up</h3>

      <form className={styles.newUserSignUp__form} >
          <input type="text" placeholder="enter user name" value ="" />
          <input type="text" placeholder="enter password" value ="" />
          <button>sign up</button>
      </form>             
      
    </div>
  )
}

export default NewUserSignUp
