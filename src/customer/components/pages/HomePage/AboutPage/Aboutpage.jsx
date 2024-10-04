import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function About() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">About Nexus</h2>
          <p className="mt-4 text-lg text-gray-600">
            Nexus is a platform dedicated to providing high-quality courses to learners around the world. Our mission is to
            bridge the gap between passionate educators and eager students by offering accessible, engaging, and relevant
            learning experiences.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 text-center border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-3 text-base text-gray-600">
              To empower individuals by providing transformative learning opportunities that cater to various interests and skill levels.
            </p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Why Nexus?</h3>
            <p className="mt-3 text-base text-gray-600">
              We offer a wide range of courses curated by industry experts, ensuring you gain practical skills that you can
              immediately apply.
            </p>
          </div>

          <div className="p-6 text-center border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">Join Us</h3>
            <p className="mt-3 text-base text-gray-600">
              Be a part of a growing community of learners and educators striving to make knowledge accessible and impactful for everyone.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Our Values</h3>
          <ul className="mt-6 text-lg text-gray-600 space-y-3">
            <li>💡 Innovation in learning</li>
            <li>🎓 Commitment to quality education</li>
            <li>🌍 Inclusivity and accessibility</li>
            <li>💼 Real-world skills for real-world success</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            At Nexus, we're more than just a learning platform—we're a community of curious minds eager to grow. Whether you're a
            student looking to learn something new or an educator wanting to share your knowledge, Nexus is the place for you.
          </p>
        </div>

        {/* Our Students in Top Companies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center">Our Students in Top Companies</h3>
          <p className="mt-4 text-lg text-gray-600 text-center">
            Our graduates have gone on to work at some of the top companies in the world. Here are a few:
          </p>

          <div className="mt-8 flex justify-center space-x-8">
            <GoogleIcon/>
            <FacebookIcon/>
            <MicrosoftIcon/>
            <InstagramIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
