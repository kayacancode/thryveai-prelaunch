"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

export default function PreLaunchPage() {
  // Initialize AOS when the component is mounted
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation triggers only once
      easing: "ease-out-cubic", // Easing function
    });
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#121212] justify-center min-h-screen p-8 pb-20 gap-24 sm:p-20 text-white font-[var(--font-geist-sans)]">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center text-center gap-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
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
        <p className="text-lg max-w-2xl sm:text-xl text-gray-300">
          The ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game.
        </p>
      </div>

      {/* Sign-Up Form */}
      <div
        className="flex flex-col items-center mt-16 w-full max-w-md"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <form className="w-full flex items-center gap-4 relative">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-lg text-white w-full bg-transparent border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-0 p-4 bg-white text-black rounded-lg font-semibold hover:bg-blue-500 transition duration-300 transform hover:scale-105"
          >
            Notify Me
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div
        className="flex flex-col gap-16 text-center mt-16"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl text-gray-200">
          What to Expect
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
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
              className="p-8 bg-[#f0f0f0f0] text-black rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200 + 800}
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-sm mt-4 text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-white rounded-xl  text-black py-8 mt-16">
        <div className="flex flex-col items-center">
          <p className="text-sm mb-4">© 2025 Thryve AI. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="/contact" className="hover:text-white transition">Contact</a>
            <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}