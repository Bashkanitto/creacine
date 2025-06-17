import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/client'
import { FolderOpenDot, Layers, Settings, SquareKanban } from 'lucide-react'

const Sidebar = () => {
  const { user } = useAuth()
  const pathname = usePathname()

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err: any) {
      console.error(err)
    }
  }

  return (
    <aside className="w-[350px] h-full bg-white text-black flex flex-col justify-between">
      <ul>
        <div className="flex justify-between p-4 shadow-sm">
          <h3>2.47</h3>
          <button>
            <Settings />
          </button>
        </div>
        <li>
          <Link
            href="/admin/reviews"
            className={`flex gap-2 p-4 hover:bg-blue-50 ${
              pathname.startsWith('/admin/reviews') ? 'bg-blue-200' : ''
            }`}
          >
            <SquareKanban />
            Отзывы
          </Link>
        </li>
        <li>
          <Link
            href="/admin/services"
            className={`flex gap-2 p-4 hover:bg-blue-50 ${
              pathname.startsWith('/admin/services') ? 'bg-blue-200' : ''
            }`}
          >
            <Layers />
            Услуги
          </Link>
        </li>
        <li>
          <Link
            href="/admin/projects"
            className={`flex gap-2 p-4 hover:bg-blue-50 ${
              pathname.startsWith('/admin/projects') ? 'bg-blue-200' : ''
            }`}
          >
            <FolderOpenDot />
            Проекты
          </Link>
        </li>
      </ul>
      <div className="flex gap-4 justify-between items-center shadow-sm shadow-black">
        {user && (
          <div className="p-4">
            <p>{user.email}</p>
            <p>{user.displayName}</p>
          </div>
        )}
        <button className="flex gap-4 bg-black text-white p-4" onClick={logout}>
          Выйти
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
