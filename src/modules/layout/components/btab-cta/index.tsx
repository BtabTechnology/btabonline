import { Text } from "@medusajs/ui"
import NextJs from "@modules/common/icons/nextjs"

const BtabCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus itmes-center">
      Powered by{" "}
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </Text>
  )
}

export default BtabCTA
