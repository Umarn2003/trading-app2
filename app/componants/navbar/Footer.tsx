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
    <footer className="bg-black/95 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-white">
              <Octagon className="text-red-500 font-extrabold h-9 w-9" />
              <div className="flex flex-col leading-tight justify-center items-center">
                <p className="font-bold text-xl">Trade Web</p>
                <span className="text-sm tracking-[0.4em]">MARKETS</span>
              </div>
            </div>

            <div className="h-16 w-px bg-gray-700"></div>

            <div className="flex items-center gap-3">
              <div className="relative w-14 h-16">
                <div className="w-full h-full bg-linera-to-b from-red-600 to-red-800 rounded-sm flex flex-col items-center justify-center border-2 border-white">
                  <div className="text-white text-xs font-bold">ATM</div>
                </div>
              </div>
              <div className="text-xs text-gray-400 max-w-45 leading-tight">
                <div className="font-semibold text-white">
                  OFFICIAL REGIONAL PARTNER
                </div>
                <div>OF ATLETICO DE MADRID</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Popular Products
            </h3>
            <div className="space-y-3">
              {popularProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-lg group-hover:bg-gray-700 transition-colors">
                      {product.icon}
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {product.name}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      product.isNegative ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {product.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Platforms</h3>
            <ul className="space-y-3 mb-10">
              {platforms.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-600">&gt;</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-lg font-semibold mb-6">About Us</h3>
            <ul className="space-y-3">
              {aboutUs.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-600">&gt;</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Markets</h3>
            <ul className="space-y-3 mb-10">
              {markets.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-600">&gt;</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white text-lg font-semibold mb-6">Clients</h3>
            <ul className="space-y-3">
              {clients.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="text-gray-600">&gt;</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Funding Methods
            </h3>
            <div className="grid grid-cols-4 gap-3 mb-10">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-[#1A1F71] font-bold text-xs">VISA</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-red-600 font-bold text-xs">MC</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-blue-900 font-bold text-xs">WU</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-blue-600 font-bold text-xs">PP</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-orange-500 font-bold text-xs">SK</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-blue-500 font-bold text-xs">NL</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-orange-600 font-bold text-xs">BC</span>
              </div>
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center hover:scale-105 transition-transform">
                <span className="text-gray-800 font-bold text-xs">SC</span>
              </div>
            </div>

            <h3 className="text-white text-lg font-semibold mb-6">
              Download Moneta App
            </h3>
            <div className="space-y-3 mb-10">
              <Link href="#" className="block">
                <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <Apple className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-[10px] text-gray-400">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold text-white">
                      App Store
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="#" className="block">
                <div className="bg-black rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <Smartphone className="w-6 h-6 text-white" />
                  <div>
                    <div className="text-[10px] text-gray-400">GET IT ON</div>
                    <div className="text-sm font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <h3 className="text-white text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 bg-[#4267B2] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Facebook className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Instagram className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Twitter className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Linkedin className="text-white w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Youtube className="text-white w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 py-8 border-y border-gray-800">
          <div className="flex items-center gap-4">
            <div className="text-white font-bold text-xl flex items-center gap-1">
              <Star className="w-5 h-5 fill-[#00B67A] text-[#00B67A]" />
              <span className="text-[#00B67A]">Trustpilot</span>
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#00B67A] text-[#00B67A]"
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400">
                Rating{" "}
                <span className="text-white font-semibold">
                  {trustpilotRating.rating}
                </span>{" "}
                | {trustpilotRating.reviews} reviews
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-4xl">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400">
                Rating{" "}
                <span className="text-white font-semibold">
                  {googleRating.rating}
                </span>{" "}
                | {googleRating.reviews} reviews
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">FPA</span>
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400">
                Rating{" "}
                <span className="text-white font-semibold">
                  {fpaRating.rating}
                </span>{" "}
                | {fpaRating.reviews} reviews
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-white font-bold text-lg flex items-center">
              my<span className="text-orange-500">fx</span>book
            </div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <div className="text-xs text-gray-400">
                Rating{" "}
                <span className="text-white font-semibold">
                  {fxbookRating.rating}
                </span>{" "}
                | {fxbookRating.reviews} reviews
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 mb-8">
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            <Link href="#" className="hover:text-white transition-colors">
              Legal Documents
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              AML Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Site Map
            </Link>
          </div>
          <div className="text-center sm:text-right">
            <div>Contact Us: +44 (113) 3204819 | support@monetamarkets.com</div>
          </div>
        </div>

        <div className="text-xs text-gray-500 leading-relaxed space-y-4">
          <div>
            <span className="font-semibold text-gray-400">Risk Warning:</span>
            <br />
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. You should consider whether you
            understand how CFDs work and whether you can afford to take the high
            risk of losing your money. Trading derivatives is risky. It isn't
            suitable for everyone; you could lose substantially more than your
            initial investment. You don't own or have rights to the underlying
            assets. Past performance is no indication of future performance and
            tax laws are subject to change. The information on this website is
            general in nature and doesn't consider your personal objectives,
            financial circumstances, or needs. Please read our{" "}
            <Link
              href="#"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              legal documents
            </Link>{" "}
            and ensure that you fully understand the risks before you make any
            trading decisions.
          </div>

          <div>
            <span className="font-semibold text-gray-400">
              Regional Restrictions:
            </span>
            <br />
            The information on this site is not intended for residents of
            Canada, Cyprus, France, Spain, Russia, Ukraine, Italy, the United
            States, or use by any person in any country or jurisdiction where
            such distribution or use would be contrary to local law or
            regulation.
          </div>

          <div>
            <span className="font-semibold text-gray-400">
              Legal Information:
            </span>
            <br />
            Moneta Markets Capital Ltd is registered in England and Wales under
            company number 08279988, registered office address, Amlbenson the
            Long Lodge, 265-269 Kingston Road, Wimbledon, England, SW19 3NW and
            authorised and regulated by the Financial Conduct Authority in the
            United Kingdom (FRN 613381) to provide services to UK clients and is
            a wholly owned subsidiary of Moneta Markets Excellence Holding
            Limited. Other Moneta Markets entities are not authorised or
            regulated by the Financial Conduct Authority and do not offer
            Services to UK residents.
          </div>

          <div>
            Moneta Markets is a trading name of Moneta Markets (Pty) Ltd, an
            authorised Financial Service Provider ("FSP") registered and
            regulated by the Financial Sector Conduct Authority ("FSCA") of
            South Africa under license number 47490 and located at 18 Cavendish
            Road, Claremont, Cape Town, Western Cape, 7708 South Africa. Company
            Registration Number: 2016 / 063801 / 07. Contact Phone Number: +27
            (10) 1429139. Operational Office: 18 Cavendish Road, Claremont, Cape
            Town, Western Cape, 7708 South Africa.
          </div>

          <div>
            Moneta Markets is a trading name of Moneta Markets Ltd, registered
            under Saint Lucia Registry of International Business Companies with
            registration number 2023-00068.
          </div>

          <div>
            Moneta Markets Trading Limited is regulated by the Financial
            Services Commission (FSC) of Mauritius, with Company No. 211285 GBC
            and License No. GB24203391. Its registered office is located at
            Suite 201, 2nd Floor, The Catalyst, 40 Silicon Avenue, Ebene
            Cybercity, Mauritius.
          </div>

          <div>
            Mmonexis Ltd registered in the Republic of Cyprus with registration
            number HE436544 and registered address at Archbishop Makarios III,
            160, Floor 1, 3026, Limassol, Cyprus.
          </div>

          <div>
            Moneta Markets PTY LTD soliciting Business from UAE through a
            Non-Exclusive Introducing Broker Agreement Regulated by SCA ,
            Sterling Financial Services LLC ,Cat 5 ,No 305029
          </div>
        </div>
      </div>
    </footer>
  );
}
