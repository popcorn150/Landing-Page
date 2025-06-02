import { useState } from "react";
import { Check } from "lucide-react";
import { Toaster, toast} from "sonner";

const INTEREST = [
  { label: "Alpha Routine", value: "alpha" },
  { label: "Ghost Project", value: "ghost" },
  { label: "Both", value: "both" },
];

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export default function LandingPage() {
  const [selected, setSelected] = useState("alpha");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    setStatus("Sending...");
    try {
      console.log("BACKEND:", BACKEND);
      const res = await fetch(`${BACKEND}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, interest: selected }),
      });

      let data;
      try {
        data = await res.json();
      } catch (jsonError) {
        console.warn("No JSON in response:", jsonError);
        data = {};
      }

      if (res.ok) {
        toast.success("You're in! Check your inbox.");
        setEmail("");
        setStatus("Success");
      } else {
        toast.error(data.message || "Something went wrong.");
        setStatus("Failed");
      }
    } catch (error) {
      console.error("Frontend fetch error:", error);
      toast.error("Server error. Try again later.");
      setStatus("Error");
    }
  };


  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <Toaster richColors position="top-center" />
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
            className="text-gray-500 w-full px-4 py-2 rounded-md border-2 border-gray-700 focus:outline-none focus:border-white transition-all duration-200"
            required
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