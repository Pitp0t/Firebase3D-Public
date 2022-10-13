import React, { useEffect } from "react";
import { auth, database, storage } from "../fireBaseConfig";
import { doc,collection, getDocs, setDoc, deleteDoc, where,query} from "firebase/firestore";
import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";



export default function useFirestore ( ){
    
    const [modelData, setModelData]= React.useState([])
    const [userModelData, setUserModelData]= React.useState([])
    const[modelTestData,setModelTestData] =React.useState()
    const [error,setEror] =React.useState()
    const [loading,setLoading]=React.useState({})

    
    const getModelsData = async ()=>{
        try{
            setLoading({...loading,getData:true})
            const modelsRef = collection(database, "models")
            const querySnapshot = await getDocs(modelsRef);
            setModelData(querySnapshot.docs.map((doc)=>{
                return{
                    modelid: doc.id,
                    data: doc.data()
                }     
            }))
        }
        catch(error){
            console.log(error)
            setEror(error.message)
        }
        finally{
            setLoading({...loading,getData:false})

        }
        
    }
  
    const getUserModelData = async( )=>{
        try{
            setLoading({...loading,getUserData:true})
            const userModelsRef = query(collection(database, "userModels"), where("uid", "==", auth.currentUser.uid));
            const querySnapshot = await getDocs(userModelsRef);
            
            setUserModelData(querySnapshot.docs.map((doc)=>{
                return{
                    modelid: doc.id,
                    data: doc.data()
                }     
            }))

        }catch(error){
            console.log(error)
            setEror(error.message)
        }
        finally{
            setLoading({...loading,getUserData:false})
        }

    }



    const renderDataStorage = async()=>{
        try{
            await getDownloadURL(ref(storage, '/productos/silla1.glb'))
            .then((url) => {
                setModelTestData(url)
            })
        } 
        catch(error){
            console.log(error.message)
        }
    }


    
    const userModelsData = async (data)=>{
        try{
            const dataAndUid = {...data,uid:auth.currentUser.uid}
            setLoading({...loading,addData:true})
            await setDoc(doc(database, "userModels", nanoid()), dataAndUid);
        }catch(error){
            console.log(error)
            setEror(error.message)
        }
        finally{
            setLoading({...loading,addData:false})
        }

    }
    
    
    const deleteModel = async(id)=>{
        try{
            setLoading({...loading,deleteModel:true})
            await deleteDoc(doc(database, "userModels", id));
            setUserModelData((prev)=>prev.filter((valor)=>valor.modelid))
        }catch(error){
            console.log(error)
            setEror(error.message)
        }
        finally{
            setLoading({...loading,deleteModel:false})
        }

    }



    const handleFile = async(file)=>{
        const imagesRef = ref(storage, `userModels/${auth.currentUser.uid}/`);
        await uploadBytes(imagesRef, file).then((snapshot) => {
            console.log(imagesRef.fullPath)
            console.log('Uploaded a File');
        });
    }



 
    






    return{
        modelData,
        error,
        loading,
        getModelsData,
        handleFile,
        userModelsData,
        userModelData,
        deleteModel,
        getUserModelData,
        renderDataStorage,
        modelTestData,
        

    }

}