// components/UseCases.tsx
const useCaseDetails = [
  {
    title: "Live Event Countdowns",
    description: "Create real-time urgency for webinars, online concerts, game launches, and special announcements.",
    keywords: ["live event countdown", "webinar timer", "event timer online", "streaming countdown"],
    // You could add a link here if you have a dedicated page for this use case:
    // link: "/use-cases/live-events"
  },
  {
    title: "Study & Focus Sessions (Pomodoro)",
    description: "Enhance productivity with timed study intervals and breaks for students and professionals.",
    keywords: ["pomodoro timer", "study countdown", "focus timer online", "productivity tool"],
  },
  {
    title: "Product Launch Pages",
    description: "Build anticipation and drive early engagement for your new product releases and updates.",
    keywords: ["product launch countdown", "new product timer", "launch page timer", "pre-order countdown"],
  },
  {
    title: "Flash Sales Timers",
    description: "Boost conversions and create immediate demand for limited-time offers and discounts.",
    keywords: ["flash sale timer", "e-commerce countdown", "discount timer", "limited time offer"],
  },
  {
    title: "Online Exams or Tests",
    description: "Provide clear time limits for assessments, ensuring fair and structured online testing environments.",
    keywords: ["online exam timer", "test countdown", "quiz timer", "assessment timer"],
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-black">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-200">
        Use Case
      </h2>
      <p className="text-lg text-center text-gray-200 mb-10 max-w-2xl mx-auto">
        Our versatile tool is designed to serve a wide range of applications, helping you create urgency, manage time, and drive action.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {useCaseDetails.map((item, index) => (
          <div key={index} className="bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2 text-lime-400">{item.title}</h3>
            <p className="text-gray-200 mb-3">{item.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCases;
