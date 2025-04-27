import React, { useEffect, useState } from 'react'
import styles from './DefaultMessage.module.css'
import { createTicket } from '../../services/index'
import { toast } from 'react-toastify'
export default function DefaultMessage({firstMessageContent,setFirstMessage,messages,setMessages}) {



    const [formData, setFormData] =useState({
        name:"",
        email:"",
        phone:""
    })

    

    const handleSubmit=(e)=>{
        e.preventDefault()
        createTicket(formData,firstMessageContent)
        .then(async(response)=>{
            const data = await response.json()
            if(response.ok){
                localStorage.setItem("ticket",JSON.stringify(data.ticket))
                setFormData({
                    name:"",
                    email:"",
                    phone:""
                })

                setMessages(data?.chat)
                setFirstMessage(false)
            }
            else{
                toast.error(data.message)
            }
        })
        .catch((error)=>{
            console.error(error);
            
        })
    }

    const handleChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

  return (
    <div className={styles.container}>
        <h5 className={styles.header}>Introduce Yourself</h5>
        <form  className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Your name' />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="phone">Your Phone</label>
                <input type="text" name='phone' value={formData.phone} onChange={handleChange} placeholder='+91-838383444' />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input type="text" name='email' value={formData.email} onChange={handleChange} placeholder='example@gmail.com' />
            </div>

            <button onClick={handleSubmit}>Thank You!</button>
        </form>
    </div>
  )
}
