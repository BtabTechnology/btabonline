import { Metadata } from "next"
import "styles/globals.css"
import { headers } from "next/headers"

import { cookieToInitialState } from "wagmi"

import { config } from "config"
import Web3ModalProvider from "context/Web3ModalProvider"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))
  return (
    <main className="relative">
      <Web3ModalProvider initialState={initialState}>
        {props.children}
      </Web3ModalProvider>
    </main>
  )
}
