import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"

import { cookieStorage, createStorage } from "wagmi"
import { mainnet, sepolia } from "wagmi/chains"

// Get projectId at https://cloud.walletconnect.com
export const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID || "1b1809496250105f75995601f8458821"

if (!projectId) throw new Error("Project ID is not defined")

const metadata = {
  name: "BtabStore",
  description: "Integrating Web3Modal with WalletConnect",
  url: "https://btab.shop/us", // Replace with your dApp's URLorigin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

// Create wagmiConfig
const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  //   ...wagmiOptions, // Optional - Override createConfig parameters
})
