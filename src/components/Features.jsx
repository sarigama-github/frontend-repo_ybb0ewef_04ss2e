import { Send, Cable, SmartphoneCharging, Gift, Shield, WalletCards } from "lucide-react";

function Features() {
  const items = [
    { icon: Send, title: "UPI Payments", desc: "Send & receive money instantly using UPI" },
    { icon: Cable, title: "Recharge & Bills", desc: "Mobile, DTH, electricity and more" },
    { icon: WalletCards, title: "Cards & Wallet", desc: "Save cards and manage your wallet" },
    { icon: Gift, title: "Rewards", desc: "Cashback and offers on every transaction" },
    { icon: Shield, title: "Insurance", desc: "Cover your life, health, and devices" },
    { icon: SmartphoneCharging, title: "AutoPay", desc: "Never miss a payment again" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 text-center">Everything you need in one app</h2>
        <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">A smooth and secure way to handle your daily payments, recharges, insurance, and rewards.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((x) => (
            <div key={x.title} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 text-white grid place-items-center shadow">
                <x.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{x.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;