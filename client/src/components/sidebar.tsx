import { Button } from "./ui/button"
import { User, Camera, MessageCircle, Phone } from 'lucide-react'

function Sidebar() {
  return (
    <>
        <aside className="w-20 bg-gradient-to-b from-amber-400 to-amber-500 flex flex-col items-center py-8 space-y-12 shadow-lg">
        <Button variant="ghost" size="icon" className="hover:bg-amber-300 transition-colors">
          <User className="w-6 h-6 text-white" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-amber-300 transition-colors">
          <Camera className="w-6 h-6 text-white" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-amber-300 transition-colors">
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-amber-300 transition-colors">
          <Phone className="w-6 h-6 text-white" />
        </Button>
      </aside>
    </>
  )
}

export default Sidebar