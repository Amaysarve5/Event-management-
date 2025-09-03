import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16"
    ><div className="flex flex-col gap-5 justify-center items-center mb-20 mt-10"><h1 className="font-bold text-6xl text-center">About Us</h1>
        <p className="text-centre w-150 text-24 font-semibold">We are one of the leading Event Management & Wedding Planning companies in India. We are Event Plus and we celebrate your love, romance, success, money, health & wellbeing. By organizing powerful & unforgettable celebrations & events. We create your D-day, the best day and the best memory ever!</p>
        <img src="https://t4.ftcdn.net/jpg/13/55/14/25/360_F_1355142512_2VhTIyZCEyJjnUjPYMRD5GtCgG5KKPNb.jpg" alt="" /></div>
        
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div>
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
            Driven By A Good Vision
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our vision is to establish ourselves as the foremost event management
            company in India, dedicated to crafting experiences that etch cherished
            memories into the tapestry of your life. We aspire to create impactful
            and transformational events that not only celebrate your success but
            also translate it into tangible value.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Our commitment is to consistently meet and exceed your expectations,
            fueled by a combination of excellent ideas and flawless execution. We
            envision a future where every event we undertake becomes a milestone
            in your journey, leaving an indelible mark on your memory lane that
            lasts a lifetime.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://eventsmanagementkerala.com/wp-content/uploads/2023/05/bunch-flowers-leaves-table.webp"
            alt="About us"
            className="rounded-xl shadow-lg object-cover w-full max-h-[500px]"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* left Image */}
        <div className="flex justify-center mt-30">
          <img
            src="https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/bdfe74e5-e721-4bf7-ae29-ece7970cd598/20210915-114710-OVATION-02995.jpg"  
            alt="About us"
            className="rounded-xl shadow-lg object-cover w-full max-h-[500px]"
          />
        </div>
        {/* right Content */}
        <div>
          <span className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-4 mb-6">
           What We Do?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
           We specialize in creating award-winning events, positioning ourselves among the top event planning companies in the country. As your comprehensive event planner, we serve as your go-to resource for all your significant occasions. Our approach involves starting from scratch, meticulously crafting a unique blueprint tailored to your specific needs. With our unwavering commitment, we provide 24/7 assistance to ensure every detail is seamlessly executed. Our overarching mission is to transform your dream into a reality, making your aspirations our guiding purpose in every event we undertake
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
