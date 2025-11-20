import { ArrowRight, Shield, Zap } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/3 h-[600px] w-[600px] rounded-full bg-purple-300/30 blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            India’s most loved payments app
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Send money, recharge, pay bills and do much more. Experience lightning-fast UPI and secure payments with industry-best rewards.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors">
              Get PhonePay <ArrowRight className="h-4 w-4" />
            </button>
            <button className="px-5 py-3 rounded-full border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 transition-colors">
              Learn more
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <div className="flex items-center gap-2 text-slate-700">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Instant Payments</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm">Bank-grade Security</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-sm">24x7 Support</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-[320px] sm:w-[360px]">
            <div className="absolute -inset-6 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 rounded-[2.5rem] blur-2xl" />
            <div className="relative rounded-[2.5rem] bg-white border border-slate-200 shadow-2xl p-4">
              <div className="rounded-[2rem] bg-slate-900 h-[640px] overflow-hidden ring-4 ring-slate-900/30">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop" alt="app" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;