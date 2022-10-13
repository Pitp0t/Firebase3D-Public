import React from "react";
// import { getAuth,  GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import Logo from '../images/1.svg'



export default function Form(){

    const [data, setData]= React.useState({});

    const handleForm =(e)=>{
        setData((prevValue)=>{
            return{
                ...prevValue,
                [e.target.name]:e.target.value
            }
        })
    }

    return(
        <div className="form">
            <img className ='form--logo'src={Logo}></img>
            <h2 className="form--title">Sign Up</h2>
            <input
                name='email'
                placeholder="email"
                onChange={(e)=>handleForm(e)}
                className='form--input'
            />
            <input
                name='password'
                placeholder="password"
                onChange={(e)=>handleForm(e)}
                className='form--input'
                type='password'

            />
            <div className="form--buttonContainer">
                <button className='form--button' type="submit"> Submit</button>
                <button className='form--button'  type="submit"> Sign Up Whit google</button>
            </div>
        </div>
    )
}