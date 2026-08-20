import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-cyan-400">
          Real Estate
        </h1>

        <button
          onClick={() => setShow(true)}
          className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg font-bold hover:bg-cyan-300"
        >
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-cyan-400 font-semibold mb-4">
            DEVELOPMENT OF BUILDINGS
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Grow Your Business
          </h2>

          <p className="text-slate-400 text-lg mt-6 leading-relaxed">
            We Help To Build Your Dream Buildings
          </p>

          <button
            onClick={() => setShow(true)}
            className="mt-8 bg-cyan-400 text-slate-950 px-7 py-3 rounded-lg font-bold hover:bg-cyan-300"
          >
            Start Growing
          </button>
        </div>

        <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-10 rounded-3xl border border-cyan-400/20">

          <div className="text-6xl mb-6">
            🏢
          </div>

          <h3 className="text-3xl font-bold">
            Your Growth, Our Mission
          </h3>

          <p className="text-slate-400 mt-4">
            Strategy, Technology and Creativity combined to deliver results.
          </p>

        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto px-6 pb-20">

        {[
          "Digital Growth",
          "Smart Strategy",
          "Modern Designs",
          "Powerful Technology",
        ].map((x) => (
          <div
            key={x}
            className="bg-slate-800 p-6 rounded-2xl"
          >
            <h3 className="font-bold text-xl">
              {x}
            </h3>

            <p className="text-slate-400 mt-2">
              Solutions designed to move your business forward.
            </p>
          </div>
        ))}

      </section>

      {/* Contact Modal */}
      {show && (
        <div className="fixed inset-0 bg-black/70 grid place-items-center">

          <div className="bg-slate-900 p-8 rounded-2xl text-center border border-slate-700">

            <h2 className="text-2xl font-bold">
              Let's Grow Together
            </h2>

            <p className="text-slate-400 my-4">
              Thanks for contacting us!
            </p>

            <button
              onClick={() => setShow(false)}
              className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-lg font-bold hover:bg-cyan-300"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}