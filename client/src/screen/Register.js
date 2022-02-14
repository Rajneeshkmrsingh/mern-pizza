import React, { useState } from 'react';
//import {useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { registeruser } from '../actions/userAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

const Register = () => {
    const [data,setData] =useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    });
    const dispatch= useDispatch();
    const registerState = useSelector((store)=>store.userRegisterReducer);
    const {loading,error,success}= registerState;
    console.log(loading,error,success)

    function change(e){
        const{value,name} = e.target;
        setData((preVal)=>{
            return {...preVal,[name]:value}
        })
    }
    function submit(e){
        e.preventDefault();
        const{name,email,password,cpassword} =data;
        if(password !==cpassword){
            alert("Passwords are not matching")
        }
        else{
            const user= {name,email,password,cpassword};
            dispatch(registeruser(user))
            
           /*  navigate("/") */
        }
    }
    return (
        <>
            <div className="register container mx-auto">
                <div className="row justify-content-center mx-5">
                    <div className="col-md-6 px-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1 className='text-center registerHeader'>Registeration</h1>
                    <h4 className='text-center'>{loading?<Loading/>:error?<Error error="Registeration failed"/>:success?<Success success="Registeration successfull"/>:""}</h4>
                        <form onSubmit={submit}>
                            <input type="text" placeholder='Name' className='form-control my-3' name="name" onChange={change} value={data.name} required/>
                            <input type="text" placeholder='Email' className='form-control my-3'name = "email" onChange={change} value={data.email} required/>
                            <input type="text" placeholder='Password' className='form-control my-3' name="password" onChange={change} value={data.password} required/>
                            <input type="text" placeholder='Confirm Password' className='form-control my-3' name="cpassword" onChange={change} value={data.cpassword} required/>
                            <button className='formBtn'>Submit</button><br />
                            <a href="/login" className='formLink'>Click here to login</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;