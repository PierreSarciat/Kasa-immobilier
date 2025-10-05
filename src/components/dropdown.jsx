import React, { useState } from "react";
import "./dropdown.scss";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
