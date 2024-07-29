import Link from "next/link"
import Navbar from "../navbar"

const profile = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl">profile</h1>
      <Link href="/">Go Home</Link>
    </div>
  )
}

export default profile
