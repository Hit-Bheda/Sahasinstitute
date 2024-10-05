import { Search } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
  return (
     <header className="flex justify-between items-center mb-8">
            <div className="relative w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                className="w-full pl-10 pr-4 py-2 rounded-full border-gray-300" 
                placeholder="Search Seeds, Tools, Pots, etc" 
              />
            </div>
            <div>
                <Button onClick={() => navigate('/')} variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-100">
                  Home
                </Button>
                <Button onClick={() => navigate('/login')} variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-100">
                  Login
                </Button>
                <Button variant="ghost" className="text-amber-700 hover:text-amber-800 hover:bg-amber-100">
                  Blog/Article
                </Button>
            </div>


          </header>
  )
}