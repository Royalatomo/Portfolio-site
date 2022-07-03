import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { AppWrapper } from "../../wrapper/";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testi, setTesti] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const brandsQuery = '*[_type == "brands"]';
    const testiQuery = '*[_type == "testimonials"]';
    client.fetch(brandsQuery).then((data) => setBrands(data || []));
    client.fetch(testiQuery).then((data) => setTesti(data || []));
  }, []);

  const handleClick = (index) => {
    console.log(index);
    setCurrentIndex(index);
  };

  const user = testi[currentIndex];
  return (
    <>
      {testi.length > 0 && (
        <>
          <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3, type: "tween" }}
            className="app__testimonial-item app__flex"
          >
            <img
              src={user.imageurl + "?tr=h-100,w-100,q-80"}
              alt="testimonial"
            />
            <div className="app__testimonial-content">
              <p className="p-text">{user.feedback}</p>
              <div>
                <h4 className="bold-text">{user.name}</h4>
                <h5 className="p-text">{user.company}</h5>
              </div>
            </div>
          </motion.div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? testi.length - 1 : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testi.length - 1 ? 0 : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(Testimonial, "testimonials");
