import React from "react";

const Error = ({error}) => {
  return (
    <>
      <div className="alert alert-danger text-center" role="alert" style={{fontSize:"18px"}}>
        {error}
      </div>
    </>
  );
};

export default Error;
