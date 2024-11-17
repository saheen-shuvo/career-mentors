import bannerImg1 from "../assets/Banner.jpg";
import bannerImg2 from "../assets/banner3.jpg";
import bannerImg3 from "../assets/banner2.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full mt-5">
      <div id="slide1" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg1} className="w-full object-cover opacity-60 " />
        <div className="absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3">
          <h1 className="text-center text-gray-800 text-5xl font-extrabold">
          Book a Personal Consultation
          </h1>
          <p className="text-center text-sm">
            Schedule a personalized consultation with our expert career advisors
            to discuss your goals, challenges, and opportunities. Get tailored
            guidance for your career growth.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg2} className="w-full object-cover opacity-60" />
        <div className="absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3">
          <h1 className="text-center text-gray-800 text-5xl font-extrabold">
            Get Your Resume Reviewed
          </h1>
          <p className="text-center text-sm">
            Receive professional feedback on your resume from experienced
            recruiters. Enhance your chances of landing your dream job with a
            polished, impactful resume.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[550px]">
        <img src={bannerImg3} className="w-full object-cover opacity-60" />
        <div className="absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-3">
      <h1 className="text-center text-gray-800 text-5xl font-extrabold">Achieve Your Dream Job</h1>
      <p className="text-center text-sm">Unlock the path to your ideal career with expert strategies, job search tips, and personalized advice. Let us guide you toward your dream job with confidence.</p>
      </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
