import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { div } from 'framer-motion/client';

// Placeholder in case no image is given
const placeholderImg = "https://via.placeholder.com/150";

// Student Testimonials Data
const studentTestimonials = [
  { name: 'Sarah Achieng', role: 'Software Engineer', text: 'SkillBridge helped me land a great job after graduation.', img: 'src/assets/profile1.jpg' },
  { name: 'James Okello', role: 'Frontend Developer', text: 'The mentorship and career guidance were top-notch.', img: 'src/assets/profile2.jpg' },
  { name: 'Maria Nanyonga', role: 'Data Analyst', text: 'I gained the skills and confidence to pursue my dream career.', img: 'src/assets/profile3.jpg' },
];

// Employer Testimonials Data
const employerTestimonials = [
  { name: 'TechCorp Ltd', role: 'HR Manager', text: 'We found highly skilled interns who added value from day one.', img: 'src/assets/profile4.jpg' },
  { name: 'Innovate Uganda', role: 'CEO', text: 'SkillBridge connects us with the right talent quickly.', img: 'src/assets/profile5.jpg' },
  { name: 'Future Solutions', role: 'Team Lead', text: 'The candidates from SkillBridge exceeded our expectations.', img: 'src/assets/profile6.jpg' },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-100 py-16 flex flex-col items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 6.75V5.25A2.25 2.25 0 0112 3h0a2.25 2.25 0 012.25 2.25v1.5M4.5 9.75h15M6 9.75V18a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 18V9.75" />
        </svg>
        <span className="text-3xl font-bold text-gray-800">SkillBridge</span>
      </div>

      {/* Student Testimonials */}
      <h2 className="text-3xl font-semibold mb-6">Student Testimonials</h2>
      <div className="flex justify-center mx-10 gap-6">
        {studentTestimonials.map((t, idx) => (
          <div key={idx} className="flex justify-center">
            <div className="bg-white  p-8 rounded-2xl shadow-xl/30 flex flex-col items-center text-center w-full max-w-sm">
               <div className="flex gap-5">
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
          </div>
        ))}
      </div>

      {/* Employer Testimonials */}
      <div className="w-full bg-gray-200 py-12 mt-12 ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Employer Testimonials</h2>
        <div className="flex justify-center mx-10 gap-6">

          {employerTestimonials.map((t, idx) => (
            <div className="">
              <div key={idx} className="">
                <div className="bg-white  p-8 rounded-2xl shadow-xl/30 flex flex-col items-center text-center w-full max-w-sm">
                  <div className="flex gap-5">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
