import React, { useContext } from "react";
import { DataContext } from "../utils/hooks/DataContext";
// import AppartData from "../datas/apartmentDatas.json";

const GalleryApartments = () => {
  const { data } = useContext(DataContext);

  return (
    <div className='Gallery'>
      {data.map((item, i) => (
        <div className='card' key={i}>
          <h2>{item.title}</h2>
          <div className='linear-card'>
            <img src={item.cover} alt='' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryApartments;
