import { Menu, Smartphone, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-purple-200/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white grid place-items-center shadow-md">
            <Smartphone className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">PhonePay</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <button className="inline-flex items-center gap-1 hover:text-purple-700 transition-colors">Payments <ChevronDown className="h-4 w-4" /></button>
          <button className="inline-flex items-center gap-1 hover:text-purple-700 transition-colors">Recharge <ChevronDown className="h-4 w-4" /></button>
          <button className="inline-flex items-center gap-1 hover:text-purple-700 transition-colors">Insurance <ChevronDown className="h-4 w-4" /></button>
          <button className="inline-flex items-center gap-1 hover:text-purple-700 transition-colors">Rewards</button>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors">Get the App</button>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;