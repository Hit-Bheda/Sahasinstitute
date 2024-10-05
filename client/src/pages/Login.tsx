import {  Phone } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

export default function Login() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 flex">
     <Sidebar /> 
      <main className="flex-grow p-8">
        <div className="max-w-lg mx-auto">
          <Navbar />
          
          <h1 className="text-4xl font-bold text-amber-600 mb-8 text-center">SAHAS EDUCATION INSTITUTE</h1>
          
          <div className="bg-amber-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-6 text-center">Login</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white" 
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Enter your password" 
                  className="w-full bg-white" 
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </Label>
                </div>
                <a href="#" className="text-sm text-amber-600 hover:text-amber-500">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full bg-lime-400 text-lime-800 hover:bg-lime-500 py-3 text-lg font-semibold">
                Log In
              </Button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="#" className="text-amber-600 hover:text-amber-500 font-medium">
                  Sign up
                </a>
              </p>
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