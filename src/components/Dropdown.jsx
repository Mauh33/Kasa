import React from "react";
import ConditionsData from "../datas/conditionsData";
import ArrowBack from "../assets/icons/arrow_back.png";
import { useState } from "react";

const Dropdown = () => {
  const [selected, setSelected] = useState([]);

  const toggle = i => {
    setSelected(prevState => {
      const updatedItems = [...prevState];
      updatedItems[i] = !updatedItems[i];
      return updatedItems;
    });
  };
  return (
    <div className='collapse-bloc'>
      {ConditionsData.map((item, i) => (
        <div className='collapse-toggle' key={i}>
          <div className='title-conditions'>
            <p>{item.value}</p>
            <div onClick={() => toggle(i)}>
              <img
                src={ArrowBack}
                alt=''
                className={selected[i] === i ? "toggle-open" : "toggle-close"}
              />
            </div>
          </div>
          <div
            className={
              selected[i]
                ? "collapse-description-active"
                : "collapse-description"
            }
          >
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
