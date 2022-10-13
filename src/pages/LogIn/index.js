import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContex";
import Logo from '../../images/1.svg'
import { useNavigate } from "react-router-dom"


const LogIn = (props)=>{

    const {logInUser, signInWithPopupGoogle, user} = useContext(UserContext)
    const navegate = useNavigate()
    const [data, setData]= React.useState({});
    
    const handleForm =(e)=>{
        setData((prevValue)=>{
            return{
                ...prevValue,
                [e.target.name]:e.target.value
            }
        })
    }

    const handleLogIn = async ()=>{
        try{
            await logInUser(data.email, data.password)
            navegate('/')
        }catch (error){
            console.log('Este email ya está registrado')
        }
    }

    const handleGoogleLogIn = async()=>{
        try{
            await signInWithPopupGoogle()
            navegate('/')

        }catch(err){
            alert(err)
        }
    }
   
    if(user) return (navegate('/micuenta'))

    return(
        <div className="registration mb-96 mt-24 ">
            <div className="form">
                <img className ='form--logo'src={Logo}></img>
                <h2 className="form--title font-bold">LogIn</h2>
                <input
                    name='email'
                    placeholder="Email"
                    onChange={(e)=>handleForm(e)}
                    className='form--input'
                />
                <input
                    name='password'
                    placeholder="Password"
                    onChange={(e)=>handleForm(e)}
                    className='form--input'
                    type='password'
        
                />
                <div className="form--buttonContainer">
                    <button onClick={handleLogIn} className='form--button bg-gray-100' type="button"> LogIn</button>
                </div>
                <div className="form--buttonContainer">
                    <button onClick={handleGoogleLogIn} className='form--button bg-gray-100' type="button"> LogIn with Google</button>
                </div>
                
                
                
            </div>
       
           
        
        </div>
    )

}


export default LogIn
