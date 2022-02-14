import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {loginuser} from "../actions/userAction";
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

const Login = () => {
         const [data,setData] =useState({
        email:"",
        password:"",
    });
    const dispatch = useDispatch();
    const userState = useSelector((store)=>store.userLoginReducer);
    const{loading,success,error} = userState;
    function change(e){
        const{value,name} = e.target;
        setData((preVal)=>{
            return {...preVal,[name]:value}
        })
    }
    function submit(e){
        e.preventDefault();
        const{email,password,} =data;
       const user = {email,password};
            
       dispatch(loginuser(user));
    }
    return (
        <>
            <div className="login container mx-auto">
                <div className="row justify-content-center mx-5">
                    <div className="col-md-6 px-5 shadow-lg p-3 mb-5 bg-white rounded">
                        <h1 className='text-center loginHeader'>Login</h1>
                        <h4 className='text-center'>{loading?<Loading/>:error?<Error error="Bad Credentials"/>:success?<Success success="Login successfull"/>:""}</h4>
                        <form onSubmit={submit}>
                            <input type="text" placeholder='Email' required className='form-control my-3'name = "email" onChange={change} value={data.email}/>
                            <input type="text" placeholder='Password' required className='form-control my-3' name="password" onChange={change} value={data.password}/>
                            <button className='formBtn'>Submit</button><br />
                            <a href="/register" className='formLink'>Click here to Register</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;