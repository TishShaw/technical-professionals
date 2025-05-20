import './Banner.css';
import companyvideo from '../../images/TechCompanyVideo.mp4';

const Banner = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex justify-center items-center m-auto w-full h-[210px] shadow-md bg-gray-300 top-0">
        <h1 className="banner-title text-2xl md:text-4xl">
          Maryland-Based Technical Solutions Company
        </h1>
      </div>

      {/* Video Section */}
      <div className="bg-red-500 h-[500px] w-full relative">
        {/* Video Element */}
        <video
          src={companyvideo}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Overlay Content (Optional) */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
          {/* Example text over video */}
          <h2 className="text-3xl font-bold">Innovative Solutions for the Future</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;

