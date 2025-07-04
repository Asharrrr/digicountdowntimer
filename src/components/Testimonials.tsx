const Testimonials = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          What Users Are Saying
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
            <p className="text-gray-200 italic mb-6">
              "Countdown Timer is a game changer! I use it daily for my Pomodoro work sessions. It's fast, simple, and never lets me down."
            </p>
            <div>
              <h3 className="text-sm font-semibold text-lime-400">Alex Johnson</h3>
              <span className="text-xs text-gray-400">Product Designer</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
            <p className="text-gray-200 italic mb-6">
              "I needed a countdown for my online classes. This tool works on all devices and keeps my students focused. Highly recommended!"
            </p>
            <div>
              <h3 className="text-sm font-semibold text-lime-400">Priya Mehta</h3>
              <span className="text-xs text-gray-400">Online Educator</span>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
            <p className="text-gray-200 italic mb-6">
              "Exactly what I was looking for. No login, no ads, just a clean timer that works. The reset and pause features are perfect!"
            </p>
            <div>
              <h3 className="text-sm font-semibold text-lime-400">Mark Rivera</h3>
              <span className="text-xs text-gray-400">Freelancer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
