import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth"
import {auth} from '../fireBaseConfig'
import React from "react"


export const UserContext = React.createContext()




const UserProvider = (props)=>{

    const [cart, setCart] =React.useState()
    const [user,setUser] = React.useState(false)
    const [userPhoto, setUserPhoto] = React.useState()
    const [userName,setUserName]= React.useState(false)

    const[model, setModel] = React.useState()

    
    const userData = React.useEffect(()=>{
      onAuthStateChanged(auth, (user)=>{
        if(user){
            setUserName(user.displayName)
            setUser(user)
            setUserPhoto(user.photoURL)
        }
        else{
            setUser(null)
            setUserPhoto(null)

        }
    })

   }, [])



   
    
    
    const provider = new GoogleAuthProvider();

    const signInWithPopupGoogle = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // const user = result.user;
        }) .catch((error) => alert(error));

    }

    const registerUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(alert('Registrado Correctamente'))
        .catch((err)=>{
            if(err.code = 'auth/email-already-in-use') alert('Error email already in use')
        })
    }

    const logInUser = (email,password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Logeado Crrectamente')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(error)
        });

    }

    const signOutUser = ()=>{
        signOut(auth).then(()=>{
            alert('Sesion cerrada')
        }).catch((error)=>alert(error))
    }
    
   





    return(
        <UserContext.Provider value={{cart, user, setUser,registerUser,logInUser, signInWithPopupGoogle, signOutUser,userPhoto, userName, model }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
