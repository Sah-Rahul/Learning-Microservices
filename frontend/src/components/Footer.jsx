import { assets } from "../assets/assets";

const Footer = () => {
  const footerMenus = {
    COMPANY: ["About", "Careers", "Privacy", "Terms"],
    SUPPORT: [
      "Help Center",
      "Safety Information",
      "Cancellation Options",
      "Contact Us",
      "Accessibility",
    ],
  };

  return (
     <footer className="bg-white text-gray-700 border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Logo and Description */}
        <div>
          <h1 className="text-pink-600 text-xl font-bold mb-2">QuickStay</h1>
          <p>
            Discover the world’s most extraordinary places to stay, from boutique
            hotels to luxury villas and private islands.
          </p>
          <div className="flex gap-3 mt-4 text-gray-500">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-2">COMPANY</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-2">SUPPORT</h3>
          <ul className="space-y-1">
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Contact Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">STAY UPDATED</h3>
          <p className="mb-3">
            Subscribe to our newsletter for travel inspiration and special offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 border border-gray-300 rounded-l w-full"
            />
            <button className="bg-black text-white px-4 rounded-r">→</button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-10 text-gray-400">
        © 2025 QuickStay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
