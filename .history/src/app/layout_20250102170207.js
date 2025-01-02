import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Thryve AI | Empowering Athletes, Influencers, and Artists",
  description: "Join the ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game. Sign up for early access now!",
  keywords: "Thryve AI, athletes, influencers, artists, brand marketing, early access, e-learning, matchmaking, personalized profiles",
  author: "Thryve AI Team",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  og: {
    title: "Thryve AI | Empowering Athletes, Influencers, and Artists",
    description: "Join the ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game. Sign up for early access now!",
    image: "/thryvemainlogowhite.png", // Ensure the path to the logo is correct
    url: "https://thryveai.ai", // Replace with your live URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thryve AI | Empowering Athletes, Influencers, and Artists",
    description: "Join the ultimate platform for athletes, influencers, and artists to connect with brands and elevate their marketing game. Sign up for early access now!",
    image: "/thryvemainlogowhite.png", // Ensure the path to the logo is correct
    creator: "@ThryveAI", // Replace with your Twitter handle
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
