import Image from "next/image";

export default function PreLaunchPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-white font-[var(--font-geist-sans)]">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8">
        <Image
          src="/thryvemainlogowhite.png"
          alt="Thryve AI Logo"
          width={500}
          height={85}
          className="mb-4"
        />
        <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
          Coming Soon
        </h1>
        <p className="text-lg max-w-2xl sm:text-xl">
          The ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game.
        </p>
      </div>

        {/* Sign-Up Form */}
        <div className="flex flex-col items-center mt-12 w-full max-w-md">
        <h2 className="text-2xl font-semibold sm:text-3xl mb-4 text-gray-200">
          Stay Updated
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Sign up to be notified when we launch.
        </p>
        <form className="w-full flex flex-col gap-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-lg text-black w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="p-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Notify Me
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-12 text-center mt-12">
        <h2 className="text-3xl font-semibold sm:text-4xl text-gray-200">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "AI-Powered Matchmaking",
              description:
                "Get connected with brands that align with your values and goals.",
            },
            {
              title: "Comprehensive E-Learning",
              description:
                "Boost your marketing skills with tailored courses and resources.",
            },
            {
              title: "Personalized Profiles",
              description:
                "Showcase your achievements and connect with potential collaborators.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-sm mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}
