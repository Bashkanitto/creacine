'use client'

import { auth } from '@/firebase/client'
import { signOut } from 'firebase/auth'
import { useState } from 'react'

export default function AdminPage() {
  const [error, setError] = useState('')

  const logout = async () => {
    setError('')

    try {
      await signOut(auth)
    } catch (err: any) {
      setError(err.message || 'Login failed')
    }
  }

  return (
    <div>
      admin
      {error}
      <button className="bg-black p-4 text-white" onClick={logout}>
        logout
      </button>
    </div>
  )
}
