import Image from "next/image"
import logoSrc from "./btab_logo_big.png"

const Logo = () => {
  return <Image src={logoSrc} alt="btab logo" width={150} height={50} />
}

export default Logo;

