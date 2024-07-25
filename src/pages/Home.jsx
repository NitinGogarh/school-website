import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import Programmes from './Programmes';

const placeholderImage = 'https://via.placeholder.com/800x400?text=Placeholder+Image';

function Home() {
  return (
    <div className="min-h-screen flex flex-col  pt-20 bg-background2" >
      <div className="container mx-auto p-4 flex-grow text-white min-w-full">


        <div className="caption">
        <h6>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</h6>
        <h2><em>Springdale</em> Public School</h2>
        <h6>New Delhi, India</h6>     
        </div>

        
        <div className="carousel mt-4">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <img src="path/to/image1.jpg" onError={(e) => e.target.src = placeholderImage} alt="Slide 1" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="path/to/image2.jpg" onError={(e) => e.target.src = placeholderImage} alt="Slide 2" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="path/to/image3.jpg" onError={(e) => e.target.src = placeholderImage} alt="Slide 3" className="w-full h-96 object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
