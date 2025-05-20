import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-2">
        Welcome to <strong>Technical Professionals, LLC</strong>, where we are dedicated to
        providing top-notch technology solutions tailored to your business needs.
        Our team is committed to innovation, quality, and customer satisfaction.
      </p>
      <p className="text-lg mb-6">
        At <strong>Technical Professionals, LLC</strong>, we believe in building strong
        relationships with our clients by offering personalized solutions that drive
        success.
      </p>
      
      <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
      <p className="text-lg"><strong>Technical Professionals, LLC</strong></p>
      <p className="text-lg">5029 Columbia Road, Ste 302<br />Columbia, MD 21044</p>
      <p className="text-lg">(443) 983-4541</p>
      <p className="text-lg">
        <a href="mailto:techprodivers@gmail.com" className="text-blue-500">techprodivers@gmail.com</a>
      </p>
      <p className="text-lg">
        <a href="http://www.technical-professionalsllc.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          www.technical-professionalsllc.com
        </a>
      </p>
      <p className="mt-4">We look forward to working with you! Feel free to call, email, or visit our website to learn more.</p>
      
      <form className="mt-6 flex flex-col gap-4 bg-gray-100 p-6 rounded-lg shadow-md">
        <input type="text" name="name" placeholder="Your Name" required className="p-3 border border-gray-300 rounded" />
        <input type="email" name="email" placeholder="Your Email" required className="p-3 border border-gray-300 rounded" />
        <textarea name="message" rows="4" placeholder="Your Message" required className="p-3 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  );
};

export default AboutPage;