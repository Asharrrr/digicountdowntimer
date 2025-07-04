import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaRegClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="space-y-4">
      
                        <Link href="/" className="flex items-center space-x-2">
              <FaRegClock className="text-cyan-400 text-2xl" />
              <span className="text-xl font-bold text-cyan-400">
                Digi<span className="text-gray-200">Countdown</span>
              </span>
            </Link>
            <p className="text-sm text-white">
              Precise timing solutions for your digital needs.
            </p>
                    <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0 text-gray-200 text-xl">
          <Link
            href="https://github.com/MuhammadAshar28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 mx-2"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/MuhammadAshar28"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 mx-2"
            aria-label="Twitter"
          >
            <FaTwitter />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-ashar-4181272b7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 mx-2"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white text-sm transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white text-sm transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white text-sm transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacypolicy"
                  className="text-white text-sm transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-white text-sm transition"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/robots.txt"
                  className="text-white text-sm transition"
                >
                  Robots.txt
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <div className="space-y-3">
              <p className="text-sm text-white">
                Subscribe to our newsletter for updates.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white text-sm px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-white w-full"
                />
                <button className="bg-white hover:bg-white text-black px-4 py-2 rounded-r text-sm transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DigiCountdown Timer. All rights reserved.
          </p>
          <div className="flex space-x-6">
            
            <Link
              href="/privacy"
              className="text-xs text-white hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;