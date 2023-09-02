import React, { useState , useEffect } from 'react';
import { ToastContainer} from 'react-toastify';
import { Link } from 'react-router-dom';

//Functions
import { validate } from './../shared/validate';
//Toastify
import {notify} from '../shared/toast';
import 'react-toastify/dist/ReactToastify.css';
//CSS
import styles from "./SignUp.module.css";


const SignUp= ()=> {

const [data , setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted:false
});

const [errors , setErrors]=useState({});
const [touched , setTouched]=useState({});

useEffect(()=>{
   setErrors(validate(data,"signup")) 

},[data ,touched]);


const changeHandeler= event =>{

    if(event.target.name === "isAccepted"){
        setData({...data,[event.target.name]:event.target.checked} )
    }else{
        setData({...data ,[event.target.name]:event.target.value})
    }
}

const focusHandler= event =>{
    setTouched({...touched,[event.target.name]:true})
}

const submitHandler= event =>{
    event.preventDefault();
    if(!Object.keys(errors).length){
notify("You signed in successfully!","success");

    }else {
        notify("Invalid data!","error")
        setTouched({
        name:true,
        email:true,
        password:true,
        confirmPassword:true,
        isAccepted:true
    })
    }
}

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2 className={styles.header}>Sign Up</h2>
        <div className={styles.formField}>
            <label>Name</label>
            <input className={(errors.name && touched.name) ? styles.uncompleted : styles.formInput}  
            type="text" 
            name='name' 
            value={data.name}  
            onChange={changeHandeler} 
            onFocus={focusHandler}/>
            {errors.name && touched.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.formField}>
            <label>Email</label>
            <input className={(errors.email && touched.email) ? styles.uncompleted : styles.formInput}  
            type="text" 
            name='email' 
            value={data.email} 
            onChange={changeHandeler} 
            onFocus={focusHandler}/>
            {errors.email && touched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.formField}>
            <label>Password</label>
            <input className={(errors.password && touched.password) ? styles.uncompleted : styles.formInput}  
            type="password" 
            name='password' 
            value={data.password} 
            onChange={changeHandeler} 
            onFocus={focusHandler} />
            {errors.password && touched.password && <span>{errors.password}</span>}
        </div>
        
        <div className={styles.formField}>
            
            <label>Confirm Password</label>
            <input  
            className={(errors.confirmPassword && touched.confirmPassword) ? styles.uncompleted : styles.formInput}
            type="password" 
            name='confirmPassword' 
            value={data.confirmPassword}  
            onChange={changeHandeler} 
            onFocus={focusHandler}/>
            {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        
        <div className={styles.formField}>
            <div className={styles.checkBoxContauner}>
            <label>I accepted terms of privacy policy</label>
            <input 
            type="checkbox" 
            name='isAccepted' 
            value={data.isAccepted} 
            onChange={changeHandeler} 
            onFocus={focusHandler}/>
            </div>
            {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
        </div>
        
        <div className={styles.formButtons}>
            <Link to='/login'>Login</Link>
            <button type='submit'>SignUp</button>
        </div>


      </form>
      <ToastContainer/>
    </div>
  )
}

export default SignUp;