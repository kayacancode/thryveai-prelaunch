import { motion } from "framer-motion";
import Image from "next/image";

export default function home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-900 text-white font-[var(--font-geist-sans)]">
      {/* Hero Section */}
      <motion.div
        className="flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/thryvemainlogowhite.png"
          alt="Thryve AI Logo"
          width={500}
          height={85}
          className="mb-4"
        />
        <motion.h1
          className="text-4xl font-bold sm:text-5xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Coming Soon
        </motion.h1>
        <p className="text-lg max-w-2xl sm:text-xl">
          The ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="flex flex-col gap-8 text-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold sm:text-3xl">What to Expect</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
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
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sign-Up Form */}
      <motion.div
        className="flex flex-col items-center mt-12 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h2 className="text-2xl font-semibold sm:text-3xl mb-4">Stay Updated</h2>
        <p className="text-sm text-gray-400 mb-6">
          Sign up to be notified when we launch.
        </p>
        <form className="w-full flex flex-col gap-4">
          <motion.input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-lg text-black w-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="p-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Notify Me
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
