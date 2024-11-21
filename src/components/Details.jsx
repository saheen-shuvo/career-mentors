import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoStar } from "react-icons/io5";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("Here is data", data);
      });
  }, []);
  console.log(details);
  console.log("Params", id);

  const findDetail = details.find((detail) => detail?.id === id);

  console.log("Find details is here", findDetail);

  if (!findDetail) {
    return <div className="text-center py-10">Loading...</div>;
  }

  const handleFeedbackSubmit = () => {
    setSubmittedFeedback(feedback); 
    setFeedback("");
  };

  return(
  <div className="py-10">
    <div>
      <h1 className="text-4xl text-center font-extrabold pb-6">Counselling Details</h1>
    </div>
    <div className="bg-slate-300 flex flex-col md:flex-row lg:rounded-3xl">
      <img className="w-full lg:w-2/4 lg:rounded-l-3xl " src={findDetail.image} alt="" />
      <div className="py-6 lg:pt-6 flex flex-col justify-center">
        <h1 className="text-lg lg:text-2xl font-bold px-6">{findDetail.service_name}</h1>
        <h1 className="text-base px-6">Session Category: {findDetail.category}</h1>
        <p className="px-6">{findDetail.description}</p>
        <p className="px-6">Per Session: {findDetail.pricing}</p>
        <p className="px-6">Session Time: {findDetail.duration}</p>
        <p className="px-6">Counselor Name: {findDetail.counselor}</p>
        <p className="px-6 flex items-center gap-1">Service Rating: {findDetail.rating} <IoStar /></p>
        <p className="px-6">Experience: {findDetail.experience}</p>
        <div className="flex flex-col lg:flex-row gap-2 mx-6">
        <input type="text" placeholder="Comment Your Feedback" className="input input-bordered w-full" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        <button className="btn" onClick={handleFeedbackSubmit}>Feedback</button>
        </div>
        {submittedFeedback && (
            <p className="mt-4 px-6 text-black">
              You: <br /> {submittedFeedback}
            </p>
          )}
      </div>
    </div>

  </div>
)
};

export default Details;
