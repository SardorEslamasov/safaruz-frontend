import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h4 className="text-lg font-bold">SafarUz</h4>
          <p className="text-sm mt-2">Explore Uzbekistan like never before.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/tours" className="hover:underline">Tours</a></li>
            <li><a href="/hotels" className="hover:underline">Hotels</a></li>
            <li><a href="/restaurants" className="hover:underline">Restaurants</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Contact</h4>
          <p className="text-sm mt-2">Tashkent, Uzbekistan<br />info@safaruz.com</p>
        </div>
      </div>
      <div className="text-center text-xs py-4 bg-blue-700">
        © {new Date().getFullYear()} SafarUz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
