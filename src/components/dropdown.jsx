import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      if (isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = 1;
        content.style.transform = "translateY(0)";
      } else {
        content.style.maxHeight = "0px";
        content.style.opacity = 0;
        content.style.transform = "translateY(-10px)";
      }
    }
  }, [isOpen]);

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

      <div className="dropdown-content" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;



