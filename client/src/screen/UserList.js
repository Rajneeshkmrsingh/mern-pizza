import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteUsers, getAllUsers} from "../actions/userAction";
import Loading from "../components/Loading";
import Error from "../components/Error";

const UserList = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    const userState = useSelector(store=>store.getAllUsersReducer);
    const{loading,users,error}=userState
    console.log(loading,users,error)
    return (
        <div>
            <div className="row justify-content-center">
        <h1
          style={{
            fontSize: "30px",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          User List
        </h1>
        {loading && (
          <div className="text-center">
            <Loading />
          </div>
        )}
        {error && <Error error="There is some error." />}
        <div className="col-md-12 table-responsive-sm">
          <table className="table table-responsive-sm">
            <thead className="table-dark">
              <tr className="table-bordered">
                <td>User Id</td>
                <td>Name </td>
                <td>Email </td>
                <td>Delete</td>
                
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((users, id) => {
                  return (
                    <>
                      <tr key={id}>
                        <td>{users._id}</td>
                        <td>{users.name}</td>
                        <td>{users.email}</td>
                        <td><span className="fa fa-trash"onClick={()=>dispatch(deleteUsers(users._id))}/></td>
                        
                        
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
        </div>
    );
};

export default UserList;