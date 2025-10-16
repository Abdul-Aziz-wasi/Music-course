import React from 'react';

const Footer = () => {
    return (
       <footer className="bg-black text-gray-300 py-12 mt-10">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {/* Logo & About */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Music School</h2>
      <p className="text-sm leading-relaxed">
        This helps developers and learners discover, bookmark, and collaborate on exciting projects easily. 
        Empowering innovation through community.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="" className="hover:text-emerald-400 transition">Home</a></li>
        <li><a href="/projects" className="hover:text-emerald-400 transition">Courses</a></li>
        <li><a href="/blogs" className="hover:text-emerald-400 transition"></a></li>
        <li><a href="/contact" className="hover:text-emerald-400 transition">Contact</a></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Resources</h3>
      <ul className="space-y-2">
        <li><a href="/about" className="hover:text-emerald-400 transition">About Us</a></li>
        <li><a href="/faq" className="hover:text-emerald-400 transition">FAQ</a></li>
        <li><a href="/terms" className="hover:text-emerald-400 transition">Terms & Conditions</a></li>
        <li><a href="/privacy" className="hover:text-emerald-400 transition">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Newsletter / Social Links */}
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
      <p className="text-sm mb-3">Subscribe to our newsletter for updates.</p>
      <form className="flex items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 rounded-lg text-gray-800 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg text-white font-medium"
        >
          Subscribe
        </button>
      </form>

      <div className="flex gap-4 mt-5">
        <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="hover:text-emerald-400 transition"><i className="fab fa-github"></i></a>
      </div>
    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Music School. All rights reserved.
  </div>
</footer>

    );
};

export default Footer;