import React, { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../../context/AuthContex";
import BarChart from "../../components/BarChart";
import useFirestore from "../../hooks/useFirestore";
import ModeloIndividual from "../../components/Models";
import ModeloProfile from "../../components/ModelProfile";



export default function Micuenta (){
    const{handleFile,userModelsData, userModelData,error,loading,deleteModel,getUserModelData,renderDataStorage,modelTestData } = useFirestore()
    const {userName, userPhoto}= useContext(UserContext)
    
    const [modelData, setModelData]=React.useState({})

    const inputName = useRef()
    const inputDescription = useRef()
    const inputPrice = useRef()




    useEffect(()=>{
        console.log('OBTENIENDO USER INFO')
        console.log(modelTestData)
        getUserModelData()
        renderDataStorage()
    },[modelTestData])



    const handleInput = (e)=>{
        const file = e.target.files[0]
        handleFile(file)
    }

    const handleSubmitFile = (e)=>{
        e.preventDefault()
    }

    const handleChange=(e)=>{
        setModelData((prevData)=>{
            return{
                ...prevData,
                [e.target.name]:e.target.value
            }
        })
    }



    const handleDataSumbit=async(e)=>{
        e.preventDefault()
        await userModelsData(modelData)
        inputName.current.value=''
        inputDescription.current.value=''
        inputPrice.current.value=''
        getUserModelData()
        setModelData({})
    }


    
    const handleDelete=async (e)=>{
        const idInput =  e.target.id
        await deleteModel(idInput)
        await getUserModelData()

    }



    const userModelsDetails = userModelData.map((valor)=>{
        return (
            <div key={valor.id}className="flex flex-col gap-5">
                <input type="button" onClick={handleDelete} id={valor.modelid} className="btn btn-circle btn-outline text-center w-12 H-12 m-auto text-4xl rotate-45" value="+">
                </input>
                <ModeloProfile src ={modelTestData} key={valor.id} price = {valor.data.price} name={valor.data.name} description={valor.data.description}></ModeloProfile>
            </div>
        )
    })
  

    
    return(
        <>
            <div>
                <div className="micuenta font-bold text-3xl">  
                    {userPhoto && <img className="userPhotoProfile" src={userPhoto}></img>}
                    <h2 className="userName text-black"> Welcome {userName}</h2>
                </div>
                <BarChart />
            </div>
            {/* <div className="flex flex-col my-60 justify-center items-center ">
                <h2 className="font-bold text-3xl">UPLOAD YOUR FILES!</h2>
                <form onSubmit={handleSubmitFile} className='mx-auto'>
                    <input onChange={handleInput} type='file' accept='.png,.jpg,.jpeg,.webp' className="cursor-pointer"></input>
                    <button className="button-2 bg-gray-100 p-3 rounded-xl font-normal">Add file</button>
                </form>
            </div> */}

            <div className="flex flex-col my-16 justify-center items-center max-w-screen-2xl mx-auto">
                <h2 className="font-bold text-3xl">UPLOAD YOUR 3D MODELS DATA</h2>
                <form onSubmit={handleDataSumbit} className='mx-auto flex flex-col w-3/4 gap-2'>
                    <input
                        ref={inputName}
                        type='text'
                        name='name'
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        className='form--input  border p-2'
                    />
                    <input
                        ref={inputDescription}
                        type='text'
                        name='description'
                        placeholder="Description"
                        required
                        onChange={handleChange}
                        className='form--input  border p-2'
                    />
                    <input
                        ref={inputPrice}
                        type='number'
                        name='price'
                        required
                        placeholder="Price"
                        onChange={handleChange}
                        className='form--input  border p-2'
                    />

                    <button type='submit' className="button-2 loading bg-gray-100 p-3 rounded-xl font-normal">Add model data</button>
                    {loading.addData && <button className="btn loading">loading</button>}
                    {loading.deleteModel && <button className="btn loading">loading</button>}
                </form>
            </div>
            <div className="my-60">
                <h1 className="text-center text-4xl font-bold my">These are the users models! ;)</h1>
                <div className="abuelo">
                    {userModelsDetails}
                </div>
            </div>
            
        </>
    )
}