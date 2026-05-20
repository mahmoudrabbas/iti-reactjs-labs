import React from "react";

const ButtonComponent = ({ color, name, onClick }) => {
  return (
    <button 
      className={`btn btn-outline-${color} custom-btn`} 
    >
      {name}
    </button>
  );
};

export default ButtonComponent;