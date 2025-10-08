import React, { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src="/VectorF.png"  
          alt="icône du menu"
          className="dropdown-icon"
        />
      </button>

      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;


