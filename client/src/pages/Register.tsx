import { Phone } from 'lucide-react'
import Sidebar from '../components/sidebar'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import Navbar from '../components/navbar'

export default function Register() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <div className="max-w-4xl mx-auto">
            <Navbar /> 
          
          <h1 className="text-4xl font-bold text-amber-600 mb-8">SAHAS EDUCATION INSTITUTE</h1>
          
          <div className="bg-amber-100 p-6 rounded-lg shadow-md">
            <div className="flex space-x-4 mb-6">
              <Button className="flex-1 bg-amber-300 text-amber-800 hover:bg-amber-400">HOME</Button>
              <Button className="flex-1 bg-lime-400 text-lime-800 hover:bg-lime-500">SIGN UP</Button>
            </div>
            
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Student Photo</label>
                <Button className="w-full bg-amber-300 text-amber-800 hover:bg-amber-400">
                  Upload Image
                </Button>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gardening-101">Gardening 101</SelectItem>
                    <SelectItem value="advanced-horticulture">Advanced Horticulture</SelectItem>
                    <SelectItem value="organic-farming">Organic Farming</SelectItem>
                    <SelectItem value="landscape-design">Landscape Design</SelectItem>
                    <SelectItem value="plant-propagation">Plant Propagation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input placeholder="Student Name" />
              <Input placeholder="State" />
              <Input placeholder="Father Name" />
              <Input placeholder="District" />
              <Input placeholder="Date of Birth" type="date" />
              <Input placeholder="City / Village" />
              <Input placeholder="email id" type="email" />
              <Input placeholder="Duration Of Course" />
              <Input placeholder="Mobile No." type="tel" />
              <Input placeholder="Session Year" />
              <Input placeholder="Address" className="col-span-2" />
              <Input placeholder="Date Of Admission" type="date" className="col-span-2" />
              <Button className="col-span-2 bg-lime-400 text-lime-800 hover:bg-lime-500 py-3 text-lg font-semibold">
                SUBMIT
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Button className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-colors">
        <Phone className="w-6 h-6" />
      </Button>
    </div>
  )
}