import { useEffect, useState } from "react"

export const useClient = () => {
  const [client, useClient] = useState(false)

  useEffect(() => {
    useClient(true)
  }, [])

  return client
}