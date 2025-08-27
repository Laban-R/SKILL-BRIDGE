import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { BriefcaseBusiness } from "lucide-react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images properly
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';
import profile5 from '../assets/profile5.jpg';
import profile6 from '../assets/profile6.jpg';

// Placeholder in case no image is given
const placeholderImg = "https://via.placeholder.com/150";

// Student Testimonials Data
const studentTestimonials = [
  { name: 'Sarah Achieng', role: 'Software Engineer', text: 'SkillBridge helped me land a great job after graduation.', img: profile1 },
  { name: 'James Okello', role: 'Frontend Developer', text: 'The mentorship and career guidance were top-notch.', img: profile2 },
  { name: 'Maria Nanyonga', role: 'Data Analyst', text: 'I gained the skills and confidence to pursue my dream career.', img: profile3 },
];

// Employer Testimonials Data
const employerTestimonials = [
  { name: 'TechCorp Ltd', role: 'HR Manager', text: 'We found highly skilled interns who added value from day one.', img: profile4 },
  { name: 'Innovate Uganda', role: 'CEO', text: 'SkillBridge connects us with the right talent quickly.', img: profile5 },
  { name: 'Future Solutions', role: 'Team Lead', text: 'The candidates from SkillBridge exceeded our expectations.', img: profile6 },
];

export default function Testimonials() {
  const renderCard = (t) => (
    <div className="bg-white p-8 rounded-2xl shadow-xl/30 flex flex-col items-center text-center w-full max-w-sm mx-auto">
      <div className="flex gap-5 items-center">
        <img
          src={t.img || placeholderImg}
          alt={t.name}
          className="w-20 h-20 rounded-full mb-4 object-cover"
        />
        <div>
          <h4 className="font-bold">{t.name}</h4>
          <p className="italic">{t.role}</p>
        </div>
      </div>
      <p className="mt-2">{t.text}</p>
    </div>
  );

  return (
    <section className="w-full bg-gray-100 py-16 flex flex-col items-center">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-10">
        <BriefcaseBusiness className="w-6 h-6 text-blue-600" />
        <span className="text-3xl font-bold text-gray-800">SkillBridge</span>
      </div>

      {/* Student Testimonials Carousel */}
      <h2 className="text-3xl font-semibold mb-6">Student Testimonials</h2>
      <div className="relative w-full px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            nextEl: '.student-next',
            prevEl: '.student-prev',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {studentTestimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              {renderCard(t)}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        <button className="employer-prev absolute top-1/2 -left-6 -translate-y-1/2 z-10 bg-blue-200 hover:bg-blue-400 text-gray-700 font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center transition">
          ‹
        </button>
        <button className="employer-next absolute top-1/2 -right-6 -translate-y-1/2 z-10 bg-blue-200 hover:bg-blue-400 text-gray-700 font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center transition">
          ›
        </button>
      </div>

      {/* Employer Testimonials Carousel */}
      <div className="w-full bg-gray-200 py-12 mt-12 relative">
        <h2 className="text-3xl font-semibold mb-6 text-center">Employer Testimonials</h2>
        <div className="relative w-full px-6">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            navigation={{
              nextEl: '.employer-next',
              prevEl: '.employer-prev',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {employerTestimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                {renderCard(t)}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <button className="employer-prev absolute top-1/2 -left-6 -translate-y-1/2 z-10 bg-blue-200 hover:bg-blue-400 text-gray-700 font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center transition">
            ‹
          </button>
          <button className="employer-next absolute top-1/2 -right-6 -translate-y-1/2 z-10 bg-blue-200 hover:bg-blue-400 text-gray-700 font-bold text-3xl rounded-full w-10 h-10 flex items-center justify-center transition">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
