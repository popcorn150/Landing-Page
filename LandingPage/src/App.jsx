import { exchanges, steps } from "./data/data";
import { Background, Doll, FooterLabubuIcon, HowToLabubu, JoinUsIcon, LabubuIcon, LabubuTokenIcon, MainTitle, Title, WhoWeAreIcon, WhoWeLabubuIcon, WLabubuIcon } from "./utils";

export default function App() {
  return (
    <div className="bg-[url(../src/imgs/background.png)] bg-cover bg-center min-h-screen">
      {/* Main Container */}
      <div className="text-black mx-15 font-sans">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4">
          <img src={Title} alt="LABUBU" className="hover:cursor-pointer" />
          <nav className="space-x-20 text-sm md:text-base">
            <a href="#" className="hover:text-pink-300 hover:cursor-pointer text-[#742561]">What is a Labubu?</a>
            <a href="#" className="hover:text-pink-300 hover:cursor-pointer text-[#742561]">About Us</a>
            <a href="#" className="hover:text-pink-300 hover:cursor-pointer text-[#742561]">How to $LABUBU</a>
            <a href="#" className="hover:text-pink-300 hover:cursor-pointer text-[#742561]">Tokenomics</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="text-center py-12 px-4">
          <img src={MainTitle} alt="LABUBU" className="mx-auto w-xl md:w-lg drop-shadow-md" />
          <p className="text-xl font-light text-[#83296D] tracking-widest mt-2 mb-6">
            the original fan token on solana
          </p>
          <div className="flex justify-center space-x-4 mb-4">
            <button className="bg-[#FB89E1] hover:bg-pink-600 hover:text-white hover:cursor-pointer text-[#4F1C42] font-semibold text-base py-2 px-20 rounded-full">View Chart</button>
            <button className="bg-blue-500 hover:bg-blue-600 hover:text-[#4F1C42] hover:cursor-pointer text-white font-semibold py-2 px-15 rounded-full">Join Community</button>
          </div>
          <p className="text-sm text-white bg-black rounded-full inline-block px-20 py-2 mt-2">
            JB2wozZLdzVfnaCFHxLg93R5Rh5iTH7ixEDWJQ0pump
          </p>
          <div className="">
            {/* Hero Image Placeholder */}
            <img src={Doll} alt="Doll-1" className="w-[400px] h-[400px] mx-auto" />
          </div>
        </section>

        {/* Exchanges */}
        <section className="text-center px-4 mt-12">
          <h2 className="font-bold text-xl mb-4">EXCHANGES WE ARE ON</h2>
          <div className="mx-10 flex flex-wrap justify-center gap-10">
            {exchanges.map(({ id, name, img }) => (
              <img key={id} src={img} alt={name} className="w-40 h-20 object-contain" />
            ))}
          </div>
        </section>

        {/* What is a Labubu */}
        <section className="mt-16 px-6 flex flex-wrap justify-between items-center">
          <div className="mb-4">
            <img src={LabubuIcon} className="w-xs" />
          </div>
          <div className="flex flex-end">
            <img src={WLabubuIcon} alt="What is Labubu?" className="w-sm mb-4" />
            <p className="max-w-md mx-auto text-start text-sm">
              Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung. Inspired by Nordic fairy tales, he created this universe in 2015...
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="mt-16 px-6 flex flex-wrap justify-between items-center">
          <img src={WhoWeAreIcon} alt="Who We Are" className="w-sm mb-4" />
          <p className="max-w-md mx-auto text-start text-sm">
            Labubu is a character in a series of stories called "The Monsters" by Hong-Kong born artist Kasing Lung...
          </p>
          <div className="mb-4">
            <img src={WhoWeLabubuIcon} alt="Who we are" className="w-sm mb-4" />
          </div>
        </section>

        {/* How to $LABUBU */}
        <section className="mt-20 px-6 text-center">
          <img src={HowToLabubu} alt="How To $Labubu" className="w-md mx-auto" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map(({ id, title, description, icon }) => (
              <div key={id} alt={title} className="bg-white/20 rounded-2xl p-4 text-center">
                <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-2" />
                <p className="text-sm">{title}</p>
                <p className="text-xs">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tokenomics */}
        <section className="mt-20 px-6 text-center">
          <img src={LabubuTokenIcon} alt="Toeknomics" className="w-md mx-auto mb-5" />
          <div className="flex flex-col md:flex-row justify-center gap-6 text-center mb-4">
            <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl drop-shadow-md">0%<br />Fees</div>
            <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl drop-shadow-md">100%<br />Community</div>
            <div className="bg-white border-3 border-[#8C4DA3] px-10 py-4 rounded-xl drop-shadow-md">LP<br />Locked</div>
          </div>
          <p className="text-xl font-bold">SUPPLY:<br />1,000,000,000</p>
        </section>

        {/* Join Us */}
        <section className="mt-20 px-6 text-center">
          <img src={JoinUsIcon} alt="Join Us" className="w-2xs mx-auto mb-10" />
          <div className="flex justify-center space-x-4">
            <button className="bg-[#1DA1F2] hover:cursor-pointer text-white font-normal px-10 py-3 rounded-full">Twitter</button>
            <button className="bg-[#4267B2] hover:cursor-pointer text-white font-normal px-10 py-3 rounded-full">Facebook</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-30 text-center text-xs py-6">
          <img src={FooterLabubuIcon} alt="Labubu" className="w-xs mx-auto" />
          <nav className="space-x-10 my-5 text-sm md:text-base">
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
    </div>
  );
}