import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="bg-gray-200 text-center py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Welcome to Btab Store
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Find the best products for your needs
      </p>
      <a
        href="/store"
        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      >
        Shop Now
      </a>
    </div>
  )
}

export default Hero
