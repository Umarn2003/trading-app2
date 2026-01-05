import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Apple,
  Smartphone,
  Star,
  AppleIcon,
  Search,
  Battery,
  VideoIcon,
  Laptop,
  LightbulbIcon,
  LucideGalleryHorizontal,
  DollarSign,
  Bitcoin,
  Octagon,
} from "lucide-react";

export default function Footer() {
  const popularProducts = [
    { name: "Apple", icon: <AppleIcon />, change: "-0.47%", isNegative: true },
    { name: "Google", icon: <Search />, change: "-0.34%", isNegative: true },
    { name: "Tesla", icon: <Battery />, change: "-4.05%", isNegative: true },
    {
      name: "Netflix",
      icon: <VideoIcon />,
      change: "-2.70%",
      isNegative: true,
    },
    { name: "Microsoft", icon: <Laptop />, change: "-2.91%", isNegative: true },
    {
      name: "Gold",
      icon: <LightbulbIcon />,
      change: "+0.17%",
      isNegative: false,
    },
    {
      name: "Oil",
      icon: <LucideGalleryHorizontal />,
      change: "-0.07%",
      isNegative: true,
    },
    {
      name: "Nasdaq",
      icon: <DollarSign />,
      change: "-0.31%",
      isNegative: true,
    },
    { name: "Bitcoin", icon: <Bitcoin />, change: "-0.20%", isNegative: true },
  ];

  const platforms = [
    "MetaTrader 4",
    "MetaTrader 5",
    "Pro Trader",
    "AppTrader",
    "CopyTrader",
    "MetaQuotes App",
  ];

  const aboutUs = [
    "Company",
    "Careers",
    "Trading Infrastructure",
    "Awards",
    "Regulation",
    "Contact us",
  ];

  const markets = [
    "Forex",
    "Commodities",
    "Indices",
    "Share CFDs",
    "EFTs",
    "Bonds",
  ];

  const clients = [
    "ProTrader Tools",
    "Compare Accounts",
    "Free VPS",
    "50% Cashback Bonus",
    "Education",
    "Economic Calendar",
  ];

  const trustpilotRating = { rating: 4.3, reviews: 457 };
  const googleRating = { rating: 4.8, reviews: 547 };
  const fpaRating = { rating: 4.8, reviews: 58 };
  const fxbookRating = { rating: 4.7, reviews: 191 };

  return (
    <footer className="pt-16 pb-8 bg-linear-to-b from-[#050b1e] to-[#020617]">
      <div className="mt-16 pt-8 border-t border-gray-800 w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex-1 mx-auto text-center">
            <h3 className="text-blue-500 font-semibold mb-4">Contact Us</h3>
            <p className="text-white text-sm mb-2">
              Email: support@trading-app.com
            </p>
            <p className="text-white text-sm mb-2">Phone: +1 (555) 123-4567</p>
            <p className="text-white text-sm">
              Address: 123 Trading Street, NY 10001
            </p>
          </div>
          <div className="flex-1 mx-auto text-center">
            <h3 className="text-blue-500 font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Facebook
                className="text-white cursor-pointer hover:text-blue-500"
                size={20}
              />
              <Twitter
                className="text-white cursor-pointer hover:text-blue-500"
                size={20}
              />
              <Instagram
                className="text-white cursor-pointer hover:text-blue-500"
                size={20}
              />
              <Linkedin
                className="text-white cursor-pointer hover:text-blue-500"
                size={20}
              />
            </div>
          </div>
          <div className="flex-1 mx-auto text-center">
            <h3 className="text-blue-500 font-semibold mb-4">Support Hours</h3>
            <p className="text-white text-sm mb-2">
              Monday - Friday: 9AM - 6PM
            </p>
            <p className="text-white text-sm">Saturday - Sunday: 10AM - 4PM</p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-white text-sm">
            © 2024 Trading App. All rights reserved. |{" "}
            <span className="text-blue-500">Privacy Policy</span> |{" "}
            <span className="text-blue-500">Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
