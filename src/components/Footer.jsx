function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-slate-900">PhonePay</h4>
          <p className="text-sm text-slate-600 mt-2">A demo clone experience for educational purposes.</p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-slate-600">
          <div>
            <p className="font-semibold text-slate-800 mb-2">Company</p>
            <ul className="space-y-1">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-800 mb-2">Support</p>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Safety</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-slate-600">
          <p>Made with ❤️ for learning.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;