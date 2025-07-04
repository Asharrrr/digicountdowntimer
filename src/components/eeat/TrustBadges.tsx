// components/trustbadges.tsx
const TrustBadges: React.FC = () => {
  return (
    <div className="text-center py-12 bg-black">
      <h2 className="text-3xl font-bold text-gray-200">Key Qualities</h2>

      {/* Row 1 */}
      <div className="flex justify-center flex-wrap gap-4 mt-8">
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          Easy to Use
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
          Fast & Reliable
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          Secure & Responsive
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          Constantly Evolving
        </span>
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
          Open Source
        </span>
      </div>

      {/* Row 2 */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
          100% Free
        </span>
        <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
          SSL Secure
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
          No Spam
        </span>
        <span className="bg-blue-100 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
          Highly Useful
        </span>
        <span className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
          Built with ❤️ by Ashar
        </span>
      </div>

      {/* Row 3 */}
      <div className="flex justify-center flex-wrap gap-4 mt-4">
        <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
          Privacy Focused
        </span>
        <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
          Mobile Friendly
        </span>
        <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
          No Login Required
        </span>
        <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
          Clean Design
        </span>
        <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
          Light & Clear Display
        </span>
      </div>
    </div>
  );
};

export default TrustBadges;
