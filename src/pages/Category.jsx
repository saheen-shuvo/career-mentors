import { useEffect, useState } from "react";


const Category = () => {
    const [category, setCategory] = useState([]);
    console.log(category.length)

    useEffect(() => {
        fetch("../../public/data.json")
          .then((res) => res.json())
          .then((data) => {
            setCategory(data);
      });
      }, []);
    return (
        <section>
            <div>
                <h1 className="text-center text-4xl my-10 font-extrabold">Get Our Best Services</h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {
                category.map((singleCard) =><div className="card card-compact bg-base-100 shadow-xl">
                <figure>
                  <img className="h-64 w-full object-cover"
                    src={singleCard.image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{singleCard.service_name}</h2>
                  <p>{singleCard.description}</p>
                  <p className="text-lg font-semibold">Per Session: {singleCard.pricing}</p>
                  <div className="card-actions justify-end">
                    <button className="btn w-full">View Details</button>
                  </div>
                </div>
              </div> )
            }
        </div>
        </section>
    );
};

export default Category;
// news.map((singleNews) => (
//     <NewsCard key={singleNews._id} news={singleNews}></NewsCard>