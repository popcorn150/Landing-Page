import { useState } from "react";
import { Check } from "lucide-react";

const INTEREST = [
  { label: "Alpha Routine", value: "alpha" },
  { label: "Ghost Project", value: "ghost" },
  { label: "Both", value: "both" },
];

export default function LandingPage() {
  const [selected, setSelected] = useState("alpha");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    if (!email) return setStatus("Please enter your email.");

    setStatus("Sending...");
    try {
      const res = await fetch("api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, interest: selected }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Success! Check your inbox.");
        setEmail("");
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Error sending email.");
    }
  };


  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-lg w-full text-center space-y-6">
        <img
          src="/BareBones Studio.jpg"
          alt="BareBones Studio Logo"
          className="mx-auto mb-4 w-24 h-24 border-2 border-gray-500 rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold">
          Join BareBones Studio Newsletter
        </h1>
        <p className="text-gray-400">
          Choose your focus & get the first drop.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {INTEREST.map((item) => (
            <button
              key={item.value}
              onClick={() => setSelected(item.value)}
              className={`rounded-2xl p-4 border-2 hover:cursor-pointer transition-all duration-200 flex flex-col items-center justify-center text-sm font-medium
              ${selected === item.value ? "border-white bg-white text-black" : "border-gray-700 bg-gray-900 hover:border-white"}`}
            >
              {selected === item.value && <Check className="mb-2" />}
              {item.label}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black w-full px-4 py-2 rounded-md"
          />
          <button onClick={handleSubmit} className="w-full bg-white text-black hover:bg-gray-200 hover:cursor-pointer font-semibold py-2 px-4 rounded-md">
            Subscribe
          </button>
        </div>

        {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
      </div>
    </main>
  );
}