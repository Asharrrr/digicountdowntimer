"use client"
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin, FaRegClock, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Main header container */}
        <div className="flex items-center justify-between">
          {/* Logo - Always visible */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2" aria-label="Home">
              <FaRegClock className="text-cyan-400 text-2xl sm:text-3xl" />
              <span className="text-xl sm:text-2xl font-bold text-cyan-400">
                Digi<span className="text-gray-200">Countdown</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <nav className="hidden md:block">
              <ul className="flex space-x-4 lg:space-x-6 text-gray-200 text-base lg:text-lg">
                <li>
                  <Link href="/" className="hover:text-cyan-400 transition-colors px-2 py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cyan-400 transition-colors px-2 py-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors px-2 py-1">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="hover:text-cyan-400 transition-colors px-2 py-1">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4 ml-4 lg:ml-6">
              <Link
                href="https://github.com/MuhammadAshar28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/MuhammadAshar28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-ashar-4181272b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          {/* Mobile menu button - Visible only on mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-200 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only shows when toggled */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-2">
            <nav>
              <ul className="flex flex-col space-y-2 text-gray-200">
                <li>
                  <Link 
                    href="/" 
                    className="block hover:text-cyan-400 transition-colors px-3 py-2 rounded hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="block hover:text-cyan-400 transition-colors px-3 py-2 rounded hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="block hover:text-cyan-400 transition-colors px-3 py-2 rounded hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/privacypolicy" 
                    className="block hover:text-cyan-400 transition-colors px-3 py-2 rounded hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Icons - Mobile */}
            <div className="flex justify-center space-x-6 pt-3 px-3">
              <Link
                href="https://github.com/MuhammadAshar28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/MuhammadAshar28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-ashar-4181272b7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-cyan-400 transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;








// import Link from "next/link";
// import { FaGithub, FaTwitter, FaLinkedin, FaRegClock } from "react-icons/fa";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-black shadow-md w-full">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
//         {/* Logo */}
//         <div className="flex-1 flex justify-center sm:justify-start mb-4 sm:mb-0">
//             <Link href="/" className="flex items-center space-x-2">
//               <FaRegClock className="text-cyan-400 text-2xl" />
//               <span className="text-xl font-bold text-cyan-400">
//                 Digi<span className="text-gray-200">Countdown</span>
//               </span>
//             </Link>
//         </div>

//         {/* Navigation */}
//         <div className="flex-1 flex justify-center">
//           <ul className="flex flex-row gap-6 text-gray-200 text-lg">
//             <li>
//               <Link href="/" className="hover:text-cyan-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" className="hover:text-cyan-400">
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:text-cyan-400">
//                 Contact
//               </Link>
//             </li>

//             <li>
//               <Link href="/privacypolicy" className="hover:text-cyan-400">
//                 Privacy Policy
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Social Icons */}
//         <div className="flex-1 flex justify-center sm:justify-end mt-4 sm:mt-0 text-gray-200 text-xl">
//           <Link
//             href="https://github.com/MuhammadAshar28"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-cyan-400 mx-2"
//             aria-label="GitHub"
//           >
//             <FaGithub />
//           </Link>
//           <Link
//             href="https://x.com/MuhammadAshar28"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-cyan-400 mx-2"
//             aria-label="Twitter"
//           >
//             <FaTwitter />
//           </Link>

//           <Link
//             href="https://www.linkedin.com/in/muhammad-ashar-4181272b7"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-cyan-400 mx-2"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedin />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
