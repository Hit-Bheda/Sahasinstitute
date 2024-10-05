import { Phone, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 text-stone-800 flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
          <Navbar />
          
          <div className="relative mb-12 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1671767056329-ee0909ed9988?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=400&width=800" 
              alt="Gardening" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-between px-6">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 transition-colors">
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-white/50"></div>
            </div>
          </div>
          
          <p className="text-lg mb-8 text-stone-600 leading-relaxed">
            Discover premium gardening equipment that will elevate your gardening activities. 
            Explore our curated selection of high-quality seeds and fertilizers to nurture your green spaces.
          </p>
          
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
            About Us
          </Button>
          
          <div className="mt-12 bg-gradient-to-br from-amber-200 to-amber-300 p-8 rounded-xl shadow-lg">
            <h2 className="font-bold text-2xl mb-6 text-amber-800">HOME</h2>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button onClick={() => navigate('/login')} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors flex-1">
                AGENCY LOGIN
              </Button>
              <Button onClick={() => navigate('/register')} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors flex-1">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors">
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  )
}