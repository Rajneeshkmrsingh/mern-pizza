import React from "react";

const Success = ({success}) => {
  return (
    <>
      <div className="alert alert-success" role="alert" style={{fontSize:"18px"}}>
        {success}
      </div>
    </>
  );
};

export default Success;
