'use client'
import { useState } from 'react'
import { useAuth, login, logout } from '@/features/admin/useAuth'

export default function AdminPage() {
  const { user, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (loading) return <div>Загрузка...</div>

  if (!user) {
    return (
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          setError('')
          try {
            await login(email, password)
          } catch (err: any) {
            setError('Неверный email или пароль')
          }
        }}
        className="flex flex-col gap-2 max-w-xs mx-auto mt-10"
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Войти
        </button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    )
  }

  return (
    <div className="max-w-xs mx-auto mt-10">
      <div>Вы вошли как: {user.email}</div>
      <button onClick={logout} className="mt-4 bg-gray-300 p-2 rounded">
        Выйти
      </button>
      {/* Здесь разместите админ-функции */}
    </div>
  )
}
