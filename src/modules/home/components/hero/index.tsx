import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (

    <div className="relative">
    <div className="bg-red-100 text-red-700 px-4 py-3 text-center">
      <p className="font-bold">This is an experimental page for developers</p>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
          Welcome to Btab Store
        </h1>
        <p className="text-2xl text-white mb-10 opacity-90">
          Discover a world of amazing products tailored just for you
        </p>
        <p className="text-xl text-white mb-12 opacity-80">
          Find the best products for your needs, all in one place
        </p>
        <a
          href="/store"
          className="bg-white text-blue-600 hover:bg-blue-100 font-bold uppercase text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Shop Now
        </a>
      </div>
    </div>
    </div>
  )
}

export default Hero
