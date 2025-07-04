import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaRegClock } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Logo */}
        <div className="flex-1 flex justify-center sm:justify-start mb-4 sm:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <FaRegClock className="text-cyan-400 text-2xl" />
              <span className="text-xl font-bold text-cyan-400">
                Digi<span className="text-gray-200">Countdown</span>
              </span>
            </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-row gap-6 text-gray-200 text-lg">
            <li>
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cyan-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>

            <li>
              <Link href="/privacypolicy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
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
    </header>
  );
};

export default Header;