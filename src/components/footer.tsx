
export function Footer() {
  return (
    <>
    <footer className="bg-black border-t border-slate-800 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col items-center gap-10 text-center mb-8 pb-8 border-b border-slate-800 md:flex-row md:justify-between md:text-left ">
            {/* Brand column */}
            <div >
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight">
                Turbo Bites
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Fast. Aggressive. Uncompromising. Your daily fuel.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/menu" className="hover:text-flame-400 transition-colors">Menu</a></li>
                <li><a href="/#locations" className="hover:text-flame-400 transition-colors">Locations</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="/about" className="hover:text-flame-400 transition-colors">About</a></li>
                <li><a href="/contactus" className="hover:text-flame-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              © 2024 Turbo Bites. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="text-slate-400 hover:text-flame-400 transition-colors">Twitter</a>
              <a href="#" className="text-slate-400 hover:text-flame-400 transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-flame-400 transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
      </>
  )
}

