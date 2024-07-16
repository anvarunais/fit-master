
// AccordionItem.js

import React, { useState } from "react";
import "./Accordionitem.css"; // Import your updated styles

function Accordionitem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        <h5>{title}</h5>
        <span className={isOpen ? "icon-open" : "icon-closed"}></span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordionitem;

