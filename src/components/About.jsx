import about from "../assets/about1.png";
const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`overflow-hidden flex items-center justify-center px-4 sm:px-6 py-12 lg:py-20`}
    >
      <div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2
        gap-8 sm:gap-12 items-center"
      >
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Image  */}
            <div
              className="absolute -inset-6 lg:-inset-4 bg-linear-to-l from-[#f97316] 
                via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src={about}
              alt="About Image"
              className="absolute inset-0 w-full h-full object-cover 
            z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4
                sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed
            bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl 
            sm:rounded-2xl backdrop-blur-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            A highly motivated third-year Software Engineering student
            specializing in Frontend Development, with hands-on experience in
            ReactJS and API integration. Eager to gain practical experience and
            contribute to real-world projects in a professional environment.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Education  */}
            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                +3
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Education
              </div>
            </div>
            {/* Year Experience   */}
            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="650"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                +0
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Year Experience
              </div>
            </div>
            {/* Project */}
            <div
              className="text-center "
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400">
                +3
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Project Completed
              </div>
            </div>
          </div>
          <button
            className={`w-full sm:w-auto inline-flex items-center justify-center 
            text-white bg-gradient-to-r from-orange-500 to-amber-500 border-0 py-3 px-6 
            sm:px-8 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg 
            font-semibold transition-all duration-300 transform `}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
