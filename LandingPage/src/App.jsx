import React from 'react';
import { exchanges, steps } from "./data/data";
import { Background, Doll, FooterLabubuIcon, HowToLabubu, JoinUsIcon, LabubuIcon, LabubuTokenIcon, MainTitle, Title, WhoWeAreIcon, WhoWeLabubuIcon, WLabubuIcon } from "./utils";

export default function App() {
  return (
    <div className="bg-[url(../src/imgs/background.png)] bg-cover bg-center min-h-screen font-sans text-black">
      {/* Navbar */}
      <header className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 py-3 md:py-4 gap-3 md:gap-4">
        <img src={Title} alt="LABUBU" className="hover:cursor-pointer h-8 sm:h-10 md:h-12" />
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-[#742561]">
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer whitespace-nowrap">What is a Labubu?</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer whitespace-nowrap">About Us</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer whitespace-nowrap">How to $LABUBU</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer whitespace-nowrap">Tokenomics</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 pt-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <img src={MainTitle} alt="LABUBU" className="mx-auto w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] drop-shadow-lg mb-2" />
          <p className="text-sm sm:text-base md:text-lg text-[#83296D] tracking-[0.2em] mb-6 font-medium">
            the original fan token on solana
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
            <button className="bg-[#FB89E1] hover:bg-pink-500 text-[#4F1C42] font-bold text-sm py-2.5 px-8 rounded-full shadow-lg">View Chart</button>
            <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-full shadow-lg text-sm">Join Community</button>
          </div>
          <div className="text-xs text-white bg-black rounded-full inline-block px-4 py-1.5 mb-6 font-mono">
            JB2wozZLdzVfnaCFHxLg93R5Rh5iTH7ixEDWJQ0pump
          </div>
          <div className="flex justify-center">
            <img src={Doll} alt="Labubu Character" className="w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px] max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Exchanges */}
      <section className="text-center px-4 py-8">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-6 text-black">EXCHANGES WE ARE ON</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {exchanges.map(({ id, name, img }) => (
            <img key={id} src={img} alt={name} className="h-8 sm:h-10 md:h-12 object-contain opacity-80" />
          ))}
        </div>
      </section>

      {/* What is a Labubu */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <img src={WLabubuIcon} alt="What is Labubu?" className="w-[280px] sm:w-[320px] md:w-[380px] mx-auto lg:mx-0 mb-6" />
              <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-black max-w-2xl mx-auto lg:mx-0">
                <p>
                  Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung. Inspired by Nordic fairy tales, he created this universe in 2015 with characters modeled after elves, dwarfs and monsters.
                </p>
                <p>
                  From bustling Asian cities to the streets of Europe, Labubu has transcended borders, uniting fans of all ages in a shared love for this mischievous elf.
                </p>
              </div>
            </div>
            {/* Character Image - Right Side */}
            <div className="flex-shrink-0 order-1 lg:order-2">
              <img src={LabubuIcon} alt="Labubu Character" className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Image */}
            <div className="flex-shrink-0 order-1">
              <img src={WhoWeAreIcon} alt="Who We Are" className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] mx-auto" />
            </div>
            {/* Center Text */}
            <div className="flex-1 text-center order-3 lg:order-2">
              <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-black max-w-2xl mx-auto">
                <p>
                  Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung. Inspired by Nordic fairy tales, he created this universe in 2015 with characters modeled after elves, dwarfs and monsters.
                </p>
                <p>
                  From bustling Asian cities to the streets of Europe, Labubu has transcended borders, uniting fans of all ages in a shared love for this mischievous elf.
                </p>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex-shrink-0 order-2 lg:order-3">
              <img src={WhoWeLabubuIcon} alt="Labubu Character" className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* How to $LABUBU */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-6xl mx-auto">
          <img src={HowToLabubu} alt="How To $Labubu" className="w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px] mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map(({ id, title, description, icon }) => (
              <div key={id} className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                <img src={icon} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-black text-black mb-2">{title}</h3>
                <p className="text-xs sm:text-sm text-black leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-5xl mx-auto">
          <img src={LabubuTokenIcon} alt="Tokenomics" className="w-[300px] sm:w-[380px] md:w-[450px] lg:w-[500px] mx-auto mb-12" />
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 mb-10">
            <div className="bg-gradient-to-b from-white to-gray-50 border-4 border-[#8C4DA3] rounded-2xl p-6 shadow-xl min-w-[140px]">
              <div className="text-4xl sm:text-5xl font-black text-[#8C4DA3] mb-1">0%</div>
              <div className="text-base sm:text-lg font-black text-black">FEES</div>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-50 border-4 border-[#8C4DA3] rounded-2xl p-6 shadow-xl min-w-[140px]">
              <div className="text-4xl sm:text-5xl font-black text-[#8C4DA3] mb-1">100%</div>
              <div className="text-base sm:text-lg font-black text-black">COMMUNITY</div>
            </div>
            <div className="bg-gradient-to-b from-white to-gray-50 border-4 border-[#8C4DA3] rounded-2xl p-6 shadow-xl min-w-[140px]">
              <div className="text-4xl sm:text-5xl font-black text-[#8C4DA3] mb-1">LP</div>
              <div className="text-base sm:text-lg font-black text-black">LOCKED</div>
            </div>
          </div>
          <div className="text-black">
            <div className="text-xl sm:text-2xl font-black mb-2">SUPPLY:</div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-black">1,000,000,000</div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <img src={JoinUsIcon} alt="Join Us" className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto mb-12" />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg transition-all">
              Twitter
            </button>
            <button className="bg-[#4267B2] hover:bg-blue-700 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg transition-all">
              Facebook
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 text-center">
        <div className="max-w-5xl mx-auto">
          <img src={FooterLabubuIcon} alt="Labubu Footer" className="w-[200px] sm:w-[250px] md:w-[300px] mx-auto mb-8" />
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm sm:text-base md:text-lg text-[#1E0E62] mb-8 font-medium">
            <a href="#" className="hover:text-purple-600 transition-colors">Portfolio?</a>
            <a href="#" className="hover:text-purple-600 transition-colors">How it Works</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Pricing</a>
            <a href="#" className="hover:text-purple-600 transition-colors">About</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contacts</a>
          </nav>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            This meme coin is not affiliated with, endorsed by, or associated with the official Labubu brand,
            Popmart company, or any of its representatives. This project is purely for entertainment purposes
            and does not claim any rights or connections to Popmart or its intellectual property. Please do
            your own research before participating, and remember that meme coins are highly speculative and
            volatile assets.
          </p>
        </div>
      </footer>
    </div>
  );
}