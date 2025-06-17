'use client'

import Modal from '@/components/Modal'
import Skeleton from '@/components/Skeleton'
import { CustomTable } from '@/components/Table'
import { useState, useEffect } from 'react'

type Review = { id: string; author: string; message: string; role: string; videoLink: string }

export default function ReviewsAdmin() {
  const [modalOpen, setModalOpen] = useState(false)
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')
  const [videoLink, setVideoLink] = useState('')
  const [role, setRole] = useState('')
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)

  const fetchReviews = async () => {
    setLoading(true)
    const res = await fetch('/api/reviews')
    const json = await res.json()
    setReviews(json.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, message, role, videoLink }),
    })
    setAuthor('')
    setMessage('')
    setRole('')
    setVideoLink('')
    fetchReviews()
    closeModal()
  }

  function openModal() {
    setModalOpen(true)
  }
  function closeModal() {
    setModalOpen(false)
  }

  const remove = async (id: string) => {
    await fetch('/api/reviews', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchReviews()
  }

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold mb-4">Отзывы</h1>
        <button className="p-4 bg-blue-500 rounded-xl text-white" onClick={openModal}>
          Добавить
        </button>
      </div>

      {modalOpen && (
        <Modal onClose={closeModal}>
          <form onSubmit={submit} className="flex flex-col gap-3 max-w-md">
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Автор"
              className="border px-3 py-2 rounded"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Сообщение"
              className="border px-3 py-2 rounded"
              required
            />
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Роль"
              className="border px-3 py-2 rounded"
              required
            />
            <input
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              placeholder="Ссылка на видео"
              className="border px-3 py-2 rounded"
            />
            <button
              type="submit"
              disabled={!author || !message}
              className="bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            >
              Добавить
            </button>
          </form>
        </Modal>
      )}

      {loading ? (
        <Skeleton width="100%" height={100} />
      ) : (
        <CustomTable
          data={reviews}
          columns={[
            { header: 'Автор', render: (r) => r.author },
            { header: 'Сообщение', render: (r) => r.message },
            { header: 'Роль', render: (r) => r.role },
            { header: 'Видео', render: (r) => r.videoLink },
            {
              header: 'Действие',
              render: (r) => (
                <button
                  className="bg-red-500 p-2 text-white rounded-xl "
                  onClick={() => remove(r.id)}
                >
                  Удалить
                </button>
              ),
            },
          ]}
        />
      )}
    </div>
  )
}
