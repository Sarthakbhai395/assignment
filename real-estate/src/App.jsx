import { useState } from "react";
import { Building2, MapPin, Phone, X, CheckCircle2, ArrowRight } from "lucide-react";

export default function App() {
  const [show, setShow] = useState(false), [sent, setSent] = useState(false), [filter, setFilter] = useState("all");
  const properties = [
    { id: 1, title: "Grand Horizon Villa", price: "$3.45M", loc: "Beverly Hills, CA", category: "villa", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600" },
    { id: 2, title: "Skyline Glass Penthouse", price: "$2.89M", loc: "Manhattan, NY", category: "penthouse", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600" },
    { id: 3, title: "Coastal Breeze Estate", price: "$4.10M", loc: "Malibu Beach, CA", category: "villa", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600" },
    { id: 4, title: "Modern Urban Loft", price: "$1.25M", loc: "Austin, TX", category: "apartment", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" }
  ];
  const list = filter === "all" ? properties : properties.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-30">
        <div className="flex items-center gap-2 font-bold text-xl"><Building2 className="text-cyan-400" /> AURA Estates</div>
        <button onClick={() => { setShow(true); setSent(false); }} className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-xl font-bold hover:bg-cyan-300 transition-all flex items-center gap-2 text-sm"><Phone className="w-4 h-4" /> Contact Us</button>
      </nav>
      <section className="max-w-6xl mx-auto px-6 py-14 text-center">
        <span className="bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">Luxury Real Estate</span>
        <h1 className="text-4xl sm:text-6xl font-black mt-4 mb-4 tracking-tight">Find Your Sanctuary in <span className="text-cyan-400">Prime Locations</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg mb-8">Discover hand-picked architectural masterpieces and beachfront luxury villas.</p>
        <div className="flex justify-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800 w-fit mx-auto">
          {["all", "villa", "penthouse", "apartment"].map((t) => (<button key={t} onClick={() => setFilter(t)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all ${filter === t ? "bg-cyan-400 text-slate-950" : "text-slate-400 hover:text-white"}`}>{t}</button>))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((p) => (
          <div key={p.id} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group">
            <img src={p.img} alt={p.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform" />
            <div className="p-4">
              <span className="text-xs text-cyan-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> {p.loc}</span>
              <h3 className="font-bold text-lg mt-1 text-white truncate">{p.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-extrabold text-cyan-400">{p.price}</span>
                <button onClick={() => { setShow(true); setSent(false); }} className="bg-slate-800 hover:bg-cyan-400 hover:text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg transition-all">Inquire</button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {show && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur grid place-items-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 w-full max-w-md relative text-center">
            <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            {sent ? <div className="py-6"><CheckCircle2 className="w-12 h-12 text-cyan-400 mx-auto mb-2" /><h3 className="text-xl font-bold">Inquiry Sent!</h3><p className="text-slate-400 text-xs mt-1">We will contact you shortly.</p></div> : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 text-left">
                <h3 className="text-xl font-bold text-white text-center">Contact Advisory Team</h3>
                <input type="text" placeholder="Full Name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500" /><input type="email" placeholder="Email Address" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500" />
                <button type="submit" className="w-full bg-cyan-400 text-slate-950 font-bold py-2.5 rounded-xl hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 text-sm">Submit Inquiry <ArrowRight className="w-4 h-4" /></button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}