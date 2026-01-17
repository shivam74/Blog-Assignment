import { Button } from './ui/button'
import { User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-900">CA MONK</div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
            Tools
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
            Practice
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
            Events
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
            Job Board
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-900 transition-colors">
            Points
          </a>
        </nav>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <User className="w-4 h-4 mr-2" />
          Profile
        </Button>
      </div>
    </header>
  )
}
