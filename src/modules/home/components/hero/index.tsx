import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    // <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
    //   <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
    //     <span>
    //       <Heading
    //         level="h1"
    //         className="text-3xl leading-10 text-ui-fg-base font-normal"
    //       >
    //         Ecommerce Starter Template
    //       </Heading>
    //       <Heading
    //         level="h2"
    //         className="text-3xl leading-10 text-ui-fg-subtle font-normal"
    //       >
    //         Powered by Medusa and Next.js
    //       </Heading>
    //     </span>
    //     <a
    //       href="https://github.com/medusajs/nextjs-starter-medusa"
    //       target="_blank"
    //     >
    //       <Button variant="secondary">
    //         View on GitHub
    //         <Github />
    //       </Button>
    //     </a>
    //   </div>
    // </div>

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
