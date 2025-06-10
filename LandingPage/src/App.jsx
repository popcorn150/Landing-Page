import './styles/font.css'
import {
  exchanges,
  steps,
} from "./data/data";
import {
  Doll,
  FooterLabubuIcon,
  HowToLabubu,
  JoinUsIcon,
  LabubuIcon,
  LabubuTokenIcon,
  MainTitle,
  Title,
  WhoWeAreIcon,
  WhoWeLabubuIcon,
  WLabubuIcon,
} from "./utils";

export default function App() {
  return (
    <div className="bg-[url(../src/imgs/background.png)] bg-cover bg-center min-h-screen font-sans text-black overflow-x-hidden">
      {/* Navbar */}
      <header className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <img src={Title} alt="LABUBU" className="hover:cursor-pointer" />
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-[#742561]">
          <a href="#" className="hover:text-pink-300">What is a Labubu?</a>
          <a href="#" className="hover:text-pink-300">About Us</a>
          <a href="#" className="hover:text-pink-300">How to $LABUBU</a>
          <a href="#" className="hover:text-pink-300">Tokenomics</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-20 px-4 max-w-screen-xl mx-auto">
        <img src={MainTitle} alt="LABUBU" className="mx-auto w-60 md:w-96 drop-shadow-md" />
        <p className="font-sans text-lg text-[#83296D] tracking-widest mt-2 mb-6">
          the original fan token on solana
        </p>
        <div className="font-sans flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <button className="bg-[#FB89E1] text-[#4F1C42] font-semibold py-2 px-10 rounded-full hover:bg-pink-600 hover:text-white">
            View Chart
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-10 rounded-full">
            Join Community
          </button>
        </div>
        <p className="font-sans text-sm text-white bg-black rounded-full inline-block px-6 py-2 mt-2">
          JB2wozZLdzVfnaCFHxLg93R5Rh5iTH7ixEDWJQ0pump
        </p>
        <img src={Doll} alt="Doll" className="w-64 md:w-[400px] mx-auto mt-6 z-10 relative" />
      </section>

      {/* Exchanges */}
      <section className="text-center py-20 px-6 max-w-screen-xl mx-auto">
        <h2 className="exchanges font-bold text-3xl mb-6">EXCHANGES WE ARE ON</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {exchanges.map(({ id, name, img }) => (
            <img
              key={id}
              src={img}
              alt={name}
              className="w-36 h-16 object-contain"
            />
          ))}
        </div>
      </section>

      {/* What is Labubu */}
      <section className="relative py-20 px-6 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img src={LabubuIcon} alt="Labubu" className="w-40 md:w-60 z-10" />
        <div className="text-left z-10">
          <img src={WLabubuIcon} alt="What is Labubu?" className="w-60 mb-4" />
          <p className="font-sans text-sm text-[#1E1E1E] max-w-md">
            Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung.
            Inspired by Nordic fairy tales, he created this universe in 2015, with characters modeled after elves, fairies, and monsters.
          </p>
          <br />
          <p className="font-sans text-sm text-[#1E1E1E] max-w-md">
            From bustling Asian cities to the streets of Europe, Labubu has transcended borders,
            uniting fans of all ages in a shared love for this adorable toy.
          </p>
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
      <section className="py-20 px-6 text-center max-w-screen-xl mx-auto">
        <img src={LabubuTokenIcon} alt="Tokenomics" className="w-64 md:w-80 mx-auto mb-10" />
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <div className="tokenomics bg-white border-3 border-[#8C4DA3] px-7 py-4 rounded-xl shadow-2xl">
            <span className='text-5xl'>0%</span> <br /><span className='text-base'>Fees</span>
          </div>
          <div className="tokenomics bg-white border-3 border-[#8C4DA3] px-7 py-4 rounded-xl shadow-2xl">
            <span className='text-5xl'>100%</span> <br /><span className='text-base'>Community</span>
          </div>
          <div className="tokenomics bg-white border-3 border-[#8C4DA3] px-7 py-4 rounded-xl shadow-2xl">
            <span className='text-5xl'>LP</span> <br /><span className='text-base'>Locked</span>
          </div>
        </div>
        <p className="supply-rate text-3xl font-bold">SUPPLY:<br />1,000,000,000</p>
      </section>

      {/* Join Us */}
      <section className="py-7 px-6 text-center max-w-screen-xl mx-auto">
        <img src={JoinUsIcon} alt="Join Us" className="w-40 mx-auto mb-10" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#1DA1F2] text-white px-10 py-3 rounded-full hover:cursor-pointer">Twitter</button>
          <button className="bg-[#4267B2] text-white px-10 py-3 rounded-full hover:cursor-pointer">Facebook</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 text-center text-xs max-w-screen-xl mx-auto">
        <img src={FooterLabubuIcon} alt="Labubu" className="w-40 mx-auto mb-6" />
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-[#1E0E62] mb-4">
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Portfolio?</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">How it Works</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Pricing</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">About</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Contacts</a>
        </nav>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          This meme coin is not affiliated with, endorsed by, or associated with the official Labubu brand, Popmart company, or any of its representatives. This project is purely for entertainment purposes and does not claim any rights or connections to Popmart or its intellectual property. Please do your own research before participating, and remember that meme coins are highly speculative and volatile assets.
        </p>
      </footer>
    </div>
  );
}
