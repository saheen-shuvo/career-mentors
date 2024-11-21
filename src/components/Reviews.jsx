import { Helmet } from "react-helmet";
import client1 from "../assets/client1.jpg"
import client2 from "../assets/client2.jpg"
import client3 from "../assets/client3.jpg"

const Reviews = () => {
  return (
    <>
    <div>
    <Helmet>
    <title>Career Mentor's | Reviews</title>
    </Helmet>
      <div>
        <section class="mt-16 mb-16 px-2 lg:px-24 lg:mb-24">
          <h1 class="text-3xl font-bold text-center mb-14 poppins-font lg:text-5xl">Client's <span class="text-[#9fec42]">Reviews</span></h1>
           <div class="grid justify-center grid-rows-3  gap-9 lg:grid-rows-1 lg:grid-cols-3 ">
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img class="w-full"
                src={client1}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Stunning transformation, elegant design, and attention to every detail. Perfect!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Saheen Shuvo</h3>
                  <h3 class="text-center text-base font-medium">Student</h3>
                </div>
            </div>
          </div>
          <div class="card bg-base-100  shadow-xl">
            <figure>
              <img class="w-full"
                src={client2}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Exceptional design! Its luxurious, stylish, and cozy. Every detail was thoughtfully executed. Highly recommended!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Rehinna Swift</h3>
                  <h3 class="text-center text-base font-medium">Teacher</h3>
                </div>
            </div>
          </div>
          <div class="card bg-base-100 shadow-xl">
            <figure>
              <img class="w-full"
                src={client3}
                alt="Shoes" />
            </figure>
            <div class="card-body">
              <p class="text-center">"Beautifully crafted, modern design with a cozy feel. Exceeded expectations!"</p>
                <div class="rating mx-auto">
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-2"
                    class="mask mask-star-2 bg-orange-400"
                    checked="checked" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <div>
                  <h3 class="text-center text-lg font-semibold text-blue-500">Sophia Zemen</h3>
                  <h3 class="text-center text-base font-medium">Banker</h3>
                </div>
            </div>
          </div>
           </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default Reviews;
