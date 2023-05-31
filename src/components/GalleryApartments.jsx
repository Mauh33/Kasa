import React, { useContext } from "react";
import { DataContext } from "../utils/hooks/DataContext";
import { NavLink } from "react-router-dom";

const GalleryApartments = () => {
  const jsonData = useContext(DataContext);

  return (
    <div className='Gallery'>
      {jsonData.map((item, i) => (
        <div className='card' key={i}>
          <h2>{item.title}</h2>
          <div className='linear-card'>
            <NavLink
              to={`/Apartment/${item.id.replace(/\s+/g, "-")}`}
              activeclassname='active'
            >
              <img src={item.cover} alt='' />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryApartments;
