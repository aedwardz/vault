'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    TellerConnect: {
      setup: (config: {
        applicationId: string | undefined
        products: string[]
        environment: string
        onSuccess: (enrollment: { accessToken: string }) => void
        onExit: () => void
      }) => { open: () => void }
    }
  }
}

export default function Home() {
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  const [connecting, setConnecting] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('teller_access_token')
    if (token) {
      router.push('/dashboard')
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.teller.io/connect/connect.js'
    script.onload = () => setLoaded(true)
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const openTeller = () => {
    if (!window.TellerConnect) return
    setConnecting(true)

    const handler = window.TellerConnect.setup({
      applicationId: process.env.NEXT_PUBLIC_TELLER_APP_ID,
      products: ['transactions'],
      environment: 'development',
      onSuccess: (enrollment: { accessToken: string }) => {
        localStorage.setItem('teller_access_token', enrollment.accessToken)
        router.push('/dashboard')
      },
      onExit: () => setConnecting(false),
    })

    handler.open()
  }

  return (
    <main>
      <h1>Finance Tracker</h1>
      <button onClick={openTeller} disabled={!loaded || connecting}>
        {connecting ? 'Connecting...' : loaded ? 'Connect Chase' : 'Loading...'}
      </button>
    </main>
  )
}