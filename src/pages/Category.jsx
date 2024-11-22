import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import OurTeam from "../components/OurTeam";
import Success from "../components/Success";
import Banner from "../layout/Banner";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <section>
        <div>
          <h1 className="text-center text-4xl my-10 font-extrabold">
            Get Our Best Services
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.map((singleCard) => (
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  className="h-64 w-full object-cover"
                  src={singleCard.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{singleCard.service_name}</h2>
                <p>{singleCard.description}</p>
                <p className="">Session Category: {singleCard.category}</p>
                <p className="">Counselor Name: {singleCard.counselor}</p>
                <p className="text-base font-semibold">
                  Per Session: {singleCard.pricing}
                </p>
                <div className="card-actions justify-end">
                  <NavLink to={`/details/${singleCard.id}`}>
                    <button className="btn w-full">View Details</button>
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <OurTeam></OurTeam>
      <Success></Success>
    </div>
  );
};

export default Category;
