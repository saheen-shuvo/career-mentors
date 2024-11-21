import React from "react";
import counsellor1 from "../assets/counsellor1.jpg"
import counsellor2 from "../assets/counsellor2.jpg"
import counsellor3 from "../assets/counsellor3.jpg"
import { NavLink } from "react-router-dom";

const OurTeam = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center my-10">
        Meet Our Best Counsellor
      </h1>
      <div className="flex flex-col gap-2 lg:flex-row lg:w-3/4 mx-auto">
      {/* Card1 */}
        <div className="card bg-base-100 shadow-xl w-full">
          <figure className="px-10 pt-10">
            <img
              src={counsellor3}
              alt="Shoes"
              className="rounded-xl  h-[250px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">John Doe</h2>
            <p>Get expert advice on career planning, job search strategies, and professional growth.</p>
            <div className="card-actions">
            <NavLink to="https://www.facebook.com/saheen.alam.shuvo.2024?mibextid=LQQJ4d"><button className="btn btn-primary">Contact Now</button></NavLink>
            </div>
          </div>
        </div>
        {/* Card2 */}
        <div className="card bg-base-100 shadow-xl w-full">
          <figure className="px-10 pt-10">
            <img
              src={counsellor1}
              alt="Shoes"
              className="rounded-xl h-[250px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Emily Davis</h2>
            <p>Enhance your LinkedIn profile to attract more recruiters and stand out in your professional network.</p>
            <div className="card-actions">
            <NavLink to="https://www.facebook.com/saheen.alam.shuvo.2024?mibextid=LQQJ4d"><button className="btn btn-primary">Contact Now</button></NavLink>
            </div>
          </div>
        </div>
        {/* Card3 */}
        <div className="card bg-base-100 shadow-xl w-full">
          <figure className="px-10 pt-10">
            <img
              src={counsellor2}
              alt="Shoes"
              className="rounded-xl h-[250px] object-cover"
            />
          </figure>
          <div data-aos="fade-right" className="card-body items-center text-center">
            <h2 className="card-title">Sarah Williams</h2>
            <p>Get customized strategies to advance your career, navigate transitions, and align your skills with market needs.</p>
            <div className="card-actions">
              <NavLink to="https://www.facebook.com/saheen.alam.shuvo.2024?mibextid=LQQJ4d"><button className="btn btn-primary">Contact Now</button></NavLink>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurTeam;
