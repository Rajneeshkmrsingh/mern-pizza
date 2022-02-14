import React from "react";

const Loading = () => {
  return (
    <>
      <div className="spinner-border" style={{width:"100px",height:"100px"}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Loading;
