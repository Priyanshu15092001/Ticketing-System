import React, { useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import styles from './Signup.module.css'
export default function Signup() {
  const [formData, setFormData] = useState({ firstName: "", lastName:"",email:"",password: "" });
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick=()=>{
    navigate('/admin')
  }

  return (
    <section className={styles.signup}>
      <div className={styles.header}>
        <h2>Create an account</h2>
        <Link to='/login'><h4>Sign in instead</h4></Link>
      </div>

      <form action="">
        <div className={styles.input}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
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
          <div className={styles.formGroup}>
            <label htmlFor="confimrPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className={styles.terms}>
          <input
              type="checkbox"
              id="terms"
              name="terms"
              value={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms">By creating an account, I agree to our <u>Terms of use</u> and <u>Privacy Policy</u> </label>
          </div>
          <button onClick={handleClick}>Create an account</button>
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
