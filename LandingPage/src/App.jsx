import { exchanges, steps } from "./data/data";
import { Background, Doll, FooterLabubuIcon, HowToLabubu, JoinUsIcon, LabubuIcon, LabubuTokenIcon, MainTitle, Title, WhoWeAreIcon, WhoWeLabubuIcon, WLabubuIcon } from "./utils";

export default function App() {
  return (
    <div className="bg-[url(../src/imgs/background.png)] bg-cover bg-center min-h-screen font-sans text-black">
      {/* Navbar */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">
        <img src={Title} alt="LABUBU" className="hover:cursor-pointer" />
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-[#742561]">
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer">What is a Labubu?</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer">About Us</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer">How to $LABUBU</a>
          <a href="#" className="hover:text-pink-300 hover:cursor-pointer">Tokenomics</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <img src={MainTitle} alt="LABUBU" className="mx-auto w-60 md:w-96 drop-shadow-md" />
        <p className="text-lg text-[#83296D] tracking-widest mt-2 mb-6">
          the original fan token on solana
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
          <button className="bg-[#FB89E1] hover:bg-pink-600 hover:text-white hover:cursor-pointer text-[#4F1C42] font-semibold text-base py-2 px-20 rounded-full">View Chart</button>
          <button className="bg-blue-500 hover:cursor-pointer text-white font-semibold py-2 px-15 rounded-full">Join Community</button>
        </div>
        <p className="text-sm text-white bg-black rounded-full inline-block px-20 py-2 mt-2">
          JB2wozZLdzVfnaCFHxLg93R5Rh5iTH7ixEDWJQ0pump
        </p>
        <div className="">
          {/* Hero Image Placeholder */}
          <img src={Doll} alt="Doll-1" className="w-64 md:w-[400px] mx-auto mt-6" />
        </div>
      </section>

      {/* Exchanges */}
      <section className="text-center px-4 mt-12">
        <h2 className="font-bold text-xl mb-4">EXCHANGES WE ARE ON</h2>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {exchanges.map(({ id, name, img }) => (
            <img key={id} src={img} alt={name} className="w-40 h-20 object-contain" />
          ))}
        </div>
      </section>

      {/* What is a Labubu */}
      <section className="mt-16 px-6 flex flex-col md:flex-row items-center gap-8">
        <img src={LabubuIcon} className="w-40" />
        <div className="flex flex-col items-start">
          <img src={WLabubuIcon} alt="What is Labubu?" className="w-60 mb-4" />
          <p className="max-w-md text-sm text-left">
            Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung. Inspired by Nordic fairy tales, he created this universe in 2015...
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="mt-16 px-6 flex flex-col md:flex-row items-center gap-8">
        <img src={WhoWeAreIcon} alt="Who We Are" className="w-60" />
        <p className="max-w-md text-sm text-left">
          Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung...
        </p>
        <img src={WhoWeLabubuIcon} alt="Who we are" className="w-60" />
      </section>

      {/* How to $LABUBU */}
      <section className="mt-20 px-6 text-center">
        <img src={HowToLabubu} alt="How To $Labubu" className="w-64 md:w-80 mx-auto mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map(({ id, title, description, icon }) => (
            <div key={id} alt={title} className="bg-white/20 rounded-2xl p-4">
              <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-2" />
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section className="mt-20 px-6 text-center">
        <img src={LabubuTokenIcon} alt="Toeknomics" className="w-64 md:w-80 mx-auto mb-6" />
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
          <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl shadow">0%<br />Fees</div>
          <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl shadow">100%<br />Community</div>
          <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl shadow">LP<br />Locked</div>
        </div>
        <p className="text-xl font-bold">SUPPLY:<br />1,000,000,000</p>
      </section>

      {/* Join Us */}
      <section className="mt-20 px-6 text-center">
        <img src={JoinUsIcon} alt="Join Us" className="w-40 mx-auto mb-10" />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="bg-[#1DA1F2] hover:cursor-pointer text-white font-normal px-10 py-3 rounded-full">Twitter</button>
          <button className="bg-[#4267B2] hover:cursor-pointer text-white font-normal px-10 py-3 rounded-full">Facebook</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 px-6 text-center text-xs py-10">
        <img src={FooterLabubuIcon} alt="Labubu" className="w-40 mx-auto mb-4" />
        <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-[#1E0E62] mb-4">
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Portfolio?</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">How it Works</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Pricing</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">About</a>
          <a href="#" className="hover:cursor-pointer text-[#1E0E62]">Contacts</a>
        </nav>
        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
          This meme coin is not affiliated with, endorsed by, or associated with the official Labubu brand,
          Popmart company, or any of its representatives. This project is purely for entertainment purposes
          and does not claim any rights or connections to Popmart or its intellectual property. Please do
          your own research before participating, and remember that meme coins are highly speculative and
          volatile assets.
        </p>
      </footer>
    </div>
  );
}