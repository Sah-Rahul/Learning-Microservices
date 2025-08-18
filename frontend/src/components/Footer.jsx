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
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-gray-50 text-gray-800">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 py-12  ">
        {/* Logo + Description + Socials */}
        <div className="max-w-md">
          {/* <img src={assets.logo} alt="QuickStay Logo" className="mb-3" /> */}
          <h1 className="text-3xl font-bold text-pink-500 mb-4">QuickStay</h1>
          <p className="text-sm text-gray-600 mb-4">
            Discover the world’s most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>

          <div className="flex items-center gap-4">
            {[
              assets.twitterIcon,
              assets.facebookIcon,
              assets.linkendinIcon,
            ].map((icon, i) => (
              <a href="#" key={i}>
                <img
                  src={icon}
                  alt="social"
                  className="w-5 h-5 hover:opacity-70 transition"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Menus and Newsletter */}
        <div className="flex flex-wrap md:flex-nowrap w-full md:w-2/3 gap-10 justify-between">
          {/* Company & Support */}
          {Object.entries(footerMenus).map(([title, items], index) => (
            <div key={index}>
              <h2 className="font-semibold mb-4">{title}</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                {items.map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="max-w-xs">
            <h2 className="font-semibold mb-4 text-sm">STAY UPDATED</h2>
            <p className="text-sm text-gray-600 mb-3">
              Subscribe to our newsletter for travel inspiration and special
              offers.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 text-sm border border-gray-300 rounded-l-md w-full"
              />
              <button className="bg-black text-white px-4 rounded-r-md text-sm hover:bg-gray-800">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-5 md:flex-row items-center justify-between gap-4 border-t pt-6 text-sm text-gray-500">
        <p>© 2025 QuickStay. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
