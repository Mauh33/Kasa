import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { DataContext } from "../utils/hooks/DataContext";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import RatingStar from "../assets/icons/star-active.png";

const Apartment = () => {
  const jsonData = useContext(DataContext);
  const { id } = useParams();

  const filteredData = jsonData.filter(item => item.id === id);
  const filteredDataWithTags = filteredData.reduce((acc, item) => {
    const filteredItem = { id: item.id };

    for (const key in item) {
      if (key === "tags") {
        filteredItem[key] = item[key];
        break;
      }
      if (key === "id") {
        continue;
      }
      filteredItem[key] = item[key];
    }

    acc.push(filteredItem);
    return acc;
  }, []);

  const pictures =
    filteredDataWithTags.length > 0 ? filteredDataWithTags[0].pictures : [];

  const stars = <img src={RatingStar} alt='rating-stars' />;
  const range = [1, 2, 3, 4, 5];

  return (
    <div className='page'>
      <Header />
      <main className='main-Apartment'>
        <Carousel pictures={pictures} />
        <section className='section__Apartment'>
          <div className='apartment-block'>
            {filteredDataWithTags.map((item, i) => (
              <div key={i}>
                <h1>{item.title}</h1>
                <div>
                  <p>{item.location}</p>
                </div>
                <div>
                  {range.map(rangeElem =>
                    item >= rangeElem ? (
                      <span key={rangeElem.toString()}>{stars}</span>
                    ) : null
                  )}
                </div>
                <div>{item.rating}</div>
              </div>
            ))}
            <div>
              <Dropdown
                data={filteredDataWithTags}
                showDescription={true}
                showEquipments={false}
              />
              <Dropdown
                data={filteredDataWithTags}
                showDescription={false}
                showEquipments={true}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Apartment;

/* {range.map((rangeElem) =>
  item >= rangeElem ? (
    <span key={rangeElem.toString()}>{}</span>
    ) : null
    )} */

/*  const title =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].title : "";

    const location =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].location : "";

    const tags =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].tags : [];

    const rating =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].rating : [];

    const hostName =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].host[0] : [];

    const hostPicture =
      filteredDataWithTags.length > 0 ? filteredDataWithTags[0].host[1] : [];
    */
