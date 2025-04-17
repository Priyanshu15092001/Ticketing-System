import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.css'
export default function Login() {

    const [formData,setFormData]=useState({username:"",password:""})
    const navigate = useNavigate()
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleClick=()=>{
      navigate('/admin/dashboard')
    }

  return (
    <section className={styles.login}>
      <h2>Sign in to your Plexify</h2>

      <form action="">
        <div className={styles.input}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="email"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={handleClick}>Log in</button>
          <p style={{color:'#244779',textDecoration:'underline'}}>Forgot password?</p>
          <p>Don't have an account?<Link to='/signup'><span style={{color:'#244779',textDecoration:'underline'}}>Sign up</span></Link></p>
        </div>
      </form>
      <p className={styles.footer}>
        This site is protected by reCAPTCHA and the{" "}
        <span> Google Privacy Policy</span> and <span>Terms of Service</span>{" "}
        apply.
      </p>
    </section>
  );
}
