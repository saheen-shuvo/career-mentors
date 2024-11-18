import React from "react";

const Success = () => {
  return (
    <div className="flex justify-center flex-col my-10">
        <h1 className="text-center text-4xl font-extrabold mb-10">Our Counselling Stats</h1>
        <div className="flex flex-col lg:flex-row justify-center mx-auto stats-vertical lg:stats-horizontal shadow w-[60%]">
      <div className="stat">
        <div className="stat-title">Session Booked</div>
        <div className="stat-value">1209</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title">Job Secured</div>
        <div className="stat-value">974</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-title">New Registered Clients</div>
        <div className="stat-value">368</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
    </div>
  );
};

export default Success;
