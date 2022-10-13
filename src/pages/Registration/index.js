import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContex";
import Logo from '../../images/1.svg'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"


const Register = (props)=>{

    const {registerUser} = useContext(UserContext)
    const { register, handleSubmit, watch,getValues, formState: { errors } } = useForm();
    
    const navegate = useNavigate()

    const onSubmit = async (data)=>{
        try{
            await registerUser(data.email, data.password)
            navegate('/')
        }catch (error){
            if(error.code = 'auth/email-already-in-use') alert('Error usuario ya registrado!')
        }
        

    }

    return(
        <div className="mb-96 mt-24">
            {errors.email && <div className="alert alert-error shadow-lg my-1">
                <div>
                    <svg  className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errors.email.message}</span>
                </div>
            </div>}

            {errors.password && <div className="alert alert-error shadow-lg my-1">
                <div>
                    <svg  className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errors.password.message}</span>
                </div>
            </div>}

            {errors.password2 && <div className="alert alert-error shadow-lg my-1">
                <div>
                    <svg  className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{errors.password2.message}</span>
                </div>
            </div>}
       
            <div className="registration">
            
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <img className ='form--logo 'src={Logo}></img>
                    <h2 className="form--title font-bold ">Register</h2>
                    <input
                        name='email'
                        placeholder="Email"
                        {...register("email",{ 
                            required: {
                                value:true,
                                message:'Campo olbigatorio'
                            },
                            pattern:{
                                value :/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message:'Mail invalido'}
                            }
                        )}
                        className='form--input  border'
                    />
                    <input
                        name='password'
                        placeholder="Password"
                        {...register("password", { 
                            required: true, 
                            minLength: {value:6, message:'Mínimo 6 caracteres'},
                            validate: {
                                eliminateWhiteSpace: (v) => v === v.replace(/^\s+|\s+$|\s+(?=\s)/g, "") || 'Password con whitespace'
                            }
                        
                        })}
                        className='form--input border'
                        type='password'
                    />
                    <input
                        name='password2'
                        placeholder="Repeat password"
                        {...register("password2",{ 
                            required: {
                                value:true,
                                message:'Campo olbigatorio'
                            },
                            validate: {
                                equal: (v) => v === getValues('password') || 'Password mal escrita'
                            }
                        })}
                        
                        className='form--input border'
                        type='password'
                    />
                    <div className="form--buttonContainer">
                        <button  className='form--button bg-gray-100' type="submit"> Register</button>
                    </div>
               
                </form>
            </div>

        </div>
    )

}




export default Register