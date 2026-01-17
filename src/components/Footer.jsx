export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold text-white mb-4">CA MONK</div>
          <p className="text-sm mb-4">
            Empowering the next generation of financial leaders with tools, community, and knowledge.
          </p>
          <p className="text-xs text-gray-500">© 2024 CA Monk. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Practice Tests</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <a href="#" className="hover:text-white transition-colors block">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors block">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
